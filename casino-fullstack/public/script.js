// for every value/ slot it is assigned a color
//Math.random will choose a random property
//compare that answer to the bet you choose
//if user chooses red, and math.random choses an even number,
//even numbers are red, that means the user wins double what they bet

//line below is optional
let money = 10000

document.querySelector('button').addEventListener('click', playGame)

let board = {
  0: "red",
  1: "black",
  2: "red",
  3: "black",
  4: "red",
  5: "black",
  6: "red",
  7: "black",
  8: "red",
  9: "black",
  10: "red",
  11: "black",
  12: "red",
  13: "black",
  14: "red",
  15: "black",
  16: "red",
  17: "black",
  18: "red",
  19: "black",
  20: "red",
  21: "black",
  22: "red",
  23: "black",
  24: "red",
  25: "black",
  26: "red",
  27: "black",
  28: "red",
  29: "black",
  30: "red",
  31: "black",
  32: "red",
  33: "black",
  34: "red",
  35: "black",
  36: "red"
  }






function playGame(){
  let result = Math.floor(Math.random() * 37)
let bet = parseInt(document.getElementById('moneyBet').value)
let userInputColor = document.getElementById('colorInput').value.toLowerCase()
let total = bet
console.log(`This is the input color: ${userInputColor}`)
console.log(`This is the bet: ${bet}`)
console.log(`This is the result: ${result}`)
//if betting on color
if(userInputColor === board[result]){
  //user wins the color
  let total = bet * 2
  document.querySelector('.results').innerText = 'you win ' + total

  console.log('winner')
} else {
  console.log('loser')
  document.querySelector('.results').innerText = 'you lose ' + total
}

}






//even vs odd
//user even === 0
//user odd === 1
// if(userEvenOdd === result%2) {

// }

//check to see if the answers match
//if user chooses the same color, the computer choose, then user won


//=================/// function and conditions for bets


function playSafe(){
  if(money <= 0 ) {
    outcome.innerText = "You no longer have any funds to play. Better luck next time"
    return
  }
  let userInputColor = document.getElementById('colorInput').value.toLowerCase()
  let result = Math.floor(Math.random() * 37)
  if (userInputColor === board[result]){
    money = money + 1
    outcome.innerText = 'you win!'
    total.innerText = money
  } else {
    money -= 1
    total.innerText = money
    outcome.innerText = 'you lost!'
  }

}

function playReckless(){
  if(money <= 0) {
    outcome.innerText = "You no longer have any funds to play. Better luck next time"
    return
  }

  if ((userInputColor === board[result])){
    money = money + 50
    outcome.innerText = 'you win!'
    total.innerText = money
  } else {
    money -= 50
    total.innerText = money
    outcome.innerText = 'you lost!'

  }
}

min.addEventListener('click', playSafe)
max.addEventListener('click', playReckless)
