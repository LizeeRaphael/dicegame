let h1 = document.querySelector('h1');
let img = document.querySelectorAll('img');
let plSection1 = document.querySelector('.player1-section');
let plSection2 = document.querySelector('.player2-section');

// Function to generate random number 1 - 6
function randomNumber(){
    let finalRandom = Math.floor(Math.random() * 6 ) + 1;
    return finalRandom;
}

let player1 = randomNumber();
let player2 = randomNumber();

let imgSrc1 = `./images/dice-${player1}.png`;
img[0].src = imgSrc1;

let imgSrc2 = "./images/dice-" + player2 +  ".png";
img[1].src = imgSrc2;
 console.log(imgSrc1,imgSrc2);

// Conditions for Players to win/draw
if(player1 > player2){
    h1.innerHTML = "Player 1 wins 🚩";
    plSection1.style.backgroundColor = "brown";   
    plSection1.style.color = "white";   
}else if(player1 == player2){
    h1.innerHTML = "Draw ❌";
}else{
    h1.innerHTML = "Player 2 wins 🏳";
    plSection2.style.backgroundColor = "brown";
    plSection2.style.color = "white";
}