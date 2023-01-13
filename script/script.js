let playerScore = 0;
let computerScore = 0;
const CHOICES = ["rock", "paper", "scissors"];


function getComputerChoice(){
    
    let randomNum = Math.floor(Math.random()*CHOICES.length);
    return CHOICES[randomNum];
    
}

function getPlayerChoice(){
    let playerAnswer = prompt("Rock, paper or scissors?").toLowerCase();
    return (playerAnswer === (CHOICES[0] || CHOICES[1] || CHOICES[2]) ? playerAnswer : "invalid answer, please write only rock paper or scissors")
    
    
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
        console.log(`It's a tie! Your ${playerSelection} selection ties to computer's ${computerSelection} selection!`)
    
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerScore++;
        console.log(`You Win! Your ${playerSelection} selection beats computer's ${computerSelection} selection!`)
        
    }
    if (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
    ){
        computerScore++;
        console.log(`You Lose! Your ${playerSelection} selection lose to computer's ${computerSelection} selection!`)
        
    }
    
    
}



function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Score: ${playerScore} - ${computerScore}`)
    }
    gameEnd();
}

function gameEnd(){
    
    console.log(`Final score: ${playerScore} - ${computerScore}`)
    

}

game()




