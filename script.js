 let choice1 = "rock";
    let choice2 = "paper";
    let choice3 = "scissors";
   
    
    function getComputerChoice () {
        // let randomPick; nb: dissabled because of a better approach
        const randomNumber = Math.floor(Math.random()*3);
    
    if(randomNumber===0){
      //  randomPick = choice1
      return choice1
    }else if(randomNumber ===1){
        // randomPick = choice2+
        return choice2
    }else {
        // randomPick = choice3
        return choice3
    }
    // return randomPick
}

  function getHumanChoice () {
    let userInput = prompt("input you choice")

       if (userInput ===choice1) {
        return choice1;
       }else if (userInput === choice2) {
        return choice2;
       }else{
        return choice3;
       }
  }
 




function playGame () {
 
    let humanScore = 0
    let computerScore = 0
  
   function playRound (humanChoice, computerChoice){
   
   humanChoice = humanChoice.toLowerCase();
   if (humanChoice === choice1 && computerChoice === choice2){
    console.log('Paper beats rock - Computer wins');
    computerScore++
    
   }else if(humanChoice === choice2 && computerChoice === choice3){
    console.log('Scissors beats paper - Computer wins');
    computerScore++
    
   }else if (humanChoice === choice3 && computerChoice === choice1) {
    console.log("Rock beats scissors - Computer wins");
    computerScore++
    
   }else if (humanChoice === choice2 && computerChoice === choice1){
    console.log("Paper beats rock - Human wins");
    humanScore++

   }else if(humanChoice === choice3 && computerChoice === choice2){
    console.log("Scissors beats paper - Human wins");
    humanScore++

   }else if (humanChoice === choice1 && computerChoice === choice3){
    console.log("Rock beats scissors - Human wins");
    humanScore++
    
   }else{
    console.log("it's a tie 📍");
   }
    
 }



playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())


console.log("Final Score:");
console.log("Human:", humanScore);
console.log("Computer:", computerScore);

if (humanScore > computerScore) {
  console.log("Human wins the game!");
} else if (computerScore > humanScore) {
  console.log("Computer wins the game!");
} else {
  console.log("The game is a tie!");
}

}
playGame()