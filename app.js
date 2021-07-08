playerScore = 0;
computerScore = 0;


//Computer Random 

let computerPlay = ['rock'];

let computerGame = computerPlay[Math.floor(Math.random() * computerPlay.length)];

//Player Random when ready change to player choice and remove random 

let playerPlay = ['paper'];

let playerGame = playerPlay[Math.floor(Math.random() * playerPlay.length)];


//Rounds 

function win(playerGame, computerGame) {
  if (computerGame === 'rock' && playerGame === 'paper');
  else if (computerGame === 'paper' && playerGame === 'scissors');
  else if (computerGame === 'scissors' && playerGame === 'rock')
    playerScore++;
  return console.log('You Win!')
}

function lose(playerGame, computerGame) {
  if (computerGame === 'paper' && playerGame === 'rock');
  else if (computerGame === 'scissors' && playerGame === 'paper');
  else if (computerGame === 'rock' && playerGame === 'scissors');
  computerScore++;
  // return console.log('You Lose!')
}

function tie(playerGame, computerGame) {
  if (computerGame === 'rock' && playerGame === 'rock');
  else if (computerGame === 'paper' && playerGame === 'paper');
  else if (computerGame === 'scissors' && playerGame === 'scissors');
  // return console.log('Tie')
}

function Win(playerScore, computerScore) {
  if (playerScore === 1)
    console.log("You Win")
}

win(playerGame, computerGame);
lose(playerGame, computerGame);
tie(playerGame, computerGame);



//console logs
console.log(playerScore)
console.log(computerScore)
console.log(computerGame)
console.log(playerGame)
//

