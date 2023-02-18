
// This function returns a random rock/paper/scissors choice from the choices array.
// For randomisation uses random function.
function getComputerChoice(){
    
    const choices = ["rock","scissors","paper"];
    let resInd = Math.floor(Math.random()*3);  
    
    return choices[resInd];
};
//Plays a round of the game..
function playRound(){
    let playerChoice = prompt("Enter your choice: ");
    playerChoice = playerChoice.toLowerCase();
    console.log("Player chooses: "+playerChoice);

    const compChoice = getComputerChoice();
    console.log("Computer chooses: "+compChoice);

    //These store the wincases for the player {playerChoice:compChoice}.
    const playerWinCase = {"rock":"scissors","scissors":"paper","paper":"rock"};
    
    //decides who wins the game...
    if (playerChoice === compChoice){
        return "This is a tie! No one wins...";
    };
    if (playerWinCase[playerChoice] === compChoice){
        return "Yay...You have defeated the computer.....congrats on your win...";
    }else{
        return "Oops....You have been defeated......The computer wins...";
    };
};

// Plays the game for five times...
function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound());
        console.log();
    };
};

game();
