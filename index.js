'use strict';

const prompt = require('prompt-sync')();
const c = require('ansi-colors')
const results = {
    wins: 0,
    losses: 0,
    draws:0
  }

const playGame = () => {
  
   
  const rockPaperScissors = ['rock', 'paper', 'scissors']
  // const getRandomNumber = Math.floor(Math.random() * 3)
  const getRandomDraw = rockPaperScissors[Math.floor(Math.random() * 3)]

  let getUserInput;
  let isValidChoice = false
  
  while (isValidChoice === false) {
    getUserInput = prompt(`Choose your hand: `).toLowerCase()
  

  if (rockPaperScissors.includes(getUserInput)) {
    isValidChoice = true
  } else {
    console.log(c.red.bold(`Invalid choice: Please enter 'rock', 'paper' or 'scissors'`))
  }
}
  

  if (getUserInput === getRandomDraw) {
    console.log(c.bold(`Draw! The Computer Chose: ${getRandomDraw}`))
    results.draws++
  } else if 

  (
    (getUserInput === 'rock' && getRandomDraw === 'paper') ||
    (getUserInput === 'paper' && getRandomDraw === 'scissors') ||
    (getUserInput === 'scissors' && getRandomDraw === 'rock')
  ) {
    console.log(c.red.bold.underline(`You lose! The Computer Chose: ${getRandomDraw}` ))
    results.losses++
  } else {
    console.log(c.green.bold.underline(`You win! The Computer Chose: ${getRandomDraw}`))
    results.wins++
  }

  const getResults = prompt(`See Results? (yes/no)`).toLowerCase()
  if(getResults === 'yes') {
    console.log(results)
  } else {
    return
  }
  


}

const playAgain = () => {
      const userInput = prompt(c.bgGreen.bold.underline('Play again? (yes/no)'));
      return userInput.toLowerCase() === 'yes';
    }

    do {
      playGame()
    } while (playAgain());

console.log(c.bgYellow.white.bold('Goodbye!'))
