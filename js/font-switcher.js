/**
 * Font Switcher
 * Allows switching between different typography pairings with localStorage support
 */

(function() {
  // DOM elements
  const htmlEl = document.documentElement;
  const fontSwitcher = document.getElementById('font-switcher');
  
  // Font options
  const FONT_DEFAULT = 'default';
  const FONT_SECONDARY = 'secondary';
  const FONT_TERTIARY = 'tertiary';
  const STORAGE_KEY = 'preferred-font';
  
  // Apply font pairing
  const setFontPair = (fontPair) => {
    // Add data attribute to html element
    htmlEl.setAttribute('data-font', fontPair);
    
    // Update dropdown selection if it exists
    if (fontSwitcher) {
      fontSwitcher.value = fontPair;
    }
    
    // Store in localStorage
    localStorage.setItem(STORAGE_KEY, fontPair);
  };
  
  // Get user preference from localStorage or use default
  const getUserPreference = () => {
    const userPref = localStorage.getItem(STORAGE_KEY);
    return userPref || FONT_DEFAULT;
  };
  
  // Initialize font pairing
  const initFontPair = () => {
    // Set initial font pairing
    const userPreference = getUserPreference();
    setFontPair(userPreference);
    
    // Add event listener to font switcher dropdown
    if (fontSwitcher) {
      fontSwitcher.addEventListener('change', (e) => {
        setFontPair(e.target.value);
      });
    }
  };
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFontPair);
  } else {
    initFontPair();
  }
  
  // Expose font API to window (for developer use)
  window.fontSwitcher = {
    setFontPair,
    getCurrentFontPair: () => htmlEl.getAttribute('data-font') || getUserPreference()
  };
})();