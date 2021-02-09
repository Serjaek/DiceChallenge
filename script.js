function randomDiceNumber() {
    var num = Math.ceil(Math.random() * 6);
    return num;
}

var dice1 = randomDiceNumber();
var dice2 = randomDiceNumber();

var dices = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", 
"images/dice5.png", "images/dice6.png"]

var imgPath1 = dices[dice1 - 1];
var imgPath2 = dices[dice2 - 1];

document.querySelector(".img1").setAttribute("src", imgPath1);
document.querySelector(".img2").setAttribute("src", imgPath2);

var winnerPlayer = 0;

if (dice1 > dice2) { 
    winnerPlayer = 1;
} 
else if (dice1 < dice2) {
    winnerPlayer = 2;
}

if(winnerPlayer == 0) {
    document.querySelector(".header").innerHTML = "Draw again";
    var subtitle = document.createElement("h4");
    subtitle.appendChild(document.createTextNode("Refresh the page"));
    document.querySelector("div.container").insertBefore(subtitle, document.querySelector("div.dice"));
}
else {
    if (winnerPlayer == 1){
        document.querySelector(".header").innerHTML = "🚩 Player " + winnerPlayer + " won!";
    }
    else {
         document.querySelector(".header").innerHTML = "Player " + winnerPlayer + " won! 🚩";
    }
    var subtitle = document.createElement("h4");
    subtitle.appendChild(document.createTextNode("Refresh to draw again"));
    document.querySelector("div.container").insertBefore(subtitle, document.querySelector("div.dice"));
}
