export function debounce(fn, delay) {
    let timer; // This variable is maintained using closure
    return function (...args) { // Returns a new function
        clearTimeout(timer); // Clear the previous timer on each new call
        timer = setTimeout(() => {
            fn.apply(this, args); // Call the original function after the delay
        }, delay);
    };
}

/**
 * @param {string} tooltip
*/

export function getTooltip(tooltip) {
    if (!tooltip) return 'N/A';
    return tooltip.join(', ');
};
