import { NextRequest, NextResponse } from 'next/server';
import { fetchGitHubStats } from '@/lib/github-stats';

export async function GET(request: NextRequest) {
  try {
    const stats = await fetchGitHubStats();
    
    return NextResponse.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('GitHub stats API route error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch GitHub statistics',
        data: null
      },
      { status: 500 }
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
