

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0 : return "ROCK";
        case 1 : return "PAPER";
        case 2 : return "SCISSOR";
    }
}

function showWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return "TIED"
    }
    else if((userChoice === "ROCK" && computerChoice === "SCISSOR") ||
            (userChoice === "PAPER" && computerChoice === "ROCK") ||
            (userChoice === "SCISSOR" && computerChoice === "PAPER") )
            {
                
                return "YOU WON!!";
            }
    else{
        return "COMPUTER WON";
    }
}


function playGame(userChoice){
    
    const computerChoice = getComputerChoice();
    const result = showWinner(userChoice, computerChoice);
    const playerR = document.querySelector("#playerRESULT");
    const compR = document.querySelector("#comRESULT");

     //display the result of the round.
    playerR.textContent = `You chose :  ${userChoice}`;
    compR.textContent = `computer chose : ${computerChoice}`
    document.querySelector('#result').textContent = `result : ${result}`;

}

    document.getElementById('ROCK').addEventListener('click', function(){
        playGame("ROCK")
        
    })
    document.getElementById('PAPER').addEventListener('click', function(){
        playGame ("PAPER");
    })
    document.getElementById('SCISSOR').addEventListener('click', function(){
        playGame("SCISSOR");
    })
    
