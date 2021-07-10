playerScore = 0;
computerScore = 0;


//Computer Random 

let computerPlay = ['paper', 'rock', 'scissors'];

let computerGame = computerPlay[Math.floor(Math.random() * computerPlay.length)];

//Player Random when ready change to player choice and remove random 

let playerGame = 'rock';

//let playerGame = playerPlay[Math.floor(Math.random() * playerPlay.length)];


//Rounds 

function getWinner(playerGame, computerGame) {
  if (playerGame === 'paper' && computerGame === 'rock') 
  return 'You Win';{
    if (playerGame === 'scissors' && computerGame === 'paper')
    return 'You Win!'; {
      if (playerGame === 'rock' && computerGame === 'scissors')
      return 'You Win!'; {
        if (playerGame === 'rock' && computerGame === 'paper')
        return 'You Lose!'; {
          if (playerGame === 'paper' && computerGame === 'scissors')
          return 'You Lose!'; {
            if (playerGame === 'scissors' && computerGame === 'rock')
            return 'You Lose!'; {
              if (playerGame === 'rock' && computerGame === 'rock')
              return 'Tie!'; {
                if (playerGame === 'scissors' && computerGame === 'scissors')
                return 'You Win!'; {
                  if (playerGame === 'paper' && computerGame === 'paper')
                  return 'You Win!'
                }
              }
            }
          }
        }
      }
    }
  }
}


getWinner(playerGame, computerGame);

console.log(getWinner(playerGame, computerGame))


//console logs
console.log(playerScore)
console.log(computerScore)
console.log(computerGame)
console.log(playerGame)
//

