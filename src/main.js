import { handleSearchBooks } from "./api";
import { debounce } from "./helpers/debounce";

// get the input element and add the event listener
const searchInput =  document.getElementById('searchInput');
const getSearchInputValue = () => { 
    return searchInput.value;
}

// 2000ms delay time
const deleyTime = 2000;

// create a debounced version of the function with a 2000ms delay
const debouncedSearch = debounce(handleSearchBooks, deleyTime);

// add debounce
searchInput.addEventListener("input", (e) => {
  // pass the input value to the debounced function
  debouncedSearch(e.target.value);
});

// get btn 'search' and make search request
const searchBtn = document.querySelectorAll('.search-btn')[0];
searchBtn.addEventListener('click', () => handleSearchBooks(getSearchInputValue()));
