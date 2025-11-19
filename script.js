    let choice1 = "rock";
    let choice2 = "paper";
    let choice3 = "scissors";

    
    let humanScore = 0
    let computerScore = 0
   
    
    function getComputerChoice () {
        const randomNumber = Math.floor(Math.random()*3);
    
    if(randomNumber===0){
      return choice1

    }else if(randomNumber ===1){
        return choice2

    }else {
        return choice3
    }
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
  function playRound (humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    let result = ""

   if (humanChoice === choice1 && computerChoice === choice2){
    result = 'Paper beats rock - Computer wins';
    computerScore++
    
   }else if(humanChoice === choice2 && computerChoice === choice3){
    result ='Scissors beats paper - Computer wins';
    computerScore++
    
   }else if (humanChoice === choice3 && computerChoice === choice1) {
    result = "Rock beats scissors - Computer wins";
    computerScore++
    
   }else if (humanChoice === choice2 && computerChoice === choice1){
    result = "Paper beats rock - Human wins";
    humanScore++

   }else if(humanChoice === choice3 && computerChoice === choice2){
    result = "Scissors beats paper - Human wins";
    humanScore++

   }else if (humanChoice === choice1 && computerChoice === choice3){
    result = "Rock beats scissors - Human wins";
    humanScore++
    
   }else{
    result = "it's a tie 📍";
   }    
 resultDiv.textContent = `${result} | Score — Human: ${humanScore}, Computer: ${computerScore}`;
  


if (humanScore === 5 || computerScore === 5) {
  const winner = humanScore === 5 ? "Human wins the game!" : "Computer wins the game!";

  
  resultDiv.textContent = ""; // Clear previous content

const resultText = document.createElement("p");
resultText.textContent = `${result} | Score — Human: ${humanScore}, Computer: ${computerScore}`;

const winnerText = document.createElement("p");
winnerText.textContent = winner;
winnerText.style.fontWeight = "bold";

resultDiv.appendChild(resultText);
resultDiv.appendChild(winnerText);
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true
}

  }

const btn1 = document.createElement("button");
btn1.textContent = "Rock"
const btn2 = document.createElement("button");
btn2.textContent = "Paper"
const btn3 = document.createElement("button");
btn3.textContent = "Scissors"

document.body.appendChild(btn1)
document.body.appendChild(btn2)
document.body.appendChild(btn3)

btn1.style.marginRight = "10px";
btn2.style.marginRight = "10px";
btn3.style.marginRight = "10px";



  const resultDiv = document.createElement("div")
  resultDiv.style.marginTop = "30px";
document.body.appendChild(resultDiv)


btn1.addEventListener("click",()=>{
  highlightButton(btn1)
  playRound("rock",getComputerChoice())
  
})

btn2.addEventListener("click", ()=>{
  highlightButton(btn2)
  playRound("paper",getComputerChoice())
  
})

btn3.addEventListener("click", ()=>{
  highlightButton(btn3)
  playRound("scissors",getComputerChoice())

})

function highlightButton(button) {
  button.style.backgroundColor = "lightblue"; // or any color you like
  setTimeout(() => {
    button.style.backgroundColor = ""; // reset after 200ms
  }, 200);

 }

}
playGame()