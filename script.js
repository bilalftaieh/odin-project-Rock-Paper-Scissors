
// function that returns the computer choice using Math.Random()
let getComputerChoice = ()=>{
    let randomNumber = Math.floor(Math.random()*3);
    return ["rock","paper","scissors"][randomNumber];
}

// function that returns the user choice lower cased for case insensitivity
let getUserChoice = (choice)=> choice.toLowerCase();

// function that determines the result of the single round and return it
function playRound(playerSelection, computerSelection) {
    if(playerSelection=="rock"){
        if(computerSelection=="paper"){
            return "You LOSE! Paper beats Rock";
        }
        else if(computerSelection=="scissors"){
            return "You WIN! Rock beats Scissors";
        }
        else{
            return "TIE!";
        }
    }

    else if(playerSelection=="paper"){
        if(computerSelection=="scissors"){
            return "You LOSE! Scissors Beats Paper ";
        }
        else if(computerSelection=="rock"){
            return "You WIN! Paper Beats Rock";
        }
        else{
            return "TIE!";
        }
    }

    else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            return "You LOSE! Rock beats Scissors";
        }
        else if(computerSelection=="paper"){
            return "You WIN! Scissors beats Paper";
        }
        else{
            return "TIE!";
        }
    }

  }

  // function that begins the game for 5 rounds
  function game(){
    let gameCounter = 1;
    let playerScore = 0;
    let computerScore = 0;
    while(true){
        console.log("Round " + gameCounter);
        let playerChoice = getUserChoice(prompt("Please Enter your choice? Rock/Paper/Scissors"));
        let computerChoice = getComputerChoice();
        // Validaton check if user inputs choices other than "rock","paper","scissors"
        if(!["rock","paper","scissors"].includes(playerChoice)){
            alert("Please enter a valid choice");
            continue;
        }
        else{
            let result = playRound(playerChoice,computerChoice);
            alert("Computer Choice is " + computerChoice + ", " + result);
            if(result.includes("WIN!")){
                playerScore++;
            }
            else if(result.includes("LOSE!")){
                computerScore++;
            }
            else if(result.includes("TIE!")){
                continue;
            }
        }
        gameCounter++;
        console.log("Player Score : " + playerScore);
        console.log("Computer Score : " + computerScore);
        if(gameCounter == 6){
            break;
        }
    }
    alert((playerScore>computerScore)?"Player WINS!,Score : " + playerScore:"COMPUTER WINS,Score : " + 
    computerScore);
}

game();

