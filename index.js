function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock'
      case 1:
        return 'paper'
      case 2:
        return 'scissor'
    }
  }
  
  
  
  
  function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection){
           console.log("its tie"); 
        }else if ((playerSelection==="rock" && computerSelection==="paper") ||
         (playerSelection==="scissor" && computerSelection==="rock") ||
         (playerSelection==="paper" && computerSelection==="scissor"))
     {
         console.log("You Lose!");
       computerScore += 1
      
     } else if ((playerSelection==="scissor" && computerSelection==="paper") ||
         (playerSelection==="rock" && computerSelection==="scissor") ||
         (playerSelection==="paper" && computerSelection==="rock"))
     {
       console.log("you won");
     playerScore += 1
     } 
  }
       
      
     
  
  
  var computerScore = 0;
  var playerScore = 0;
  
  function game(){
  for (let i = 0; i < 5; i++) {
    var hello = getRandomChoice()
    console.log(hello)
    var yourChoice = prompt("your choice chose between rock paper or scissor")
  var playerChoice =yourChoice.toLowerCase()
  console.log(playerChoice)
    playRound(playerChoice,hello)
  
  
      console.log("Player: " + playerScore + ", Computer: " + computerScore);
  }
  
  
  
    if(playerScore > computerScore)
      return "Finally Player Wins";
    else if(playerScore == computerScore)
      return "Finally Tie";
    else
      return " Finally COmputer Wins";
  
  }
  
  game()