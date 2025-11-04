
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const randomIndex = Math.trunc(Math.random() *3 )
    if (randomIndex === 0) {
        return ('scissors');
    }else if(randomIndex === 1){
        return ('rock');
    }else{
        return ('paper');
    }
}

function getHumanChoice () {
   const userInput =   prompt('Input your choice: rock, paper or scissors').toLowerCase()
   if (userInput==="rock" ||userInput=== "paper" || userInput === "scissors")
   return userInput
}

console.log(getHumanChoice());


function playRound (humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase()
    const computer = computerChoice

    if(human === computer) {
        console.log(`Its a tie you both choose ${human}`);
        return;
    }else if (
        (human === "rock" && computer ==="scissors") || (human === "paper" && computer === "rock") || (human === "scissors" && computer === "paper")
    ){
        humanScore++;
        console.log(`You win this round! ${human} beats ${computer}`);
    }else {
        computerScore++;
        console.log(`computer wins this round! ${computer} beats human`);
    }
    
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}
const human = getHumanChoice()
const computer = getComputerChoice()

playRound(human, computer)

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let round= 1; round <= 5; round++){
        console.log(`---Round ${round}`);

        const human = getHumanChoice()
        const computer = getComputerChoice()
        const winner = playRound(human,computer)

        if (winner === human) {
            humanScore++;

        }else if (winner === computer){
            computerScore++

        }

        console.log(`Score -You: ${humanScore}, Computer ${computerScore}`);
 
    }
    console.log(`---Final Result ---`);
    if (humanScore > computerScore) {
        console.log("You win the game ");
    }else if (computerScore  > humanScore) {
        console.log("Computer win the game");

    }else{
        console.log("Its a tie 😃");
    }

}

playGame()