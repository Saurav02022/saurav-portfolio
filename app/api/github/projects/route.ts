import { NextRequest, NextResponse } from 'next/server';
import { getLatestProjects } from '@/lib/github-api';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const count = parseInt(searchParams.get('count') || '3');
    
    const projects = await getLatestProjects(count);
    
    return NextResponse.json({
      success: true,
      data: projects,
      count: projects.length
    });
  } catch (error) {
    console.error('GitHub API route error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch GitHub projects',
        data: []
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
