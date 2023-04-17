//The value of each individual card, gets added up into the value
let playerHand = [];
let botHand = [];

//The entire deck, numbered 1-11
let deck = [1,2,3,4,5,6,7,8,9,10,11];

//The value of all the cards
let playerValue;
let botValue;

//Either active (hit last) or inactive (stayed)
let playerStatus;
let botStatus;

//Adds a card to the player's hand
function addPlayer() {
    //first roll for a chance at a trump card. If it succeeds, addTrump(); then draw a card. If it fails, ignore & proceed to draw a card.
    let newCard = deck[Math.floor(Math.random() * deck.length)];
    playerHand.push(newCard);
    let i = newCard;
    i = i-1;
    //remove deck[i];
    //update the screen to represent this change, x/21 & demonstrate each individual card (look at how you did it in the previous blackjack project)
}

//Adds a card to the bot's hand
function addBot() {
    let newCard = deck[Math.floor(Math.random() * deck.length)];
    botHand.push(newCard);
    let i = newCard;
    i = i-1
    //This won't work, since cards are actively being removed from the deck. If enough cards are removed from the deck, then the place number (the number assigned to the place of each number) of each individual value would change if it's greater than the number drawn.
    
    //Maybe find a way to make a card that's already in either the player's hand or the bot's hand not able to be drawn? I'm not sure how I'd do that, ig it'd probably be smth like "if this list contains this number, then reroll". Hell I could probably make a while loop for it.

    //remove deck[i];
    //update the screen to represent this change, x/21 & demonstrate each individual card (look at how you did it in the previous blackjack project)
}

//Ends the game when BOTH players have stayed
function endGame() {
    //If player hand greater, & less than 21, player wins. If player hand over 21, loss no matter what. If bot hand greater & less than 21, bot wins. If bot hand over 21, win no matter what. If it's a tie, it's a tie.
}

//Creates a new game, adds 2 cards to each player's hand
function newGame() {
    //Reset all values, RESET THE DECK/HANDS/VALUES, hide win/loss/tie message, then draw another 2 to start with
    
}

function newCards() {
    addPlayer();
    addPlayer();
    addBot();
    addBot();
}

//Look up chances for trump card to be drawn, then add code that adds a trump card to the player's inventory then draws a card
//Gives player a trump card, then adds a card
function addTrump() {

}

//Removes player's last card from their hand & adds it back into the deck
function removeLast() {

}

//Removes the opponent's last card & adds it back into the deck
function removeOppLast() {

}

//Draws a 3 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw3() {

}

//Draws a 4 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw4() {

}

//Draws a 5 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw5() {

}

//Draws a 6 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw6() {

}
