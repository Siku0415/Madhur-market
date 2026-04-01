export const trackEvent = async (eventName: string, eventData = {}) => {
  // Generate a unique event ID for deduplication between Pixel and CAPI
  const eventId = `evt_${Date.now()}_${Math.floor(Math.random() * 100000)}`;

  // 1. Client-side Pixel tracking
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, eventData, { eventID: eventId });
  }

  // 2. Server-side CAPI tracking
  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventData,
        eventId,
        eventUrl: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : '',
      }),
    });
  } catch (error) {
    console.error('Failed to send CAPI event', error);
  }
};
