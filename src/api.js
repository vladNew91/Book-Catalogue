import { showLoading, hideLoading } from "./helpers";
import { cardsContainer } from ".//components";

const SEARCH_URL = `https://openlibrary.org/search.json?q=`;
const content = document.querySelectorAll('.cards-section')[0];

/**
 * @param {string} searchText
*/

export async function searchRequest(searchText) {
    // return alert if no search value
    if (!searchText) return alert("Enter your query");

    showLoading();

    await fetch(
        `${SEARCH_URL}${encodeURIComponent(searchText)}&limit=10`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }
    ).then(response => response.json()
    ).then(books => {
        hideLoading();
        // render cards in HTML
        cardsContainer(books.docs);
    }).catch(error => {
        console.error('API Error:', error);
        hideLoading();
        // show error in cards section
        content.innerHTML = 'Failed to load data.';
        throw error;
    });
}
