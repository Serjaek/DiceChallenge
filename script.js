function randomDiceNumber() {
    var num = Math.ceil(Math.random() * 6);
    return num;
}

var dice1 = randomDiceNumber();
var dice2 = randomDiceNumber();

console.log("dice1: " + dice1);
console.log("dice2: " + dice2);

var dices = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", 
"images/dice5.png", "images/dice6.png"]

var imgPath1 = dices[dice1 - 1];
var imgPath2 = dices[dice2 - 1];

console.log("imgPath1: " + imgPath1);
console.log("imgPath2: " + imgPath2);

document.querySelector(".img1").setAttribute("src", imgPath1);
document.querySelector(".img2").setAttribute("src", imgPath2);

var playerWonNumber = 0;
var draw = false;

if (dice1 > dice2) { 
    playerWonNumber = 1;
} 
else if (dice1 < dice2) {
    playerWonNumber = 2;
}
else {
    draw = true;
}

if(draw == true) {
    document.querySelector(".header").innerHTML="Draw again";
    var subtitle = document.createElement("h4");
    subtitle.appendChild(document.createTextNode("Refresh the page"));
    document.querySelector("div.container").insertBefore(subtitle, document.querySelector("div.dice"));
}
else {
    if (playerWonNumber == 1){
        document.querySelector(".header").innerHTML="🚩 Player " + playerWonNumber + " won!";
    }
    else {
         document.querySelector(".header").innerHTML="Player " + playerWonNumber + " won! 🚩";
    }
    var subtitle = document.createElement("h4");
    subtitle.appendChild(document.createTextNode("Refresh to draw again"));
    document.querySelector("div.container").insertBefore(subtitle, document.querySelector("div.dice"));
}