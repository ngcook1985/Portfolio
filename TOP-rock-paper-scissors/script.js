
var compChoice
var playerChoice
var gameNumber
var compScore
var playerScore

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
   //console.log(compChoice)
}

//Input from player
function getPlayerChoice(){
    playerChoice = prompt("Rock, Paper or Scissors?")
    let playerChoiceLength = playerChoice.length;
    if (playerChoiceLength > 8){
        getPlayerChoice()
    }
    let playerChoiceCap = playerChoice.charAt(0).toUpperCase()
    let playerChoiceSlice = playerChoice.slice(1).toLowerCase()
    playerChoice = playerChoiceCap + playerChoiceSlice
    choiceValidation()

    /*console.log(playerChoiceLength)
    console.log(playerChoiceCap)
    console.log(playerChoiceSlice)*/
    //console.log(playerChoice) 
}

//Validate players choice
function choiceValidation(){
    // console.log(playerChoice)
    if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors"){
       
        // console.log("Hot diggity dang")
    }
    else {getPlayerChoice()}
}

//Gameplay
function gamePlay () {
    getComputerChoice()
    getPlayerChoice()
    if (compChoice === playerChoice){
    }
    else if (compChoice === "Rock" && playerChoice === "Scissors"){
    console.log(compChoice)
    console.log(playerChoice)
    console.log("Comp wins")
} 
    else if (compChoice === "Paper" && playerChoice === "Rock"){
    console.log(compChoice)
    console.log(playerChoice)
    console.log("Comp wins")
} 
    else if (compChoice === "Scissors" && playerChoice === "Paper"){
    console.log(compChoice)
    console.log(playerChoice)
    console.log("Comp wins")
} 
    else {console.log("Player wins")}
}

//Score tallying
function letsplay(){
for (let i = 0; i < 5; i++) {
    gamePlay()
}
}