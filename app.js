// JavaScript code for the X-Treme Fruit Search Bar

// List of fruits for the autofill functionality
const fruits = [
    "Apple", "Apricot", "Avocado",
    "Banana", "Blackberry", "Blueberry", "Boysenberry",
    "Cherry", "Coconut", "Cranberry", "Custard Apple",
    "Date", "Dragonfruit", "Durian",
    "Elderberry",
    "Feijoa", "Fig",
    "Grape", "Grapefruit", "Guava",
    "Honeydew",
    "Jackfruit",
    "Kiwi", "Kumquat",
    "Lemon", "Lime", "Lychee",
    "Mango", "Melon", "Mulberry",
    "Nectarine",
    "Orange",
    "Papaya", "Peach", "Pear", "Persimmon", "Pineapple", "Plum", "Pomegranate",
    "Raspberry", "Red Currant",
    "Strawberry",
    "Tangerine", "Tomato",
    "Ugli Fruit",
    "Watermelon"
  ];
  
  // The search function filters the fruit list based on the user's input
  function search() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let suggestionsBox = document.getElementById('suggestions-box');
  
    // Clear previous suggestions
    suggestionsBox.innerHTML = '';
  
    // Filter the fruits array
    let results = fruits.filter(fruit =>
      fruit.toLowerCase().includes(input)
    );
  
    // Generate the suggestions list
    for (let i = 0; i < results.length; i++) {
      let div = document.createElement('div');
      div.innerHTML = results[i];
      div.classList.add('suggestion');
      div.onclick = function() {
        document.getElementById('search-bar').value = this.innerHTML;
        suggestionsBox.innerHTML = '';
      };
      div.onmouseover = function() {
        this.classList.add('highlight');
      };
      div.onmouseout = function() {
        this.classList.remove('highlight');
      };
      suggestionsBox.appendChild(div);
    }
  
    // Hide the suggestion box if the search bar is empty
    if (input === '') {
      suggestionsBox.innerHTML = '';
    }
  }
  
  // Add event listener for the search bar input
  document.getElementById('search-bar').addEventListener('input', search);
  