import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

declare global {
  interface Window {
    __siteArrivalOverlay?: boolean;
  }
}

export default function App() {
  // Dismiss the cross-site arrival overlay once React has mounted and rendered.
  useEffect(() => {
    if (!window.__siteArrivalOverlay) return;
    window.__siteArrivalOverlay = false;
    let dismissed = false;
    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      const overlay = document.getElementById('site-arrival-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
        overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
      }
    };
    // Brief delay so the page has had a frame to paint before we start fading out
    const t = setTimeout(dismiss, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
}