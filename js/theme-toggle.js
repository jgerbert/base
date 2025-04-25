/**
 * Theme Toggle
 * Handles light/dark mode toggling with localStorage support
 * and respects prefers-color-scheme
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
  
  // Apply theme
  const setTheme = (theme) => {
    htmlEl.setAttribute('data-theme', theme);
    
    // Update icon
    if (themeIcon) {
      themeIcon.textContent = theme === THEME_DARK ? '☀️' : '🌙';
    }
    
    // Store in localStorage
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
    // Set initial theme
    const userPreference = getUserPreference();
    setTheme(userPreference);
    
    // Add event listener to theme toggle button
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Listen for system preference changes
    prefersDarkScheme.addEventListener('change', (e) => {
      // Only auto-switch if user hasn't set a preference
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