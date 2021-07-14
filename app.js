playerScore = 0;
computerScore = 0;


//Computer Random 

let computerPlay = ['paper', 'rock', 'scissors'];

let computerGame = computerPlay[Math.floor(Math.random() * computerPlay.length)];

//Player 
//let playerGame = ' ';
let playerGame = prompt('rock, paper or scissors')


//Rounds 

function getWinner(playerGame, computerGame) {
  if(playerGame === 'paper' && computerGame === 'rock') {
    playerScore+= 1; 
    return "You win";
  } else if(playerGame === 'scissors' && computerGame === 'paper') {
    playerScore+= 1;
    return "You win";
  } else if(playerGame === 'rock' && computerGame === 'scissors') {
    playerScore+= 1;
    return "You win";
  } else if(playerGame === 'rock' && computerGame === 'paper') {
    computerScore+= 1;
    return "You Lose";
  } else if(playerGame === 'paper' && computerGame === 'scissors') {
    computerScore+= 1;
    return "You Lose";
  } else if(playerGame === 'scissors' && computerGame === 'rock') {
    computerScore+= 1;
    return "You Lose";
  } else if (playerGame === 'rock' && computerGame === 'rock') {
    return 'Tie!';
  } else if(playerGame === 'scissors' && computerGame === 'scissors') {
    return 'Tie!';
  } else if(playerGame === 'paper' && computerGame === 'paper') {
    return 'Tie!';
  }
}

 //counter

let counter = 1;
while(counter <= 3) {
  console.log(getWinner(playerGame, computerGame))
  counter++;
}



//console logs
console.log(playerScore)
console.log(computerScore)
console.log(computerGame)
console.log(playerGame)


