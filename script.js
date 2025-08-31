const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    // Apply the saved theme to the body
    body.classList.add(currentTheme);
}

// Add event listener for toggle button click
toggleButton.addEventListener('click', () => {
    // Toggle between dark and light themes
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    // Save the current theme in localStorage
    const theme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', theme);
});