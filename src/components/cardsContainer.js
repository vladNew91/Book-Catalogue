import { card } from "../components";

const cardsSection = document.querySelectorAll(".cards-section")[0];

/**
 * @param {Array<T>} books
*/

export const cardsContainer = (books = []) => {
    // if empty input search will render "No books"
    if (!books.length) return cardsSection.innerHTML = "No books";

    const booksCardsHTML = books.map(book => {
        // serialize a DOM tree into an XML string and render card component
        const serializer = new XMLSerializer();
        const xmlString = serializer.serializeToString(card(book));
        return xmlString;
    });

    // convert array of HTML elements to string
    const finalHTML = booksCardsHTML.join("");
    // render result to cardsSection
    cardsSection.innerHTML = finalHTML;
};
