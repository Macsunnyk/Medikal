const toggled = document.querySelector('.js-toggle');
const navigationElement = document.querySelector('.js-navigation');
const darkModeBtn = document.querySelector('.js-dark-mode');
const bodyElement = document.querySelector('.body');
const navLinks = document.querySelectorAll('.js-nav');
const blogLinks = document.querySelectorAll('.js-blog');

toggled.addEventListener('click', () => {
    navigationElement.classList.toggle('js-navigation-show')
    document.querySelector('.js-main-container').classList.toggle('navigation-show')
})

console.log(blogLinks)
darkModeBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark');  
      blogLinks.forEach((link) => {
        link.classList.toggle('blog-dark')
      })
})