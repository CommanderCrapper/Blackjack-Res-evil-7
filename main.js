//The value of each individual card, gets added up into the value
let playerHand = [];
let botHand = [];

//Determines trump card stuff, like their inventory & the chance of getting a trump card
let trumpBot = [];
let trumpPlayer = [];

//The entire deck, numbered 1-11
let deck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//The value of all the cards
let playerValue;
let botValue;

//Either active (hit last) or inactive (stayed)
let playerStatus;
let botStatus;

//Adds a card to the player's hand
function addPlayer() {
    testTrump();
    //if(trumpChance = some random number or smth) {
        //addTrump();
    //}
    let newCard = deck[Math.floor(Math.random() * deck.length)];
    playerHand.push(newCard);
    let i = newCard;
    while (i = 0) {
        let newCard = deck[Math.floor(Math.random() * deck.length)];
        if(i != 0) {
            playerHand.push(newCard);
        }
    }
    i = i-1;
    delete newCard[i];
    //This may or may not work? I'm not 100% sure since it doesn't specify a position to put the 0 in. I could be overthinking it, however it's worth noting
    deck.concat(0);
    //update the screen to represent this change, x/21 & demonstrate each individual card (look at how you did it in the previous blackjack project)
}

//Player stays
function playerStay() {
    playerStatus = "stay";
    if(playerStatus == "stay" && botStatus == "stay") {
    endGame();
    }
}

//Bot stays
function botStay() {
    botStatus = "stay";
    if(playerStatus == "stay" && botStatus == "stay") {
    endGame();
    }
}

//Adds a card to the bot's hand
function addBot() {
    testTrump();
    //if(trumpChance = some random number or smth) {
        //addTrump();
    //}
    let newCard = deck[Math.floor(Math.random() * deck.length)];
    botHand.push(newCard);
    let i = newCard;
    while(i = 0) {
        let newCard = deck[Math.floor(Math.random() * deck.length)];
        if(i != 0) {
            botHand.push(newCard);
        }
    }
    i = i-1;
    delete newCard[i];
    //This may or may not work? I'm not 100% sure if this is the correct way to give a location to replace. I could be overthinking it, however it's worth noting
    deck[i].concat(0);
    //update the screen to represent this change, x/21 & demonstrate each individual card (look at how you did it in the previous blackjack project)
}

//Ends the game when BOTH players have stayed
function endGame() {
    if(playerValue > 21) {
        loseGame();
    } else if(botValue > 21) {
        winGame();
    } else if(playerValue > botValue && playerValue < 21) {
        winGame();
    } else if(playerValue < botValue && botValue < 21) {
        loseGame();
    } else if(playerValue = botValue) {
        tieGame();
    } else if(playerValue > 21 && botValue > 21) {
        tieGame();
    }
}

//Triggers when both player & bot stay, & player number is greater or bot number is over 21
function winGame() {
    //show win message, displays play again button
}

//Triggers when both players & bot stay, & player number is less than or player number is over 21
function loseGame() {
    //show lose message, displays play again button
}

function tieGame() {
    //Show tie message, displays play again button
}

//Creates a new game, adds 2 cards to each player's hand
function newGame() {
    let deck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    playerStatus = "";
    botStatus = "";
    //Reset all values, RESET THE DECK/HANDS/VALUES, hide win/loss/tie message, then draw another 2 to start with
    
}

function newCards() {
    addPlayer();
    addPlayer();
    addBot();
    addBot();
}

//Look up chances for trump card to be drawn, then add code that adds a trump card to the player's inventory then draws a card

//Tests to see if a player or bot draws a trump card
function testTrump() {
    let trumpChance = Math.floor(Math.random() * 26) + 1;
    if(trumpChance == 1) {
        addTrump();
    } else {
    }
}


//Gives player a random trump card
function addTrump() {
    //let trumpCard = Math.floor(Math.random() * 26) + 1; (26 = max, 1 = min; adjust these so they actually fit the normal cards you can receive)
    //Randomly decide which trump card to choose, then add it to the deck based on which one it is
    //ex: if(trumpCard == 1) {
        //trumpPlayer.push('x');
    //}
}

//Gives bot a random trump card
function addTrumpBot() {
        //let trumpCard = Math.floor(Math.random() * 26) + 1; (26 = max, 1 = min; adjust these so they actually fit the normal cards you can receive)
    //Randomly decide which trump card to choose, then add it to the deck based on which one it is
    //ex: if(trumpCard == 1) {
        //trumpBot.push('x');
    //}
}

//Removes player's last card from their hand & adds it back into the deck
function removeLast() {
    //let removedPlayer = playerHand.pop();
    //find some way to 
}

//Removes the opponent's last card & adds it back into the deck
function removeOppLast() {

}

//Draws a 3 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw3() {
    //Look in the notebook on your desk for notes on searching an array for a certain item, I think you wrote something in there.
}

//Draws a 4 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw4() {
    //Look in the notebook on your desk for notes on searching an array for a certain item, I think you wrote something in there.
}

//Draws a 5 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw5() {
    //Look in the notebook on your desk for notes on searching an array for a certain item, I think you wrote something in there.
}

//Draws a 6 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw6() {
    //Look in the notebook on your desk for notes on searching an array for a certain item, I think you wrote something in there.
}
