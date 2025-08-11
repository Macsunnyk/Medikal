const topHealthPosts = [{
    tags: 'Nutriton',
    blogTitle: '10+ tips for eating out on a low FODMAP diet',
    blogPostImage: 'images/image1.jpg',
    keyword: ['food', 'health']
},
{
    tags: 'Nutriton',
    blogTitle: '10+ tips for eating out on a low FODMAP diet',
    blogPostImage: 'images/image2.jpg'
},
{
    tags: 'Nutriton',
    blogTitle: '10+ tips for eating out on a low FODMAP diet',
    blogPostImage: 'images/image3.jpg'
},
{
    tags: 'Nutriton',
    blogTitle: '10+ tips for eating out on a low FODMAP diet',
    blogPostImage: 'images/image4.jpg'
},
{
    tags: 'Nutriton',
    blogTitle: '10+ tips for eating out on a low FODMAP diet',
    blogPostImage: 'images/image5.jpg'
}];


let topPostHTML = '';
topHealthPosts.forEach((topPosts) => {
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



const latestHealthPost = [{
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet',
    link: '#'
},
{
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet'
}, {
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet'
}, {
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet'
}, {
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet'
}, {
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet'
}, {
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet'
}, {
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet'
}, {
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet'
}, {
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet'
}, {
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet'
}, {
    blogPostImage: 'images/image3.jpg',
    tag: 'nutriton',
    blogTitle: ' 10+ tips for eating out on a low FODMAP diet'
}];

let latestPostHTML = '';

latestHealthPost.forEach((latestPost) => {
    latestPostHTML += `
        <div class="latest-one">
            <div class="latest-image">
                <img src="${latestPost.blogPostImage}" alt="" class="latest-img">
            </div>
            <div class="latest-con">
                <p class="latest-tag">
                    ${latestPost.tag}
                </p>
                <a href="#" class="">
                    ${latestPost.blogTitle}
                </a>
            </div>
        </div>
    `
});
document.querySelector('.js-latest-con').innerHTML = latestPostHTML;



const trendingPost = [{
    tag: 'nutriton',
    blogTitle: ' IV Therapy or gummies: which is better for achieving a glowing skin',
    number: '1',
    link: '#'
}, {
    tag: 'nutriton',
    blogTitle: ' IV Therapy or gummies: which is better for achieving a glowing skin',
    number: '2',
    link: '#'
}, {
    tag: 'nutriton',
    blogTitle: ' IV Therapy or gummies: which is better for achieving a glowing skin',
    number: '3',
    link: '#'
}, {
    tag: 'nutriton',
    blogTitle: ' IV Therapy or gummies: which is better for achieving a glowing skin',
    number: '4',
    link: '#'
}, {
    tag: 'nutriton',
    blogTitle: ' IV Therapy or gummies: which is better for achieving a glowing skin',
    number: '5',
    link: '#'
}, {
    tag: 'nutriton',
    blogTitle: ' IV Therapy or gummies: which is better for achieving a glowing skin',
    number: '6',
    link: '#'
},  {
    tag: 'nutriton',
    blogTitle: ' IV Therapy or gummies: which is better for achieving a glowing skin',
    number: '7',
    link: '#'
}, {
    tag: 'nutriton',
    blogTitle: ' IV Therapy or gummies: which is better for achieving a glowing skin',
    number: '8',
    link: '#'
}, {
    tag: 'nutriton',
    blogTitle: ' IV Therapy or gummies: which is better for achieving a glowing skin',
    number: '9',
    link: '#'
}, {
    tag: 'nutriton',
    blogTitle: ' IV Therapy or gummies: which is better for achieving a glowing skin',
    number: '10',
    link: '#'
}];

let trendingPostHTML = '';

trendingPost.forEach((trending) => {
    trendingPostHTML += `
        <div class="tren">
            <p class="num">
                ${trending.number}
            </p>
            <div class="tren-con">
                <p class="tren-tag">
                    ${trending.tag}
                </p>
                <a href="#">
                    ${trending.blogTitle}
                </a>
            </div>
        </div>
    `;
});

document.querySelector('.js-trending').innerHTML = trendingPostHTML;
