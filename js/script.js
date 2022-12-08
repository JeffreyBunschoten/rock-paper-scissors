function welcome() {
let numberOfRounds = 
        prompt(`
    Welcome to Rock, Paper, Scissors

    How to play: Try to guess the computers move and defeat them.

    Rock:
    Rock beats scissors and loses to paper.
    This powerful play is strong enough to break the fragile scissors, but can't 
    fight its way past the paper, which wraps itself around the rock to suffocate it.

    Paper:
    Scissors beat paper but loses to rock. 
    The sharp scissors carve through paper with ease, but they're too weak 
    to stand up to a rock slamming into them.

    Scissors:
    Paper beats rock, but loses to scissors. 
    The slick and flexible paper wraps around the rock 
    to lock it down, but it can't fight back against the sharp scissors.

    How many rounds would you like to play?
    (1, 3 or 5)
        `)

    return numberOfRounds
}


function user() {
    const userChoice = prompt(`What is your choice?

    Rock
    Paper
    Scissors
    `)
    // Prettify the users input to first letter Capital
    let userChoiceLower = userChoice.toLowerCase()
    let capitalizeFirstLetter = userChoiceLower.charAt(0).toUpperCase() + userChoiceLower.slice(1)
    return capitalizeFirstLetter
}


function computerRandom() {
    let myArray = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem
}

function gameLogic(userChoice, computerChoice) {
    if (userChoice)

    if (userChoice == computerChoice) {
        console.log("it's a tie, play again.")
        } else if (condition2) {
          //  block of code to be executed if the condition1 is false and condition2 is true
        } else {
          //  block of code to be executed if the condition1 is false and condition2 is false
        }

}


function play() {
    // Show the user the game rules and let them enter number of rounds
    let rounds = welcome()
    let roundsRemaining = rounds

    // Ask the user for an input, type rock, paper or scissors
    let userChoice = user()

    // Randomly choose rock, paper or scissors for the computer
    const computerChoice = computerRandom()

    // Inform the user of the rounds remaining and the choices made
    console.log(`Round ${roundsRemaining} of ${rounds}.`)
    console.log(`Your choice is: ${userChoice}`)
    console.log(`Your opponents choice is: ${computerChoice}`)

    let outcome = gameLogic(userChoice, computerChoice)
}


play()