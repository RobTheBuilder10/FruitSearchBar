// Assume we have a predefined list of fruits
const fruits = [
    "Apple",
    "Apricot",
    "Avocado",
    "Banana",
    "Blackberry",
    "Blueberry",
    "Boysenberry",
    "Cantaloupe",
    "Cherimoya",
    "Cherry",
    "Clementine",
    "Coconut",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Durian",
    "Elderberry",
    "Feijoa",
    "Fig",
    "Grape",
    "Grapefruit",
    "Guava",
    "Honeydew",
    "Jackfruit",
    "Kiwifruit",
    "Kumquat",
    "Lemon",
    "Lime",
    "Lychee",
    "Mango",
    "Mangosteen",
    "Melon",
    "Mulberry",
    "Nectarine",
    "Orange",
    "Papaya",
    "Passionfruit",
    "Peach",
    "Pear",
    "Persimmon",
    "Pineapple",
    "Plum",
    "Pomegranate",
    "Pomelo",
    "Quince",
    "Raspberry",
    "Redcurrant",
    "Starfruit",
    "Strawberry",
    "Tangerine",
    "Ugli fruit",
    "Watermelon"
  ];
  
document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const searchResults = document.getElementById("search-results");
    const searchButton = document.getElementById("search-button");
    const clearButton = document.getElementById("clear-button");
});

    searchBar.addEventListener("keyup", () => {
        const searchValue = searchBar.value.toLowerCase();
        const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(searchValue));
        searchResults.innerHTML = "";
        filteredFruits.forEach(fruit => {
            const fruitItem = document.createElement("li");
            fruitItem.innerText = fruit;
            searchResults.appendChild(fruitItem);
        });
    });

function search(inputText) {
    let results = {};
    if (inputText.length > 0) {
        results = fruits.filter(fruit => fruit.toLowerCase().includes(inputText.toLowerCase()));
        displayResults(results);
    }

if (inputText.length > 0) {
    results = fruits.filter(fruit => fruit.toLowerCase().includes(inputText.toLowerCase()));
    displayResults(results);
} else {
    displayResults([]);
}

function displayResults(results) {
    const suggestionsBox = document.getElementById("search-results");
    suggestionsBox.innerHTML = "";
    results.forEach(fruit => {
        const suggestion = document.createElement('div');
        suggestion.textContent = result;
        suggestion.classList.add('suggestion');
        suggestionsBox.addEventListener('mouseover', highlightSuggestion);
        suggestionsBox.addEventListener('click', () => useSuggestion(result));
        suggestionsBox.appendChild(suggestion);
    });
}

function highlightSuggestion(event) {
    const suggestions = Array.from(event.currentTarget.children);
    suggestions.forEach(suggestion => suggestion.classList.remove('highlight'));
    event.target.classList.add('highlight');
}

function useSuggestion(result) {
    searchBar.value = result;
    searchBar.focus();
    displayResults([]);
}
function displayResults(results) {
    const suggestionsBox = document.getElementById("search-results");
    suggestionsBox.innerHTML = "";
    results.forEach(fruit => {
        const suggestion = document.createElement('div');
        suggestion.textContent = fruit;
        suggestion.classList.add('suggestion');
        suggestionsBox.addEventListener('mouseover', highlightSuggestion);
        suggestionsBox.addEventListener('click', () => useSuggestion(fruit));
        suggestionsBox.appendChild(suggestion);
    });
}

function highlightSuggestion(event) {
    const suggestions = Array.from(event.currentTarget.children);
    suggestions.forEach(suggestion => suggestion.classList.remove('highlight'));
    event.target.classList.add('highlight');
}

function displayResults(results) {
    const suggestionsBox = document.getElementById("search-results");
    suggestionsBox.innerHTML = "";
    results.forEach(fruit => {
        const suggestion = document.createElement('div');
        suggestion.textContent = fruit;
        suggestion.classList.add('suggestion');
        suggestionsBox.addEventListener('mouseover', highlightSuggestion);
        suggestionsBox.addEventListener('click', () => useSuggestion(fruit));
        suggestionsBox.appendChild(suggestion);
    });
}

function highlightSuggestion(event) {
    const suggestions = Array.from(event.currentTarget.children);
    suggestions.forEach(suggestion => suggestion.classList.remove('highlight'));
    event.target.classList.add('highlight');
}
