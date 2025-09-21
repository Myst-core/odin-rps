// scripts.js

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
      return "draw";
    } else if (compChoice === "paper") {
      return "comp";
    } else if (compChoice === "scissors") {
      return "human";
    }
    
  } else if (humanChoice === "paper") {
    
    if (compChoice === "rock") {
      return "human";
    } else if (compChoice === "paper") {
      return "draw";
    } else if (compChoice === "scissors") {
      return "comp";
    }
    
  } else if (humanChoice === "scissors") {
    
    if (compChoice === "rock") {
      return "comp";
    } else if (compChoice === "paper") {
      return "human";
    } else if (compChoice === "scissors") {
      return "draw";
    }
  }
}

function playGame() {
  // set scores to 0 when func is called
  var humanScore = 0;
  var compScore = 0;

  // for loop, 5 times
  for (let i = 0; i < 5; i++) {
    let winner = playRound();

    if (winner === "draw") {
      console.log("Draw");
    } else if (winner === "human") {
      console.log("Human wins this round");
      humanScore += 1;
    } else if (winner === "comp") {
      console.log("Computer wins this round");
      compScore += 1;
    }
  }

  // logs scores
  console.log('Human: ' + humanScore);
  console.log('Computer: ' + compScore);

  // checks who has higher score, logs winner.
  if (humanScore > compScore) {
    console.log("Human wins the game!");
  } else {
    console.log("Computer wins the game!");
  }
}

playGame();