let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const message = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");

const CompScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    //rockpaperscissors
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx];
  }

const drawGame = () =>{
  message.innerText = "Game was Draw. Please Play again!";
  message.style.backgroundColor = "black";
} 

const showWinner = (userWin,userChoice,compChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    message.innerText = `You Win :) Your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";
  }
  else{
    compScore++;
    CompScorePara.innerText = compScore;
    message.innerText = `You Lose :( Computer's ${compChoice} beats ${userChoice}`;
    message.style.backgroundColor = "red";
  }
}

const playGame = (userChoice)=>{
    console.log("user choice = " , userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
      drawGame();
    }else{
      let userWin= true;
      if(userChoice ==="rock"){
        userWin = compChoice ==="paper" ? false : true
      }
      else if(userChoice ==="paper"){
        userWin = compChoice ==="scissors" ? false : true
      }
      else{
        userWin = compChoice ==="rock" ? false : true;
      }
      showWinner(userWin,userChoice,compChoice);
    }

  }

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{ 
    const userChoice = choice.getAttribute("id");
    console.log("clikc");
    playGame(userChoice);  
  })
})