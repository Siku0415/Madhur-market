export const trackEvent = async (eventName: string, eventData = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, eventData);
  }
};
