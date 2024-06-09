let user_score = 0;
let draw_score = 0;
let comp_score = 0;

const computer__Choice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer Choice :", computerChoice);
    return computerChoice;
}

// Consolidated game play function
function PlayGame(userChoice) {
    const compChoice = computer__Choice(); 
    console.log("User Choice :", userChoice);
    
    if(userChoice == compChoice){
        document.getElementById('Message-box').style.height = "120px";
        document.getElementById('Message-box').style.width = "320px";
        document.getElementById('Message-box').style.background = "black";
        document.getElementById('Message-box').innerHTML = "It's a Draw";
        console.log("It's a Draw");
        draw_score++;
        document.getElementById('draw_score').innerHTML = draw_score;
    }
    else if(
        (userChoice == 'rock' && compChoice == 'scissors') ||
        (userChoice == 'paper' && compChoice == 'rock') ||
        (userChoice == 'scissors' && compChoice == 'paper')
    ){
        document.getElementById('Message-box').style.height = "120px";
        document.getElementById('Message-box').style.width = "500px";
        document.getElementById('Message-box').style.background = "green";
        document.getElementById('Message-box').innerHTML = "You Win!!!";
        console.log("You Win!!!");
        user_score++;
        document.getElementById('user_score').innerHTML = user_score;
    }
    else {
        document.getElementById('Message-box').style.height = "120px";
        document.getElementById('Message-box').style.width = "450px";
        document.getElementById('Message-box').style.background = "red";
        document.getElementById('Message-box').innerHTML = "Computer Wins!!";
        console.log("Computer Wins!!");
        comp_score++;
        document.getElementById('comp_score').innerHTML = comp_score;
    }
}

// Adding event listeners
document.getElementById('Rock').addEventListener("click", () => PlayGame('rock'));
document.getElementById('Paper').addEventListener("click", () => PlayGame('paper'));
document.getElementById('Scissor').addEventListener("click", () => PlayGame('scissors'));







































// let user_score = 0;
// let comp_score = 0;

// const computer__Choice = () => {
//     const choices = ['rock', 'paper', 'scissors'];
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//     console.log("Computer Choice :" , computerChoice);
//     return computerChoice;
// }

// document.getElementById('Rock').addEventListener("click", PlayGame);
// function PlayGame() { 
//     if(computer__Choice() == 'rock'){
//         document.getElementById('Message-box').innerHTML = "It's a Draw";
//         console.log("User Choice : Rock");
//         console.log("It's a Draw");
//     }

//     else if(computer__Choice() == 'scissors'){
//         document.getElementById('Message-box').innerHTML = "You Win!!!";
//         console.log("User Choice : Rock");
//         console.log("You Win!!!");
//         user_score++;
//         document.getElementById('user_score').innerHTML = user_score;
//     }

//     else{
//         document.getElementById('Message-box').innerHTML = "Computer Wins!!";
//         console.log("User Choice : Rock");
//         console.log("Computer Wins!!!");
//         comp_score++;
//         document.getElementById('comp_score').innerHTML = comp_score;
//     }
// }

// document.getElementById('Paper').addEventListener("click", PlayGame);
// function PlayGame1() {
//     if(computer__Choice() == 'paper'){
//         document.getElementById('Message-box').innerHTML = "It's a Draw";
//         console.log("User Choice : paper");
//         console.log("It's a Draw");
//     } 

//     else if(computer__Choice() == 'scissors'){
//         document.getElementById('Message-box').innerHTML = "Computer Wins!!";
//         console.log("User Choice : paper");
//         console.log("Computer Wins!!");
//         comp_score++;
//         document.getElementById('comp_score').innerHTML = comp_score;
//     }

//     else{
//         document.getElementById('Message-box').innerHTML = "You Win!!!";
//         console.log("User Choice : paper");
//         console.log("You Win!!!");
//         user_score++;
//         document.getElementById('user_score').innerHTML = user_score;
//     }
// }

// document.getElementById('Scissor').addEventListener("click", PlayGame);
// function PlayGame2() {
//     if(computer__Choice() == 'scissors'){
//         document.getElementById('Message-box').innerHTML = "It's a Draw";
//         console.log("User Choice : scissors");
//         console.log("It's a Draw");
//     } 

//     else if(computer__Choice() == 'rock'){
//         document.getElementById('Message-box').innerHTML = "Computer Wins!!";
//         console.log("User Choice : scissors");
//         console.log("Computer Wins!!");
//         comp_score++;
//         document.getElementById('comp_score').innerHTML = comp_score;
//     }

//     else{
//         document.getElementById('Message-box').innerHTML = "You Win!!!";
//         console.log("User Choice : scissors");      
//         console.log("You Win!!!");
//         user_score++;
//         document.getElementById('user_score').innerHTML = user_score;
//     } 
// }
