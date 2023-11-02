/* Filename: ComplexCode.js
   Description: This is a complex implementation of a multiple-choice quiz game with scoring system and dynamic question generation.
*/

// Define an array of questions and their corresponding choices and correct answers
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Madrid", "Rome"],
    correctAnswer: 1
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Jupiter", "Saturn", "Mars", "Earth"],
    correctAnswer: 0
  },
  {
    question: "Which famous painter cut off a piece of his own ear?",
    choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: 0
  },
  // Add more questions...
];

// Define variables to keep track of game progress
let currentQuestion = 0;
let score = 0;

// Function to display the current question and choices
function displayQuestion() {
  const current = questions[currentQuestion];
  console.log(current.question);
  for (let i = 0; i < current.choices.length; i++) {
    console.log(`${i + 1}. ${current.choices[i]}`);
  }
}

// Function to check if the user's answer is correct
function checkAnswer(answer) {
  const current = questions[currentQuestion];
  if (answer === current.correctAnswer) {
    score++;
    console.log("Correct!");
  } else {
    console.log("Wrong!");
  }
}

// Function to move to the next question
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion === questions.length) {
    gameOver();
  } else {
    displayQuestion();
  }
}

// Function to end the game and display the final score
function gameOver() {
  console.log("Game Over!");
  console.log(`Final Score: ${score}/${questions.length}`);
}

// Function to start the game
function startGame() {
  console.log("Welcome to the Quiz Game!");
  displayQuestion();
}

// Event listener to get user input for answering the question
process.stdin.on("data", function(data) {
  const answer = parseInt(data.toString().trim());
  if (isNaN(answer) || answer > questions[currentQuestion].choices.length) {
    console.log("Please enter a valid choice!");
  } else {
    checkAnswer(answer - 1);
    nextQuestion();
  }
});

// Entry point of the game, call the startGame function
startGame();