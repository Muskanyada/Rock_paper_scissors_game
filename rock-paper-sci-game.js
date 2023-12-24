let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const drawGame=()=>{
    msg.innerText="Game was draw. play again!";
    msg.style.backgroundColor = "#553E4E";
};

const showWinner = (userWin , userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "crimson";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "purple";
    }

};

const playGame = (userChoice)=>{

    console.log("user choice= ", userChoice);
    //generate computer choice->
    const compChoice = genCompChoice();
    console.log("computer choice= ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice==="rock"){
            //here we noticed that if user choose rock then two choice will gave to computer which is scissors and paper.. if computer choice paper then it wins means userwin condition(i.e. true) will become false and computer chooose scissors then computer loose and userwin condition will become true...we write the same thing using ternary operator......
            //same thing for another cases too..

            //scissors,paper
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper" ){
            //rock,scissors
            userWin = compChoice==="scissors" ? false : true;
        }
        else{
            //rock,paper
            userWin = compChoice==="rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);

    }

};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});