//function for the computer to choose from rock paper or scissors
const computerSelection = getComputerChoice();
const playerSelection = "Rock";
function getComputerChoice(){
    //generate random number from 1 to 3 for the choose of rock, paper or scissors
    let randomNumber = Math.floor((Math.random()*3)+1);
    console.log(randomNumber)
    if(randomNumber === 1){
        return "Rock";
    }else if(randomNumber === 2){
        return "Paper";
    }else{
        return"Scissors";
    }
    
}



function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!"
    }else if(playerSelection === "Rock" && computerSelection === "Paper"){
        return "You Lose! Paper beats Rock"
    }else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You Win! Rock beats Scissors!"
    }
    
}


function game(){
    for(let i=0; i<5; i++){
        
    }
}
