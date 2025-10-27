import { NextResponse } from 'next/server';
import { fetchWakaTimeStats } from '@/lib/wakatime-api';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range') as 'last_7_days' | 'last_30_days' | 'last_6_months' | 'last_year' || 'last_7_days';

    const stats = await fetchWakaTimeStats(range);

    if (!stats) {
      return NextResponse.json(
        { success: false, error: 'Failed to fetch WakaTime stats' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: stats.data
    });
  } catch (error) {
    console.error('Error in WakaTime API route:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch WakaTime stats' },
      { status: 500 }
    );
  }
}

