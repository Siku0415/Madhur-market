'use server';

import { headers } from 'next/headers';

export async function trackCapiEvent(eventName: string, eventData: any = {}) {
  const pixelId = process.env.META_PIXEL_ID || '751283967242809';
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!accessToken) {
    console.error('Meta Access Token is missing');
    return { success: false, error: 'Config missing' };
  }

  try {
    const headerList = await headers();
    const userAgent = headerList.get('user-agent') || '';
    const ip = headerList.get('x-forwarded-for')?.split(',')[0] || headerList.get('x-real-ip') || '';

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          user_data: {
            client_ip_address: ip,
            client_user_agent: userAgent,
          },
          custom_data: {
            value: eventData.value || 0,
            currency: eventData.currency || 'INR',
            ...eventData
          },
        },
      ],
    };

    const response = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return { success: true, result };
  } catch (error) {
    console.error('CAPI Track Error:', error);
    return { success: false, error: String(error) };
  }
}
