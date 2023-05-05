//The value of each individual card, gets added up into the value
let playerHand = [];
let botHand = [];

//The value of all the cards
let playerValue;
let botValue;

//Determines trump card stuff, like their inventory & the chance of getting a trump card
let trumpBot = [];
let trumpPlayer = [];

//The entire deck, numbered 1-11
let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//Either active (hit last) or inactive (stayed)
let playerStatus;
let botStatus;

//The random number chosen
let randomNum;

//Updates the screen to properly represent all the updated values that were changed
function updateScreen() {
    document.getElementById("botCards").innerHTML = botHand;
    document.getElementById("botTotal").innerHTML = botValue;
    document.getElementById("playerCards").innerHTML = playerHand;
    document.getElementById("playerTotal").innerHTML = playerValue;
}

//Adds a card to the player's hand
function addPlayer() {
    testTrump();
    let newCard = deck[Math.floor(Math.random() * deck.length)];
<<<<<<< HEAD
    playerHand.push(newCard);
    i = newCard;
    if(i = 0) {
        while (i = 0) {
=======
    if(newCard = 0) {
        while (newCard = 0) {
>>>>>>> d089e49e5e5bcbeaa0781e6b9c4d8a82d2bae02c
            let newCard = deck[Math.floor(Math.random() * deck.length)];
            i = newCard;
        }
    }else {
        playerHand.push(newCard);
    }
    i = i-1;
    deck.pop(i);
    deck.splice(i, 0, 0);
    for(var i=0; i<playerHand.length; i++) {
        playerValue += +playerHand[i];
    }
    updateScreen();
}

//Adds a card to the bot's hand, & removes it from the deck
function addBot() {
    testTrump();
    let newCard = deck[Math.floor(Math.random() * deck.length)];
    if(newCard = 0) {
        while(newCard = 0) {
            let newCard = deck[Math.floor(Math.random() * deck.length)];
            let i = newCard;
        } 
    } else {
        botHand.push(newCard);
    }
    i = i-1;
    newCard.pop(i);
    deck.splice(i, 1, 0);
    for(var i=0; i<playerHand.length; i++) {
        playerValue += +playerHand[i];
    updateScreen();
    }
}

//Determines what move the bot will make
function botMove() {
    //Something about not including this feels like it could cause issues. Look into the code more to be sure
    // if(botStatus = "stay") {

    // }
    if(playerValue > 21) {
        botStatus = "stay";
    }    
    if(botValue > 21 && x != y) {
        //X & Y ARE PLACEHOLDER VALUES!
        //What I plan on doing here is searching the trump card deck for a trump card that can remove their last card, hopefully making it lower or equal to 21.
        //After which, the bot will stay.
        botStatus = "stay";
    } else {
        botStatus = "stay";
    }
    if(botValue >= 15 && playerValue > botValue) {
        //Heads(1)/tails(2). If heads, hit. If tails, stay.
        let coinFlip = Math.floor(Math.random() * 2 - 1);
        if(coinFlip = 1) {
            addBot();
            botStatus = "active";
        } else {
            botStatus = "stay";
        }
    }
    return botStatus;
}

//Player stays, checks to see if bot has stayed as well
function playerStay() {
    playerStatus = "stay";
    if(playerStatus == "stay" && botStatus == "stay") {
    endGame();
    }
}

//Bot stays, checks to see if player has stayed as well
function botStay() {
    botStatus = "stay";
    if(playerStatus == "stay" && botStatus == "stay") {
    endGame();
    }
}

<<<<<<< HEAD
//Adds a card to the bot's hand
function addBot() {
    testTrump();
    //if(trumpChance = some random number or smth) {
        //addTrump();
    //}
    let newCard = deck[Math.floor(Math.random() * deck.length)];
    botHand.push(newCard);
    i = newCard;
    while(i = 0) {
        let newCard = deck[Math.floor(Math.random() * deck.length)];
        if(i != 0) {
            botHand.push(newCard);
        }
    }
    i = i-1;
    newCard.pop(i);
    deck.splice(i, 1, 0);
    for(var i=0; i<200; i++) {
        playerValue += +playerHand[i];
    updateScreen();
    }
}

=======
>>>>>>> d089e49e5e5bcbeaa0781e6b9c4d8a82d2bae02c
//Ends the game when BOTH players have stayed
function endGame() {
    if(playerValue > 21 && botValue > 21) {
        tieGame();
    } else if(playerValue == botValue) {
        tieGame();
    } else if(playerValue > 21) {
        loseGame();
    } else if(botValue > 21) {
        winGame();
    } else if(playerValue > botValue && playerValue < 21) {
        winGame();
    } else if(playerValue < botValue && botValue < 21) {
        loseGame();
    } 
}

// let gameEndMessage = document.getElementById
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

//Fully resets deck, cards, etc.
function fullReset() {
    deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    playerHand = [];
    botHand = [];
    playerValue = 0;
    botValue = 0;
    playerStatus = "active";
    botStatus = "active";
}

//Creates a new game, adds 2 cards to each player's hand
function newGame() {
    let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    playerStatus = "";
    botStatus = "";
    //Reset all values, RESET THE DECK/HANDS/VALUES, hide win/loss/tie message, then draw another 2 to start with
    addPlayer();
    addPlayer();
    addBot();
    addBot();
    updateScreen();
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
    //let trumpCard = Math.floor(Math.random() * 26) + 1; (26 = max, 1 = min)
    //Adjust these so they actually fit the normal cards you can receive

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

//Opens a menu that shows the player all the available trump cards in their deck
function viewTrumpDeck() {
    //Fetch the trump cards of the player
    //Display each one in an orderly list, or how it's displayed in RE7, your choice.
    //for(i = 0; i < trumpCardSlot.length; i++) {
    //trumpCardSlot[i] = trumpPlayer[i];
    //}
    //if(trumpCardSlot[i] is clicked) {
        //Use the trump card in that slot. If there's nothing, then nothing happens.
        //Activate the card in question, use the function here
        //Is there a way to assign trump cards to a specific place? like
        //trumpCardSlot[x] = removeLast();
        //trumpCardSlot[x];
    //} 
}

//Removes player's last card from their hand & adds it back into the deck
function removeLast() {
    //let removedPlayerCard = playerHand.pop();
    //find some way to put it back in the deck in the same place it was, maybe like
    //if(removedPlayerCard = 2) {
        //deck.splice(1, 0, 2);
        //For context, 1 is the position, 0 is saying you want to add a number & not delete, then 2 is the actual object you want to put
    //}
}

//Removes the opponent's last card & adds it back into the deck
function removeOppLast() {
    //let removedBotCard = playerHand.pop();
    //find some way to put it back in the deck in the same place it was, maybe like
    //if(removedBotCard = 2) {
        //deck.splice(1, 0, 2);
        //For context, 1 is the position, 0 is saying you want to add a number & not delete, then 2 is the actual object you want to put
    //}
}

//Draws a 3 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw3() {
    //Is it 1 or 2 equal signs?
    if(deck.includes(3) == true) {
        playerHand.push(3);
        //How do I remove the trump card from the inventory? Removing it isn't necessarily the hard part, but rather the identification of where the trump card is.
        //Although, then again I could probably use array.includes("trumpcardname") to find that out
    } else {
        //array.includes("trumpcardname");
        //remove
    }
}

//Draws a 4 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw4() {
    //Is it 1 or 2 equal signs?
    if(deck.includes(4) == true) {
        playerHand.push(4);
        //How do I remove the trump card from the inventory? Removing it isn't necessarily the hard part, but rather the identification of where the trump card is.
        //Although, then again I could probably use array.includes("trumpcardname") to find that out
    } else {
        //array.includes("trumpcardname");
        //remove
    }
}

//Draws a 5 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw5() {
    //Is it 1 or 2 equal signs?
    if(deck.includes(5) == true) {
        playerHand.push(5);
        //How do I remove the trump card from the inventory? Removing it isn't necessarily the hard part, but rather the identification of where the trump card is.
        //Although, then again I could probably use array.includes("trumpcardname") to find that out
    } else {
        //array.includes("trumpcardname");
        //remove
    }
}

//Draws a 6 from the deck if not in either player's hands. If it is, then this card is discarded & nothing is drawn.
function draw6() {
    //Is it 1 or 2 equal signs?
    if(deck.includes(6) == true) {
        playerHand.push(6);
        //How do I remove the trump card from the inventory? Removing it isn't necessarily the hard part, but rather the identification of where the trump card is.
        //Although, then again I could probably use array.includes("trumpcardname") to find that out
    } else {
        //array.includes("trumpcardname");
        //remove
    }
}
