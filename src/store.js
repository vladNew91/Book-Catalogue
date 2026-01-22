const KEY = 'favoriteBooks';

// get favorites from localStorage
function getFavorites() {
    const favorites = localStorage.getItem(KEY);
    return favorites ? JSON.parse(favorites) : [];
}

// Save favorites to localStorage
function saveFavorites(books) {
    localStorage.setItem(KEY, JSON.stringify(books));
}

// Add a book to favorites
function addBookToFavorites(book) {
    const favorites = getFavorites();
    if (!favorites.find(fav => fav.key === book.key)) { // Prevent duplicates
        favorites.push(book);
        saveFavorites(favorites);
    }
}

// Remove a book from favorites
function removeBookFromFavorites(bookKey) {
    let favorites = getFavorites();
    favorites = favorites.filter(book => book.key !== bookKey);
    saveFavorites(favorites);
}