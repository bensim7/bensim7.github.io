# bensim7.github.io

Comet - Card Game

Comet - Card Game is an original game inspired by an existing card game (where players lose if they draw a specific card and there are save cards that will save the players from the specific card).
The original idea is to have both players in the game display their hands on the board and the game mechanics works with both players showing their hands to each other in mind. Each player can interact with each other's cards to make plays in the game to gain more "save" cards that will protect the player from the specific drawn card.

Technologies used
Javascript - for loop, if-else statements, arrays, setTimeout, alert. DOM to insert classnames, img src and do if-else comparisons, removing of innerHTML and classNames through clicking on event.currentTarget and Event Listeners.
CSS
HTML
console.log - troubleshooting
alert statements to show the game rules and if a player won/lost the game.

Game is created with HTML and CSS pages for the basic user interface first, with the respective divs.

javascript codes used for generating the deck, shuffling and dealing the cards and starting hand.

Brainstorming of key logic of the original card such as setting the logic of when 2 cards are a match e.g. Megasaurus beats Rex, Rex beats Raptor, Raptor beats Megasaurus.

A Dino Angel card is distributed when there is a matching pair when one Dino beats another. While there are no issues with distributing a card to a static card slot is simple, distributing a card to the first empty card slot required brainstorming, and a for loop searching through an empty innerText="" worked to find the first empty card slot and distribute a card there.

Other Key logic is making 2 matching card disappear from each players' hand when there is a match and a stored variable with event.currentTarget to used to store the div of the cards clicked and then empty the innerText and classNames of the divs
Also, searching through the player's boards for The Comet card when the next turn draw button is clicked, and for the Dino Angel to only be clickable when there is The Comet found in the player's hand.

When the Comet is found to be in a player's hand when they draw for their turn, a function alerts the player that they have drawn it, and also adds a class name to the html. Clicking the Dino Angel will remove this class name, if it is not removed within a specific time, a setTimeout function will trigger a function that checks for this class name after that specific time, and if the class name is there, the player that drew for their turn loses.

Rules of the Game:

1. A Deck of 16 cards including 1 Comet card (Total 17 cards) is created at the start of the game. Each player receives a starting hand of 3 cards from the deck and 1 Dino Angel card from outside the deck.

2. If the Comet is drawn by any Player, they lose the game unless they have A Dino Angel Card.

3. When Dino Angel card is clicked when the player has the comet, instead of losing the game, the Dino Angel and Comet disappear from hand and the Comet is reshuffled into the deck.

4. On each player's turn they may take up to one action
   a) Play a pair of Dino cards (one card from each player, in top down order, click White Player's Board first and then Black Player's Board
   i) Megasaurus beats Rex beats Rap-Pack beats Megasaurus (The Player with the winning Dino out of the pair gets the Dino Angel)
   ii) If a player accidentally plays a pair where the opponent has the winning Dino, they have spent the turn action to give the opponent a Dino Angel!
   b) Play a Dino Angel Card to save themself from The Comet.
   c) Play Gift card to steal the opponent's Dino Angel.

5. Players with 6 or more cards in their hand should take an action.
