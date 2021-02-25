// DOBBELSTEEN PLAYER 1

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1); // geeft random nummer tussen 1 en 6

let randomDiceImage = "dice" + randomNumber1 + ".png";
console.log(randomDiceImage); // geeft random dice images tussen image1 en image 6

let randomImageSource = "images/" + randomDiceImage;
console.log(randomDiceImage); // geeft random dice images tussen image1 en image 6 uit de image folder

// Verander het src attribuut van ons image element. We hebben twee images die veranderen.

// Selecteer element.
let image1 = document.querySelectorAll("img")[0];
// Set het attribuut. Eerste parameter is die je wilt veranderen, de tweede is waarin je het wilt veranderen.
image1.setAttribute("src", randomImageSource);
// Wanneer je je pagina ververst krijg je elke keer een andere dobbelsteen voor player 1.

// DOBBELSTEEN PLAYER 2 (korte versie)

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

// Verander de innerHTML van de titel afhankelijk van wat het resultaat van de dobbelsteenworp was.

// Wanneer player 1 wint.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins"
} // Wanneer player 2 wint.
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🏆"
} // Wanneer het gelijkspel is
else {
    document.querySelector("h1").innerHTML = "DRAW! Try again"
}