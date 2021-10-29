const weapons = ["rock", "paper", "scissors", "lizard", "spock"]
game()

function computerSelection(){
    return weapons[randomNumber(0, weapons.length)]
}

function playerSelection(){

    let playerAns = window.prompt("Choose your weapon! Your options are: Rock, Paper, Scissors, Lizard, Spock. ", "Rock").toLowerCase()
    console.log(playerAns)
    if (!weapons.includes(playerAns)) {
        console.log("hi")
        while (!weapons.includes(playerAns)) {
            playerAns = window.prompt("Please enter a valid weapon. Your options are: Rock, Paper, Scissors, Lizard, Spock. ", "Rock").toLowerCase()
        }
    }

    return playerAns
}

function game(){

    let compScore = 0
    let playerScore = 0

    for (let i = 1; i < 6; i++) {
        let player = playerSelection()
        let comp = computerSelection()
        let result = playRound(player, comp)
        if (result[4] == "w")
            playerScore++
        else compScore++
        
        msg = `****** Round ${i} ****** \n You picked: ${player}. \n Computer picked: ${comp}. \n ${result}`
        alert(msg)
    }

    alert(`****** Final Score ****** \n You: ${playerScore} \n Computer: ${compScore} \n ${playerScore > compScore ? "You win!" : "You lose!"}`)
}

//Returns String declaring outcome of the game.
function playRound(playerInput, computerInput) {
    computerInput = computerInput.toLowerCase()
    if (playerInput == "rock") {
        if (computerInput == "lizard")
            return "You win! Rock crushes Lizard"
        else if (computerInput == "spock")
            return "You lose! Spock vaporizes rock"
        else if (computerInput == "scissors")
            return "You win! Rock crushes scissors"
        else return "You lose! Paper covers rock"
    }

    if (playerInput == "lizard") {
        if (computerInput == "rock")
            return "You lose! Rock crushes Lizard"
        else if (computerInput == "spock")
            return "You win! Lizard poisons Spock"
        else if (computerInput == "scissors")
            return "You win! Scissors decapitates Lizard"
        else return "You win! Lizard eats Paper"
    }

    if (playerInput == "spock") {
        if (computerInput == "rock")
            return "You win! Spock vaporises Rock"
        else if (computerInput == "lizard")
            return "You lose! Lizard poisons Spock"
        else if (computerInput == "scissors")
            return "You win! Spock smashes Lizard"
        else return "You lose! Paper disproves Spock"
    }

    if (playerInput == "scissors") {
        if (computerInput == "rock")
            return "You lose! Rock crushes Scissors"
        else if (computerInput == "lizard")
            return "You win! Scissors decapitates Lizard"
        else if (computerInput == "spock")
            return "You lose! Spock smashes Lizard"
        else return "You win! Scissors cuts Paper"
    }

    if (playerInput == "paper") {
        if (computerInput == "rock")
            return "You win! Paper covers Rock"
        else if (computerInput == "lizard")
            return "You lose! Lizard eats Paper"
        else if (computerInput == "spock")
            return "You win! Paper disproves Spock"
        else return "You lose! Scissors cuts Paper"
    }
}

//Generates a random number between min and max (not including max)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


