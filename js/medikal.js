import {healthPosts, healthPostWithId} from './blogpost.js';



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
        darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// Dark mode toggle with save
darkModeBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark');
    blogLinks.forEach(link => link.classList.toggle('blog-dark'));

    if (bodyElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeBtn.innerHTML = '<i class="fa-solid fa-moon "></i>';
    }
});

darkModeTheme();



const recentPost = healthPostWithId.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);



let topPostHTML = '';
recentPost.forEach((topPosts) => {
    topPostHTML += `
        <div class="top-one js-border">
            <div class="top-one-img">
                <img src="${topPosts.blogPostImage}" alt="" class="top-one-image just-one">
            </div>
            <div class="top-one-con">
                <div class="tag">
                    <p>${topPosts.tags}</p>
                </div>
                <div class="blog-title">
                    <a href="#" class="blog-title-link js-blog">
                        ${topPosts.blogTitle}
                    </a>
                </div>

            </div>
        </div>
    `;
});

document.querySelector('.js-top-health').innerHTML = topPostHTML;

const diseases = healthPostWithId.filter(post => post.tags === 'Diseases').sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 10);

let diseasesAndDisordersHTML = '';

diseases.forEach((latestPost) => {
    diseasesAndDisordersHTML += `
        <div class="latest-one">
            <div class="latest-image">
                <img src="${latestPost.blogPostImage}" alt="" class="latest-img">
            </div>
            <div class="latest-con">
                <p class="latest-tag">
                    ${latestPost.tags}
                </p>
                <a href="#" class="">
                    ${latestPost.blogTitle}
                </a>
            </div>
        </div>
    `
});
document.querySelector('.js-latest-con').innerHTML = diseasesAndDisordersHTML;



const trendingPost = healthPostWithId.filter(post => post.trending).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((post, index) => ({
    ...post,
    rank: index + 1
})).slice(0, 10);

let trendingPostHTML = '';

trendingPost.forEach((trending) => {
    trendingPostHTML += `
        <div class="tren">
            <p class="num">
                ${trending.rank}
            </p>
            <div class="tren-con">
                <p class="tren-tag">
                    ${trending.tags}
                </p>
                <a href="#" class="tren-links">
                    ${trending.blogTitle}
                </a>
            </div>
        </div>
    `;
});

document.querySelector('.js-trending').innerHTML = trendingPostHTML;