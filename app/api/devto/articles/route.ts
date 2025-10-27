import { NextResponse } from 'next/server';
import { fetchDevToArticles } from '@/lib/devto-api';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
    const perPage = parseInt(searchParams.get('per_page') || '6');

    if (!username) {
      return NextResponse.json(
        { success: false, error: 'Username is required' },
        { status: 400 }
      );
    }

    const articles = await fetchDevToArticles(username, perPage);

    return NextResponse.json({
      success: true,
      data: articles,
      count: articles.length
    });
  } catch (error) {
    console.error('Error in Dev.to API route:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

