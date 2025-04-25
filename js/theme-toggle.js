/**
 * Theme Toggle
 * Handles light/dark mode toggling with localStorage support,
 * respects prefers-color-scheme, and uses flat SVG icons.
 */

(function() {
  // DOM elements
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Theme options
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';
  const STORAGE_KEY = 'preferred-theme';

  // Get system preference
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Get user preference from localStorage or use system preference
  const getUserPreference = () => {
    const userPref = localStorage.getItem(STORAGE_KEY);
    if (userPref) {
      return userPref;
    }
    return prefersDarkScheme.matches ? THEME_DARK : THEME_LIGHT;
  };

  // Update SVG icon based on theme
  const updateIcon = (theme) => {
  if (!themeIcon) return;

  // Clear old icon
  if (theme === THEME_DARK) {
    themeIcon.innerHTML = `
      <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414-1.414M18.364 18.364l-1.414-1.414M6.05 6.05L4.636 7.464" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="12" cy="12" r="5" fill="currentColor"/>
    `;
  } else {
    themeIcon.innerHTML = `
      <path d="M21 12.79A9 9 0 0112.21 3a7 7 0 109.79 9.79z" fill="currentColor"/>
    `;
  }

  // Trigger animation
  themeIcon.classList.remove('theme-icon-animate');
  void themeIcon.offsetWidth; // Force reflow to restart animation
  themeIcon.classList.add('theme-icon-animate');
};

  // Apply theme
  const setTheme = (theme) => {
    htmlEl.setAttribute('data-theme', theme);
    updateIcon(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  };

  // Toggle theme
  const toggleTheme = () => {
    const currentTheme = htmlEl.getAttribute('data-theme') || getUserPreference();
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    setTheme(newTheme);
  };

  // Initialize theme
  const initTheme = () => {
    const userPreference = getUserPreference();
    setTheme(userPreference);

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system preference changes
    prefersDarkScheme.addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(e.matches ? THEME_DARK : THEME_LIGHT);
      }
    });
  };

  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Expose theme API to window (for developer use)
  window.themeToggler = {
    setTheme,
    toggleTheme,
    getCurrentTheme: () => htmlEl.getAttribute('data-theme') || getUserPreference()
  };
})();
