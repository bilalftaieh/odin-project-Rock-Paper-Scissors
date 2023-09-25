// Initialize game variables
let gameCounter = 0;
let playerScore = 0;
let computerScore = 0;
let selectedChoice = "";
const gameButtons = document.querySelectorAll('.game-button');

// Function to update player and computer scores in the DOM
function setScoreDiv(playerScore, computerScore) {
    let playerScoreSpan = document.querySelector('#player-score');
    let computerScoreSpan = document.querySelector('#computer-score');
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
}

// Function to update the round counter in the DOM
let setRoundCounterDiv = (roundNumber) => {
    let roundNumberSpan = document.querySelector('#round');
    roundNumberSpan.innerHTML = roundNumber;
}

// Function to update the result text in the DOM
let setResultDiv = (winnerText) => {
    let resultParagraph = document.querySelector("#result-text");
    resultParagraph.innerHTML = winnerText;
    resultParagraph.hidden = false;
}

let setGameButtonDisabled = (disable)=>{
    gameButtons.forEach((button)=>{
        if(disable){
            button.disabled = true;
        }
        else{
            button.disabled = false;
        }
    });
}

// Function to reset game state after finishing the game
let setAllDivAfterGameFinishes = () => {
    let startAgainBtn = document.querySelector("#start-again-button");
    let computerChoiceParagraph = document.querySelector("#computer-choice");
    
    // Make game buttons disabled
    setGameButtonDisabled(true);

    // Show the "Start Again" button
    startAgainBtn.hidden = false;
    
    // Add event listener to the "Start Again" button
    startAgainBtn.addEventListener('click', () => {
        // Reset game variables
        playerScore = 0;
        computerScore = 0;
        gameCounter = 1; // Reset the gameCounter to 1
        selectedChoice = "";
        
        // Update the round counter, player score, and result text
        setRoundCounterDiv(gameCounter);
        setScoreDiv(playerScore, computerScore);
        setResultDiv("Not Determined");
        
        // Reset computer choice display
        computerChoiceParagraph.textContent = "Not Chosen";
        
        //undisable game buttons
        setGameButtonDisabled(false);

        // Hide the "Start Again" button again
        startAgainBtn.hidden = true;
        
    });
}

// Function that returns the computer choice using Math.Random()
let getComputerChoice = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return ["rock", "paper", "scissors"][randomNumber - 1];
}

// Function that returns the user choice in lowercase for case insensitivity
let getUserChoice = (choice) => choice.toLowerCase();

// Function that determines the result of a single round and returns it
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You LOSE! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            return "You WIN! Rock beats Scissors";
        } else {
            return "TIE!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "You LOSE! Scissors Beats Paper ";
        } else if (computerSelection == "rock") {
            return "You WIN! Paper Beats Rock";
        } else {
            return "TIE!";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You LOSE! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            return "You WIN! Scissors beats Paper";
        } else {
            return "TIE!";
        }
    }
}

// Function that begins the game for 5 rounds
function game() {
    let computerChoiceParagraph = document.querySelector("#computer-choice");
    
    // Iterate through each button and add a click listener
    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Increment the game counter
            gameCounter++;
            
            // Update the round counter in the DOM
            setRoundCounterDiv(gameCounter);
            
            // Get the selected choice
            selectedChoice = button.innerHTML;
            
            // Get the user's choice and computer's choice
            let playerChoice = getUserChoice(selectedChoice);
            let computerChoice = getComputerChoice(1, 3);
            
            // Display the computer's choice in the DOM
            computerChoiceParagraph.innerHTML = computerChoice;
            
            // Determine the result of the round
            let result = playRound(playerChoice, computerChoice);
            
            // Update the result text, player score, and computer score in the DOM
            if (result.includes("WIN!")) {
                setResultDiv("YOU WIN THIS ROUND!");
                playerScore++;
            } else if (result.includes("LOSE!")) {
                setResultDiv("YOU LOSE THIS ROUND!");
                computerScore++;
            } else {
                setResultDiv("YOU TIE THIS ROUND!");
            }
            
            setScoreDiv(playerScore, computerScore);
            
            // Check if the player or computer has won the game
            if (playerScore == 5) {
                setResultDiv("YOU WON THE GAME!");
                setAllDivAfterGameFinishes();
            } else if (computerScore == 5) {
                setResultDiv("YOU LOST THE GAME!");
                setAllDivAfterGameFinishes();
            }
        });
    });
}

// Start the game
game();
