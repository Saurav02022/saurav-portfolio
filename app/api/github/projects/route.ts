import { NextRequest, NextResponse } from 'next/server';
import { getLatestProjects } from '@/lib/github-api';
import { API_LIMITS, CACHE_TIMES } from '@/lib/constants';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const count = Math.min(
      parseInt(searchParams.get('count') || `${API_LIMITS.DEFAULT_PROJECTS}`),
      API_LIMITS.MAX_PROJECTS
    );
    
    const projects = await getLatestProjects(count);
    
    return NextResponse.json(
      {
        success: true,
        data: projects,
        count: projects.length
      },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_TIMES.GITHUB_REPOS}, stale-while-revalidate=${CACHE_TIMES.LONG}`,
        }
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('GitHub API route error:', errorMessage);
    
    // Check if it's a rate limit error
    const isRateLimitError = errorMessage.includes('403') || errorMessage.toLowerCase().includes('rate limit');
    
    return NextResponse.json(
      {
        success: false,
        error: isRateLimitError 
          ? 'GitHub API rate limit reached. Please try again later.'
          : 'Failed to fetch GitHub projects',
        data: [],
        rateLimitExceeded: isRateLimitError
      },
      { status: isRateLimitError ? 429 : 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
