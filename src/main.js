import { debounce } from "./helpers";
import { searchRequest } from "./api";

// get the input element and add the event listener
const searchInput =  document.getElementById('searchInput');

// 2000ms delay time
const deleyTime = 1000;

// create a debounced version of the function with a 2000ms delay
const debouncedSearch = debounce(searchRequest, deleyTime);

// add debounce
searchInput.addEventListener("input", (e) => {
  // pass the input value to the debounced function
  debouncedSearch(e.target.value);
});
