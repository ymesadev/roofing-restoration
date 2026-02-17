declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export function pushToDataLayer(event: string, data?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

export function trackFormSubmission(formType: string, service?: string, location?: string) {
  pushToDataLayer('form_submission', {
    form_type: formType,
    service_selected: service || '',
    location: location || '',
  });

  const conversionId = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GADS_FORM_CONVERSION_LABEL;
  if (conversionId && conversionLabel && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
    });
  }
}

export function trackPhoneClick(location?: string) {
  pushToDataLayer('phone_click', {
    location: location || '',
  });

  const conversionId = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GADS_PHONE_CONVERSION_LABEL;
  if (conversionId && conversionLabel && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
    });
  }
}
