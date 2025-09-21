// scripts.js

// Scores
var humanScore = 0;
var compScore = 0;


function getCompChoice() {
  // gets random number between 0 and 1, multiplies it by 3 and rounds it down to get number
  let num = Math.floor(Math.random() * 3);
  // should return 0, 1 or 2

  // returns the choice in lowercase form
  if (num == 0) {
    return "rock";
  } else if (num == 1) {
    return "paper";
  } else if (num == 2) {
    return "scissors";
  }

}

function getHumanChoice() {
  // gets users input through browser
  let choice = prompt("Rock, Paper or Scissors?");

  // returns the choice in lowercase form
  if (choice.toLowerCase() === "rock") {
    //console.log("Got");
    return "rock";
  } else if (choice.toLowerCase() === "paper") {
    //console.log("Got");
    return "paper";
  } else if (choice.toLowerCase() === "scissors") {
    //console.log("Got");
    return "scissors";
  } else {
    console.log("Not Got");
  }
}

function playRound() {
  // get individual choices of rock, paper or scissors
  let humanChoice = getHumanChoice();
  let compChoice = getCompChoice();

  // for each human choice, the code decides whether comp or human wins based on compChoice
  // draw is also an option if the choices are the same
  if (humanChoice === "rock") {
    
    if (compChoice === "rock") {
      return "Draw";
    } else if (compChoice === "paper") {
      compScore += 1;
      return "Computer Wins";
    } else if (compChoice === "scissors") {
      humanScore += 1;
      return "Human Wins";
    }
  
  } else if (humanChoice === "paper") {

    if (compChoice === "rock") {
      humanScore += 1;
      return "Human Wins";
    } else if (compChoice === "paper") {
      return "Draw";
    } else if (compChoice === "scissors") {
      compScore += 1;
      return "Computer Wins";
    }

  } else if (humanChoice === "scissors") {

    if (compChoice === "rock") {
      compScore += 1;
      return "Computer Wins";
    } else if (compChoice === "paper") {
      humanScore += 1;
      return "Human Wins";
    } else if (compChoice === "scissors") {
      return "Draw";
    }

  }
}

