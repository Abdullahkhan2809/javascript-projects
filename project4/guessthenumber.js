// Generate random number (1 to 100 inclusive)
let randomNumber = parseInt(Math.random() * 100 + 1);

// DOM elements
const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");    
const lowOrHi = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

// Game state variables
let prevGuess = [];
let numGuesses = 1;         
const maxGuesses = 10;       
let playGame = true;

let p;  // will hold the "New Game" paragraph/button

// Event listener for submit button
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    prevGuess.push(guess);

    if (numGuesses === maxGuesses) {
      // This is the 10th guess → show result and end game
      displayGuess(guess);
      displayMessage(`Game Over! The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right! The number is ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is TOO low");
  } else {
    displayMessage("Number is TOO high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuesses++;
  remaining.innerHTML = `${maxGuesses - numGuesses + 1}`;   // remaining guesses
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  playGame = false;

  // Create "New Game" button if it doesn't exist
  p = document.createElement("p");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);

  // Attach listener for new game
  p.querySelector("#newGame").addEventListener("click", newGame);
}

function newGame() {
  // Reset everything
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuesses = 1;
  guessSlot.innerHTML = "";
  remaining.innerHTML = `${maxGuesses}`;
  userInput.removeAttribute("disabled");
  lowOrHi.innerHTML = "";
  startOver.removeChild(p);   

  playGame = true;
}