

function getComputerChoice(){
    const randomIndex = Math.trunc(Math.random() *3 )
    if (randomIndex === 0) {
        return ('Scissors');
    }else if(randomIndex === 1){
        return ('Rock');
    }else{
        return ('Paper');
    }

  
}
console.log(getComputerChoice());