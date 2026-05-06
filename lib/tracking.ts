export const trackEvent = async (eventName: string, eventData = {}) => {
  // 1. Client-side Pixel tracking
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, eventData);
  }
};
