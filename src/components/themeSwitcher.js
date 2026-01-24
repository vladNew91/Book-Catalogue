const themeSwitcherBtn = document.querySelectorAll('.theme-btn')[0];
const currentTheme = localStorage.getItem('theme');

// Apply stored theme immediately
(function applyStoredTheme() {
    if (currentTheme !== 'dark') return;
    document.documentElement.classList.add('dark-theme');
})();

// Function to switch the theme
function switchTheme() {
    const isDarkTheme = document.documentElement.classList.toggle('dark-theme');

    let themeName = 'light';
    if (isDarkTheme) {
        themeName = 'dark';
    }

    // Store the new theme preference
    localStorage.setItem('theme', themeName);
}

// Add event listener to the toggle button
themeSwitcherBtn.addEventListener('click', switchTheme);
