function welcome() {
let numberOfRounds = 
        prompt(`
    How many rounds would you like to play?
    (Please provide a number)
        `)

    return parseInt(numberOfRounds)
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
    if (capitalizeFirstLetter == "Rock" || capitalizeFirstLetter == "Scissors" || capitalizeFirstLetter == "Paper") {
        return capitalizeFirstLetter
    } else {
        console.log("Please enter one of three choices: Rock, Paper or Scissors.")
        return false
    }
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


function play() {
    // Show the user the game rules and let them enter number of rounds
    let rounds = welcome()
    let currentRound = 0
    let userPoints = 0
    let computerPoints = 0

    while (currentRound != rounds) {
    // Round 1
    currentRound = currentRound + 1
    
    // Ask the user for an input, type rock, paper or scissors
        let userChoice = user()

    // Randomly choose rock, paper or scissors for the computer
    const computerChoice = computerRandom()

    // Inform the user of the rounds remaining and the choices made
    console.log(`Round ${currentRound} of ${rounds}.`)
    console.log(`Your choice is: ${userChoice}`)
    console.log(`Your opponents choice is: ${computerChoice}`)

    if (userChoice == computerChoice) {
        console.log(" It's a tie, play again.")
        currentRound = currentRound - 1

    } else if (userChoice == "Rock" && computerChoice == "Paper") {
        console.log(" You lose.. Paper 'covers' Rock.")
        computerPoints = computerPoints + 1
    } else if (userChoice == "Rock" && computerChoice == "Scissors") {
        console.log(" You win! Rock 'crushes' Scissors.")
        userPoints = userPoints + 1

    } else if (userChoice == "Paper" && computerChoice == "Rock") {
        console.log(" You win! Paper 'covers' Rock.")
        userPoints = userPoints + 1
    } else if (userChoice == "Paper" && computerChoice == "Scissors") {
        console.log(" You lose.. Paper is 'cut' by Scissors")
        computerPoints = computerPoints + 1
    
    } else if (userChoice == "Scissors" && computerChoice == "Rock") {
        console.log(" You lose.. Rock 'crushes' Scissors")
        computerPoints = computerPoints + 1
    } else if (userChoice == "Scissors" && computerChoice == "Paper") {
        console.log(" You win! Paper is 'cut' by Scissors")
        userPoints = userPoints + 1
    }        
        
    console.log(`your current points are: ${userPoints}`)
    console.log(`the computers points are: ${computerPoints}`)
    }
}


play()