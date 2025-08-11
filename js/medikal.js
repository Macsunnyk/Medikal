const toggled = document.querySelector('.js-toggle');
const navigationElement = document.querySelector('.js-navigation');
const darkModeBtn = document.querySelector('.js-dark-mode');
const bodyElement = document.querySelector('.body');
const blogLinks = document.querySelectorAll('a');
const blogDiv = document.querySelectorAll('.js-border');

// Mobile nav toggle
toggled.addEventListener('click', () => {
    navigationElement.classList.toggle('js-navigation-show');
    document.querySelector('.js-main-container').classList.toggle('navigation-show');
});

// Check saved theme on load
function darkModeTheme() {
    if (localStorage.getItem('theme') === 'dark') {
    bodyElement.classList.add('dark');
    blogLinks.forEach(link => link.classList.add('blog-dark'));
    darkModeBtn.textContent = 'light';
} else {
    darkModeBtn.textContent = 'dark';
}

// Dark mode toggle with save
darkModeBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark');
    blogLinks.forEach(link => link.classList.toggle('blog-dark'));

    if (bodyElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkModeBtn.textContent = 'light';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeBtn.textContent = 'dark';
    }
});
}

darkModeTheme();
