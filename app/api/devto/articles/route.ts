import { NextResponse } from 'next/server';
import { fetchDevToArticles } from '@/lib/devto-api';
import { API_LIMITS, CACHE_TIMES } from '@/lib/constants';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
    const perPage = Math.min(
      parseInt(searchParams.get('per_page') || `${API_LIMITS.DEFAULT_ARTICLES}`),
      API_LIMITS.MAX_ARTICLES
    );

    if (!username) {
      return NextResponse.json(
        { success: false, error: 'Username is required' },
        { status: 400 }
      );
    }

    const articles = await fetchDevToArticles(username, perPage);

    return NextResponse.json(
      {
        success: true,
        data: articles,
        count: articles.length
      },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_TIMES.DEVTO_ARTICLES}, stale-while-revalidate=${CACHE_TIMES.LONG}`,
        }
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in Dev.to API route:', errorMessage);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch articles',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

