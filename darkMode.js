const darkModeToggle = document.getElementById('dark-mode-toggle');

const applyDarkMode = (isDark) => {
  document.body.classList.toggle('dark-mode', isDark);
  darkModeToggle.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
};

const savedDarkMode = localStorage.getItem('darkMode') === 'enabled';
applyDarkMode(savedDarkMode);

darkModeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  darkModeToggle.classList.replace(isDarkMode ? 'fa-moon' : 'fa-sun', isDarkMode ? 'fa-sun' : 'fa-moon');
});
