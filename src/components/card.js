import noCoverImg from "../assets/nocover.jpg";
import { getAuthors } from "../helpers";


const COVER_URL = `https://covers.openlibrary.org/b/id/`;

/**
 * @param {object} book
*/

export const card = (book) => {
    // 1. Create the main card container
    const card = document.createElement('div');
    card.classList.add('book-card');

    // 2. Create and configure the image
    const img = document.createElement('img');
    img.src = book.cover_i ? `${COVER_URL}${book.cover_i}-M.jpg` : noCoverImg;
    img.alt = "Book cover";
    img.classList.add('coverImg');
    img.loading = "lazy";

    // 3. Create the description container
    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card-description');

    // 4. Create the title
    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = book.title;

    // 5. Create the author span
    const authorSpan = document.createElement('span');
    const authors = getAuthors(book.author_name);
    authorSpan.classList.add('under-title-text', 'hidden');
    authorSpan.title = authors;
    authorSpan.textContent = authors;

    // 6. Create the year span
    const yearSpan = document.createElement('span');
    yearSpan.classList.add('under-title-text', 'responsive-textt');
    yearSpan.textContent = book.first_publish_year || 'N/A';

    // 7. Assemble the elements
    cardDescription.appendChild(title);
    cardDescription.appendChild(authorSpan);
    cardDescription.appendChild(yearSpan);

    card.appendChild(img);
    card.appendChild(cardDescription);

    return card;
};