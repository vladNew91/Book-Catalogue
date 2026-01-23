import noCoverImg from "../assets/nocover.jpg";
import { getTooltip } from "../helpers";


const COVER_URL = `https://covers.openlibrary.org/b/id/`;
const cardsSection = document.querySelectorAll(".cards-section")[0];

export const renderBooksCards = (data = []) => {
    // if empty input search will render "No books"
    if (!data.length) return cardsSection.innerHTML = "No books";

    const booksCardsHTML = data.map(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');

        // render cover image or plceholder
        const coverUrl = book.cover_i
            ? `${COVER_URL}${book.cover_i}-M.jpg`
            : noCoverImg; // Path to local placeholder image

        card.innerHTML = `
            <img src="${coverUrl}" alt="Book cover" class="coverImg" loading="lazy">
            <div class="card-description">
                <h3 class="title">${book.title}</h3>
                <span class="under-title-text hidden" title="${getTooltip(book.author_name)}">
                    ${getTooltip(book.author_name)}
                </span>
                <span class="under-title-text responsive-textt">
                    ${book.first_publish_year || 'N/A'}
                </span>
            </div>
        `;

        // serialize a DOM tree into an XML string
        const serializer = new XMLSerializer();
        const xmlString = serializer.serializeToString(card);

        return xmlString;
    });

    // convert array of HTML elements to string
    const finalHTML = booksCardsHTML.join("");
    // render result to cardsSection
    cardsSection.innerHTML = finalHTML;
}