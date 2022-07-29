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
    let playerChoiceLength = playerChoice.length;
    if (playerChoiceLength > 8){
        console.log("You do too many")
    }
    let playerChoiceCap = playerChoice.charAt(0).toUpperCase()
    let playerChoiceSlice = playerChoice.slice(1).toLowerCase()
    playerChoice = playerChoiceCap + playerChoiceSlice
    console.log(playerChoiceLength)
    console.log(playerChoiceCap)
    console.log(playerChoiceSlice)
    console.log(playerChoice)

}

