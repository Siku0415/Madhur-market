export const trackEvent = async (eventName: string, eventData = {}) => {
  console.log(`[Tracking] Attempting to track: ${eventName}`, eventData);
  
  if (typeof window !== 'undefined') {
    if ((window as any).fbq) {
      console.log(`[Tracking] Sending event to Pixel: ${eventName}`);
      (window as any).fbq('track', eventName, eventData);
    } else {
      console.warn(`[Tracking] Meta Pixel (fbq) not initialized or blocked by adblocker.`);
    }
  }
};
