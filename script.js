let player = {
    name: "Ronak",
    chips: 145
}
let cards = []//Array
let hasBlackCard = false;
let sum = 0
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el") Another way to find selector
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRamdomCard() {
    let randomNumer = Math.floor(Math.random() * 13) + 1;
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    let firstCard = getRamdomCard();
    let secondCard = getRamdomCard();
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    isAlive = true
    rendorGame();
}

function rendorGame() { //startGame changed bcz now we added startGame function in newCard function
    // cardsEl.textContent = "Cards:" + cards[0] + " " +  cards[1] 

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! you've got Blackjack!"
        hasBlackCard = true;
    } else {
        message = ("You're out of the game!")
        isAlive = false;
    }

    messageEl.textContent = message

}

function newCard() {
    if (isAlive === true && hasBlackCard === false){
        let card = getRamdomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        rendorGame();
    }
}







