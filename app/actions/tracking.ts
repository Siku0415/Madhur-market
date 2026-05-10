'use server';

import { headers } from 'next/headers';

export async function trackCapiEvent(eventName: string, eventData: any = {}) {
  const pixelId = '751283967242809';
  const accessToken = 'EAAbquelnIfwBRbbE1YM9aEg05CBjbpqZCuDr8sXURhW6bu2wc8KmZC94ChciSdQV5QlVkTqxwwFhNfcbb7ZA8rpm0UFYVVmvP5bzJWXbL7t9D3IjdAI9wzUDSpBpGC9ZAf6xCm2ytdOWb7UmtwVaM08mIcFOnDfItXxqOLGhzN8G6iDIBxDPicuqvjtehAGzcwZDZD';

  try {
    const headerList = await headers();
    const userAgent = headerList.get('user-agent') || '';
    const ip = headerList.get('x-forwarded-for')?.split(',')[0] || headerList.get('x-real-ip') || '';

    // Unique event ID for better deduplication
    const eventId = `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_id: eventId,
          event_source_url: headerList.get('referer') || '',
          user_data: {
            client_ip_address: ip,
            client_user_agent: userAgent,
          },
          custom_data: {
            value: eventData.value || 0,
            currency: eventData.currency || 'INR',
            content_name: eventData.content_name || 'APK Download',
            ...eventData
          },
        },
      ],
    };

    console.log(`Sending CAPI event ${eventName} (IP: ${ip})`);

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
