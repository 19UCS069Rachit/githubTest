const choices = ['ROCK', "PAPER", "SCISSORS"]

const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")


function PlayGame(playerChoice){
    const computerchoice = choices[Math.floor(Math.random() * 3)] 
    let result = ""

    if(playerChoice === computerchoice){
        result = "ITS A TIE"
    }
    else{
        switch(playerChoice){
            case "ROCK":
                result = (computerchoice === 'SCISSORS') ? "YOU WIN!" : "YOU LOOSE"
                break
        
            case "PAPER":
                result = (computerchoice === 'ROCK') ? "YOU WIN!" : "YOU LOOSE"
                break
            
            case "SCISSORS":
                result = (computerchoice === 'PAPER') ? "YOU WIN!" : "YOU LOOSE"
                break
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    computerDisplay.textContent = `COMPUTER: ${computerchoice}`
    resultDisplay.textContent = result
}