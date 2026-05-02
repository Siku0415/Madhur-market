import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { eventName, eventData, eventId, eventUrl, userAgent } = body;

    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const accessToken = process.env.META_CAPI_TOKEN;

    if (!pixelId || !accessToken) {
      // Silently ignore if credentials aren't set yet to avoid client errors
      return NextResponse.json({ status: 'skipped', reason: 'Missing credentials' });
    }

    // Extract client IP from headers
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0] : req.headers.get('x-real-ip') || '0.0.0.0';

    const data = [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_id: eventId,
        event_source_url: eventUrl,
        user_data: {
          client_ip_address: clientIp,
          client_user_agent: userAgent,
        },
        custom_data: eventData,
      },
    ];

    const response = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('CAPI Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
