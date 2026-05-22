import React, { useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function normalizePath(path) {
  if (!path || path === '/') {
    return '/';
  }

  return path.replace(/\/$/, '');
}

export default function Root({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const { pathname } = useLocation();
  const sentConversions = useRef(new Set());

  useEffect(() => {
    const { googleAdsOnboardingConversionPath, googleAdsOnboardingConversionSendTo } = siteConfig.customFields;

    if (!googleAdsOnboardingConversionSendTo) {
      return;
    }

    const conversionPath = normalizePath(googleAdsOnboardingConversionPath);
    const currentPath = normalizePath(pathname);

    if (currentPath !== conversionPath || typeof window.gtag !== 'function') {
      return;
    }

    const conversionKey = `${googleAdsOnboardingConversionSendTo}:${currentPath}`;

    if (sentConversions.current.has(conversionKey)) {
      return;
    }

    window.gtag('event', 'conversion', {
      send_to: googleAdsOnboardingConversionSendTo,
    });
    sentConversions.current.add(conversionKey);
  }, [pathname, siteConfig.customFields]);

  return <>{children}</>;
}
