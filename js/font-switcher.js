/**
 * Font Switcher
 * Live Google Fonts pairing selector with localStorage support
 */

(function () {
  const htmlEl = document.documentElement;
  const fontSwitcher = document.getElementById('font-pairing-select');
  const fontPreview = document.getElementById('font-pairing-preview');
  const toggleFontPreview = document.getElementById('toggle-font-preview');

  const STORAGE_KEY = 'preferred-font-pairing';
  const LINK_ID = 'dynamic-fonts-live';

  // Load fonts from Google and apply CSS vars
  const applyFontPairing = (heading, body) => {
    let link = document.getElementById(LINK_ID);
    if (!link) {
      link = document.createElement('link');
      link.id = LINK_ID;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    const families = [heading, body].map(f => f.trim().replace(/ /g, '+')).join('&family=');
    link.href = `https://fonts.googleapis.com/css2?family=${families}&display=swap`;

    htmlEl.style.setProperty('--font-heading', `'${heading}', serif`);
    htmlEl.style.setProperty('--font-body', `'${body}', sans-serif`);
  };

  // Extract fonts from selector value
  const parsePair = (value) => {
    return value.split('|').map(f => f.trim());
  };

  // Save selected value to localStorage
  const storeFontSelection = (value) => {
    localStorage.setItem(STORAGE_KEY, value);
  };

  // Load saved pairing from localStorage
  const getStoredPairing = () => {
    return localStorage.getItem(STORAGE_KEY) || 'EB Garamond|Plus Jakarta Sans';
  };

  // Initialize pairing on load
  const initFontSwitcher = () => {
    const savedValue = getStoredPairing();

    // Update select if available
    if (fontSwitcher) fontSwitcher.value = savedValue;

    // Apply saved fonts
    const [heading, body] = parsePair(savedValue);
    applyFontPairing(heading, body);

    // Listen to changes
    if (fontSwitcher) {
      fontSwitcher.addEventListener('change', (e) => {
        const value = e.target.value;
        if (value === 'custom') {
          alert('Custom font selection coming soon!');
          return;
        }

        storeFontSelection(value);
        const [h, b] = parsePair(value);
        applyFontPairing(h, b);
      });
    }

    // Handle collapsible toggle
    if (toggleFontPreview && fontPreview) {
      toggleFontPreview.addEventListener('click', () => {
        const isVisible = !fontPreview.hidden;
        fontPreview.hidden = isVisible;
        toggleFontPreview.textContent = isVisible ? 'Customize Fonts' : 'Hide Font Preview';
      });
    }
  };

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFontSwitcher);
  } else {
    initFontSwitcher();
  }

  // Public API
  window.fontSwitcher = {
    apply: applyFontPairing,
    getSelected: () => localStorage.getItem(STORAGE_KEY)
  };
})();
