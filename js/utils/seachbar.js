import { healthPostWithId } from "../blogpost.js";

const searchInput = document.querySelector('.js-search-input');
const searchButton = document.querySelector('.js-search-button');
const suggest = document.querySelector('.js-suggestion-con');

// Search
search();

export function search() {
    //Instead of storing .value when the page loads, read it inside the event listener:
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();


        //Check if any post matches the input. Use .filter() and .some():  
        //.includes() lets you match partial words.
        //.some() checks each keyword in the array.
        const results = healthPostWithId.filter(post => 
            post.blogTitle.toLowerCase().includes(query) || 
            (post.keywords && post.keywords.some(k => k.toLowerCase().includes(query)))
        );

        //Use .map() to turn each result into an <a>:
        suggest.innerHTML = results.map(post => `
                <a href="#" class="suggest">${post.blogTitle}</a>
            `).join('')
        
            //If results.length === 0, show a friendly message and some trending posts:

            if(results.length === 0) {
                const trending = healthPostWithId.filter(post => post.trending).slice(0, 4);
                suggest.innerHTML = `
                    <p>Sorry, we don't have anything related to your search. You might like:</p>
                    ${trending.map(post => `<a href="#" class="suggest">${post.blogTitle}</a>`).join('')}
                `;
            }
    });
}
