const weapons = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]

game()

function computerSelection(){
    return weapons[randomNumber(0, weapons.length)]
}

function playerSelection(){
    return window.prompt("Choose your weapon!", "Rock")
}

function game(){
    let player = playerSelection()
    let comp = computerSelection()
    let result = playRound(player, comp)
    msg = `You picked: ${player}. \n Computer picked: ${comp}. \n ${result}`
    alert(msg)
}

//Returns String declaring outcome of the game.
function playRound(playerInput, computerInput) {
    playerInput = playerInput.toLowerCase()
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


