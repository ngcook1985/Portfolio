//Create R,P,S randomiser
var compChoice
var playerChoice
//Create R,P,S randomiser
function getComputerChoice(){
   compChoice = Math.floor(Math.random() *3) 
   
   if (compChoice == 0){
    compChoice = "Rock"
   } 
   else if (compChoice == 1){
    compChoice = "Paper"
   }
   else {
    compChoice = "Scissors"
   }
}

//Input for user
function getPlayerChoice(){
    playerChoice = prompt("Rock, Paper or Scissors?")
}

