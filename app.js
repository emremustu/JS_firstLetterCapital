

const textInput = document.getElementById("textInput");
const SubmitButton = document.getElementById("SubmitButton");

SubmitButton.addEventListener("click", function () {
  let input = textInput.value; // Getting the value from user

  EachWordsFirstUpper(input); // Calling the function
});








// Sint velit do aliquip magna non labore consectetur. Incididunt sunt aliquip culpa consectetur deserunt officia. Aliquip laborum pariatur consectetur fugiat culpa consequat magna. Duis sint esse enim consectetur ex officia. Qui deserunt pariatur quis ex duis eu id veniam nostrud nulla nostrud id. Qui dolor duis deserunt est id id nulla sit.

function EachWordsFirstUpper(input) {

let text;

  if (input.length > 1) {
    let words = input.split(' '); // Splits the string into words
    let capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.length > 0) {
        // If the word's lenght is bigger than 0
        let firstLetter = word[0].toUpperCase(); // Make the first letter capital
        let restOfWord = word.slice(1); // Get the other letter groups
        let capitalizedWord = firstLetter + restOfWord; // Creating the word which the first letter is capital
        capitalizedWords.push(capitalizedWord); // Keep the word into array
      }
    }

    let result = capitalizedWords.join(' '); // Combine the words
    text = result; // updating the text into result

    console.log(text); // You can add this text to the html by DOM 
    }
    
}


















// console.log(text);
