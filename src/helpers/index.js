export const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
};

/**
 * @param {Array<T>} authors
*/

export function getAuthors(authors) {
    if (!authors) return 'N/A';
    return authors.join(', ');
};

const loader = document.querySelectorAll('.loader')[0];
const content = document.querySelectorAll('.cards-section')[0];

export const showLoading = () => {
    // turn on loader, hide content
    loader.style.display = "grid";
    content.style.display = "none";
};

export const hideLoading = () => {
    // loader off, show books section
    loader.style.display = "none";
    content.style.display = "grid";
};

