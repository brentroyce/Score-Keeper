const playerOneDisplay = document.querySelector("#playerOneDisplay")
const playerTwoDisplay = document.querySelector("#playerTwoDisplay")

const playerOneButton = document.querySelector("#playerOneButton")
const playerTwoButton = document.querySelector("#playerTwoButton")

const resetButton = document.querySelector("#resetButton")

const playToSelect = document.querySelector("#playto")

let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = playToSelect;
let isGameOver = false;

playerOneButton.addEventListener('click',function(){
    if(!isGameOver) {
        playerOneScore += 1;
        if(playerOneScore === winningScore){
            isGameOver = true;
            playerOneDisplay.classList.add('winner')
            playerTwoDisplay.classList.add('loser')
        }
        playerOneDisplay.textContent = playerOneScore;
    }
})

playerTwoButton.addEventListener('click',function(){
    if(!isGameOver) {
        playerTwoScore += 1;
        if(playerTwoScore === winningScore){
            isGameOver = true;
            playerTwoDisplay.classList.add('winner')
            playerOneDisplay.classList.add('loser')
        }
        playerTwoDisplay.textContent = playerTwoScore;
    }
})

playToSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value)
    reset();
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplay.textContent = 0;
    playerTwoDisplay.textContent = 0;
    playerTwoDisplay.classList.remove('winner', 'loser')
    playerOneDisplay.classList.remove('winner', 'loser')
}