import { renderBooksCards } from "./components/cardsContainer"

const SEARCH_URL = `https://openlibrary.org/search.json?q=`;

/**
 * @param {string} searchText
*/

const loader = document.querySelectorAll('.loader')[0];
const content = document.querySelectorAll('.cards-section')[0];

export async function handleSearchBooks(searchText) {
    // return alert if no search value
    if (!searchText) alert("Enter your query");
    // turn on loader
    loader.style.display = "grid";
    content.style.display = "none";

    await fetch(
        `${SEARCH_URL}${encodeURIComponent(searchText)}&limit=10`
    ).then(
        response => {
            const data = response.json();
            // show loader, hide books section
            loader.style.display = "none";
            content.style.display = "grid";

            return data;
        }
    ).then (result => {
        // render book cards in HTML
        renderBooksCards(result.docs);
        // set array of seaching books in storage
        localStorage.setItem("books", JSON.stringify(result.docs));
    }).catch(error => {
        console.error('API Error:', error);
        // loader off, show books section
        loader.style.display = "none";
        content.style.display = "grid";
        content.innerHTML = 'Failed to load data.';

        throw error;
    });
}
