let whiteHand = [];
let blackHand = [];

class Deck {
  constructor() {
    this.deck = [];
    this.reset(); //Add cards to the deck
    this.shuffle(); //Shuffle the deck
  } //End of constructor

  reset() {
    this.deck = [];
    const colors = ["Red", "Green", "Blue", "Yellow"];
    const values = ["Megasaurus", "Rex", "Rap-Pack", "Gift"];

    for (let color in colors) {
      for (let value in values) {
        this.deck.push(colors[color] + "_" + values[value]);
      }
    }
    this.deck.push("The_Comet");
  } //End of reset()

  shuffle() {
    let numberOfCards = this.deck.length;
    for (let i = 0; i < numberOfCards; i++) {
      let j = Math.floor(Math.random() * numberOfCards);
      let tmp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = tmp;
    }
  } //End of shuffle()

  deal() {
    return this.deck.pop();
  } //End of deal()

  length() {
    return this.deck.length;
  } //End of length()

  ////////////////////////////////////////////////////////////////
  // Distribute Cards to White Player and Black Player
  ////////////////////////////////////////////////////////////////

  wDistributeCard(cardId, dealt = true) {
    this.cardId = document.getElementById(cardId);
    this.dealt = dealt;
    const cardhand = deck.deal();
    if (dealt) {
      this.cardId.removeAttribute("class");
      this.cardId.classList.add(cardhand);
      document.getElementById(cardId).innerHTML =
        '<img src="' + cardhand + '.jpg"/>';
    } else {
      this.cardId.style.backgroundColor = "white";
    }
    // const whiteHand = [];
    whiteHand.push(this.cardId);
    console.log(whiteHand);
  }

  bDistributeCard(cardId, dealt = true) {
    this.cardId = document.getElementById(cardId);
    this.dealt = dealt;
    const cardhand = deck.deal();
    if (dealt) {
      this.cardId.removeAttribute("class");
      this.cardId.classList.add(cardhand);
      document.getElementById(cardId).innerHTML =
        '<img src="' + cardhand + '.jpg"/>';
    } else {
      this.cardId.style.backgroundColor = "white";
    }
    // const blackHand = [];
    blackHand.push(this.cardId);
    console.log(blackHand);
  }

  distributeAngel(cardId, dealt = true) {
    const angel = ["Dino_Angel"];
    this.cardId = document.getElementById(cardId);
    this.cardId.classList.add("Dino_Angel");
    this.dealt = dealt;
    if (dealt) {
      document.getElementById(cardId).innerHTML =
        '<img src="' + angel[0] + '.jpg"/>';
    } else {
      this.cardId.style.backgroundColor = "white";
    }
  }
} //End of Deck Class

const deck = new Deck();

function startDeal() {
  if (deck.length() < 1 || deck.deal() === "The_Comet") {
    deck.reset();
    deck.shuffle();
  }

  deck.distributeAngel("card1", true);
  deck.wDistributeCard("card2", true);
  deck.wDistributeCard("card3", true);
  deck.wDistributeCard("card4", true);
  deck.distributeAngel("card8", true);
  deck.bDistributeCard("card9", true);
  deck.bDistributeCard("card10", true);
  deck.bDistributeCard("card11", true);
} //End of deal()

startDeal();

///////////////////////////////////////////////////////////////////
// Call The Comet
///////////////////////////////////////////////////////////////////
// const messageBox = document.getElementById("messageBox");
// function callTheComet() {
//   for (c = 0; c < 7; c++) {
//     if (carddiv.parentElement.children[c].classList.contains("The_Comet")) {
// const cometMessage = document.createElement("h4");
// cometMessage.innerText =
//   "--- Drew THE COMET, click DINO ANGEL or LOSE THE GAME ---";
// messageBox.append(cometMessage);
// break;
//     }
//   }
// }

// wTurn.addEventListener("click", callTheComet);
// bTurn.addEventListener("click", callTheComet);

const messageBox = document.getElementById("messageBox");

function whiteCallTheComet() {
  let cometCountWhite = 0;

  const selectWhiteBoard = document.getElementById("whiteBoard");
  console.log(selectWhiteBoard.children);
  for (c = 0; c < 7; c++) {
    if (selectWhiteBoard.children[c].classList.contains("The_Comet")) {
      cometCountWhite += 1;
    }
  }

  if (cometCountWhite > 0) {
    const cometMessageWhite = document.createElement("h3");
    messageBox.className = "White_Player_Loses_in_5secs";
    cometMessageWhite.innerText =
      "--- WHITE PLAYER DREW THE COMET, PLAY A DINO ANGEL WITHIN 5 SECS OR LOSE THE GAME ---";
    messageBox.append(cometMessageWhite);
  }
}

function blackCallTheComet() {
  let cometCountBlack = 0;

  const selectBlackBoard = document.getElementById("blackBoard");
  console.log(selectBlackBoard.children);
  for (c = 0; c < 7; c++) {
    if (selectBlackBoard.children[c].classList.contains("The_Comet")) {
      cometCountBlack += 1;
    }
  }

  if (cometCountBlack > 0) {
    const cometMessageBlack = document.createElement("h3");
    messageBox.className = "Black_Player_Loses_in_5secs";
    cometMessageBlack.innerText =
      "--- BLACK PLAYER DREW THE COMET, PLAY A DINO ANGEL WITHIN 5 SECS OR LOSE THE GAME ---";
    messageBox.append(cometMessageBlack);
  }
}

/////////////////////////////////////////////////////////////////
// Giving Cards on draw using turn button
/////////////////////////////////////////////////////////////////

// const wTurn = document.getElementById("whitePlayerTurn");
// wTurn.addEventListener("click", function (e) {
//   // if (document.querySelector("#whiteBoard").innerHTML == "") {
//   deck.wdisplayCard("wcard5", true);
//   // }
// });

////////////////////////////////////////////////////////////////
// Player turn buttons - giving cards on draw with turn buttons
////////////////////////////////////////////////////////////////

const wTurn = document.getElementById("whitePlayerTurn");
wTurn.addEventListener("click", giveWhitePlayerCard);

function giveWhitePlayerCard() {
  for (let i = 1; i <= 7; i++) {
    if (document.getElementById("card" + i).innerHTML == "") {
      deck.wDistributeCard("card" + i, true);
      break;
    }
  }
  document.getElementById("whiteBoard").style.backgroundColor = "orange";
  document.getElementById("blackBoard").style.backgroundColor = "black";

  whiteCallTheComet();
  setTimeout(checkWhiteForComet, 5000);
}

const bTurn = document.getElementById("blackPlayerTurn");
bTurn.addEventListener("click", giveBlackPlayerCard);

function giveBlackPlayerCard() {
  for (let i = 8; i <= 14; i++) {
    if (document.getElementById("card" + i).innerHTML == "") {
      deck.bDistributeCard("card" + i, true);
      break;
    }
  }
  document.getElementById("blackBoard").style.backgroundColor = "orange";
  document.getElementById("whiteBoard").style.backgroundColor = "white";

  blackCallTheComet();
  setTimeout(checkBlackForComet, 5000);
}

///////////////////////////////////////////////////////////////
// set Win Condition to a timer
//////////////////////////////////////////////////////////////

function checkWhiteForComet() {
  if (messageBox.classList.contains("White_Player_Loses_in_5secs")) {
    const wAudio = new Audio("wplayerloses.m4a");
    wAudio.play();
    alert("5 seconds are up, White Player Loses, Black Player Wins");
  }
}

function checkBlackForComet() {
  if (messageBox.classList.contains("Black_Player_Loses_in_5secs")) {
    const bAudio = new Audio("bplayerloses.m4a");
    bAudio.play();
    alert("5 seconds are up, Black Player Loses, White Player Wins");
  }
}

// function whiteDrawsCometWithNoAngel() {
//   for (c = 0; c < 7; c++) {
//     if (carddiv.parentElement.children[c].classList.contains("The_Comet")) {
//       if (
//         carddiv.parentElement.children[c].classList.contains("Dino_Angel") ==
//         false
//       ) {
//         alert("White Player Loses, Black Player Wins");
//       }
//     }
//   }
// }

////////////////////////////////////////////////////////////
// Making the Card Div into a Button
////////////////////////////////////////////////////////////

// const wcarddiv = document.getElementById("wcard1");
// wcarddiv.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColourRGB();
//   console.log("div", e.target, e.currentTarget);
// });

// function randomColourRGB() {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   return `rgb(${red}, ${green}, ${blue})`;
// }

// const carddiv = document.getElementById("card" + a);
// carddiv.addEventListener("click", function (e) {
//   if (e.currentTarget.parentElement === "#whiteBoard") {
// let selectedWhite = carddiv.addEventListener("click", checkDinoAndGiveAngel);
// } else if (e.currentTarget.parentElement === "#blackBoard") {
// let selectedBlack = carddiv.addEventListener("click", checkDinoAndGiveAngel);
// }

// }
// )

let selectedWhite = "";
let selectedBlack = "";
let selectedWhiteRemoval = "";
let selectedBlackRemoval = "";

for (let a = 1; a <= 14; a++) {
  const carddiv = document.getElementById("card" + a);
  console.log(carddiv);

  /////////////////////////////////////////////////////////////////
  // Consume Dino Angel when there is comet
  /////////////////////////////////////////////////////////////////

  // carddiv.className == Dino_Angel works as well
  carddiv.addEventListener("click", function (e) {
    console.log("click on angel method: show children array");
    console.log(carddiv.parentElement.children);
    for (let c = 0; c < 7; c++) {
      if (carddiv.parentElement.children[c].classList.contains("The_Comet")) {
        // if (carddiv.classList.contains("The_Comet")) {
        if (e.currentTarget.className == "Dino_Angel") {
          e.currentTarget.removeAttribute("class");
          e.currentTarget.innerHTML = "";
          carddiv.parentElement.children[c].innerHTML = "";
          carddiv.parentElement.children[c].removeAttribute("class");
          deck.deck.push("The_Comet");
          deck.shuffle();
          messageBox.innerHTML = ""; // Clears Call The Comet
          document.getElementById("messageBox").removeAttribute("class");
        }
        // when Dino Angel is clicked when there is comet, it removes the comet, but also removes comet when comet is clicked.
        // carddiv.parentElement.children[c].innerHTML = "";
        // carddiv.parentElement.children[c].removeAttribute("class");
        // deck.deck.push("The_Comet");
      }
    }
  });

  // carddiv.parentElement.children[c].classList.contains("The_Comet").innerHTML = "";
  // carddiv.parentElement.children[c].classList.contains("The_Comet").removeAttribute("class");

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  // Compare the Cards and Determine who gets Dino Angel
  //////////////////////////////////////////////////////////////////////////////////////////////////////

  // function Mega() {
  //   return (
  //     carddiv.className == "Red_Megasaurus" ||
  //     carddiv.className == "Green_Megasaurus" ||
  //     carddiv.className == "Blue_Megasaurus" ||
  //     carddiv.className == "Yellow_Megasaurus"
  //   );
  // }

  // function Rex() {
  //   return (
  //     carddiv.className == "Red_Rex" ||
  //     carddiv.className == "Green_Rex" ||
  //     carddiv.className == "Blue_Rex" ||
  //     carddiv.className == "Yellow_Rex"
  //   );
  // }

  // function Rap() {
  //   return (
  //     carddiv.className == "Red_Raptor" ||
  //     carddiv.className == "Green_Raptor" ||
  //     carddiv.className == "Blue_Raptor" ||
  //     carddiv.className == "Yellow_Raptor"
  //   );
  // }

  carddiv.addEventListener("click", compareDinosGiveAngel);
  function compareDinosGiveAngel(event) {
    let variableNotFilled = selectedWhite === "" && selectedBlack === "";
    console.log(variableNotFilled);

    if (variableNotFilled == true) {
      console.log(`do this part`);
      console.log(event.currentTarget.parentElement); // whiteBoard
      console.log(event.currentTarget.className); // Blue_megasaurus belonging to the above

      if (event.currentTarget.parentElement === whiteBoard) {
        selectedWhite = event.currentTarget.className;
        selectedWhiteRemoval = event.currentTarget;
      }

      // if (event.currentTarget.parentElement === blackBoard) {
      //   selectedBlack = event.currentTarget.className;
      // }
    } else if (variableNotFilled == false) {
      // console.log(whiteHand);
      // console.log(blackHand);

      // console.log(whiteHand.some(Mega));
      // console.log(blackHand.some(Rex));

      if (event.currentTarget.parentElement === blackBoard) {
        selectedBlack = event.currentTarget.className;
        selectedBlackRemoval = event.currentTarget;
      }

      console.log("Do the filled part next");
      console.log(selectedWhite);
      console.log(selectedBlack);
      console.log(selectedWhiteRemoval);
      console.log(selectedBlackRemoval);

      if (
        (selectedWhite === "Red_Megasaurus" ||
          selectedWhite === "Green_Megasaurus" ||
          selectedWhite === "Blue_Megasaurus" ||
          selectedWhite === "Yellow_Megasaurus") &&
        (selectedBlack === "Red_Rex" ||
          selectedBlack === "Green_Rex" ||
          selectedBlack === "Blue_Rex" ||
          selectedBlack === "Yellow_Rex")
      ) {
        console.log(`first if block run`);
        for (let i = 1; i <= 7; i++) {
          if (document.getElementById("card" + i).innerHTML == "") {
            deck.distributeAngel("card" + i, true);
            break;
          }
        }
        removeClassAndImage();
      }

      // console.log(whiteHand.some(Rex));
      // console.log(blackHand.some(Rap));

      if (
        (selectedWhite === "Red_Rex" ||
          selectedWhite === "Green_Rex" ||
          selectedWhite === "Blue_Rex" ||
          selectedWhite === "Yellow_Rex") &&
        (selectedBlack === "Red_Rap-Pack" ||
          selectedBlack === "Green_Rap-Pack" ||
          selectedBlack === "Blue_Rap-Pack" ||
          selectedBlack === "Yellow_Rap-Pack")
      ) {
        console.log(`second if block run`);
        for (let i = 1; i <= 7; i++) {
          if (document.getElementById("card" + i).innerHTML == "") {
            deck.distributeAngel("card" + i, true);
            break;
          }
        }
        removeClassAndImage();
      }

      // console.log(whiteHand.some(Rap));
      // console.log(blackHand.some(Mega));

      if (
        (selectedWhite === "Red_Rap-Pack" ||
          selectedWhite === "Green_Rap-Pack" ||
          selectedWhite === "Blue_Rap-Pack" ||
          selectedWhite === "Yellow_Rap-Pack") &&
        (selectedBlack === "Red_Megasaurus" ||
          selectedBlack === "Green_Megasaurus" ||
          selectedBlack === "Blue_Megasaurus" ||
          selectedBlack === "Yellow_Megasaurus")
      ) {
        console.log("third if block run");
        for (let i = 1; i <= 7; i++) {
          if (document.getElementById("card" + i).innerHTML == "") {
            deck.distributeAngel("card" + i, true);
            break;
          }
        }
        removeClassAndImage();
      }

      // console.log(whiteHand.some(Mega));
      // console.log(blackHand.some(Rex));

      console.log("3rd loop " + selectedWhite);
      console.log("3rd loop " + selectedBlack);

      if (
        (selectedBlack === "Red_Megasaurus" ||
          selectedBlack === "Green_Megasaurus" ||
          selectedBlack === "Blue_Megasaurus" ||
          selectedBlack === "Yellow_Megasaurus") &&
        (selectedWhite === "Red_Rex" ||
          selectedWhite === "Green_Rex" ||
          selectedWhite === "Blue_Rex" ||
          selectedWhite === "Yellow_Rex")
      ) {
        for (let i = 8; i <= 14; i++) {
          if (document.getElementById("card" + i).innerHTML == "") {
            deck.distributeAngel("card" + i, true);
            break;
          }
        }
        removeClassAndImage();
      }

      // console.log(whiteHand.some(Rex));
      // console.log(blackHand.some(Rap));

      if (
        (selectedBlack === "Red_Rex" ||
          selectedBlack === "Green_Rex" ||
          selectedBlack === "Blue_Rex" ||
          selectedBlack === "Yellow_Rex") &&
        (selectedWhite === "Red_Rap-Pack" ||
          selectedWhite === "Green_Rap-Pack" ||
          selectedWhite === "Blue_Rap-Pack" ||
          selectedWhite === "Yellow_Rap-Pack")
      ) {
        for (let i = 8; i <= 14; i++) {
          if (document.getElementById("card" + i).innerHTML == "") {
            deck.distributeAngel("card" + i, true);
            break;
          }
        }
        removeClassAndImage();
      }

      // console.log(whiteHand.some(Rap));
      // console.log(blackHand.some(Mega));
      if (
        (selectedBlack === "Red_Rap-Pack" ||
          selectedBlack === "Green_Rap-Pack" ||
          selectedBlack === "Blue_Rap-Pack" ||
          selectedBlack === "Yellow_Rap-Pack") &&
        (selectedWhite === "Red_Megasaurus" ||
          selectedWhite === "Green_Megasaurus" ||
          selectedWhite === "Blue_Megasaurus" ||
          selectedWhite === "Yellow_Megasaurus")
      ) {
        for (let i = 8; i <= 14; i++) {
          if (document.getElementById("card" + i).innerHTML == "") {
            deck.distributeAngel("card" + i, true);
            break;
          }
        }
        removeClassAndImage();
      }

      if (
        (selectedWhite === "Red_Gift" ||
          selectedWhite === "Green_Gift" ||
          selectedWhite === "Blue_Gift" ||
          selectedWhite === "Yellow_Gift") &&
        selectedBlack === "Dino_Angel"
      ) {
        for (let i = 1; i <= 7; i++) {
          if (document.getElementById("card" + i).innerHTML == "") {
            deck.distributeAngel("card" + i, true);
            break;
          }
        }
        removeClassAndImage();
      }

      if (
        (selectedBlack === "Red_Gift" ||
          selectedBlack === "Green_Gift" ||
          selectedBlack === "Blue_Gift" ||
          selectedBlack === "Yellow_Gift") &&
        selectedWhite === "Dino_Angel"
      ) {
        for (let i = 8; i <= 14; i++) {
          if (document.getElementById("card" + i).innerHTML == "") {
            deck.distributeAngel("card" + i, true);
            break;
          }
        }
        removeClassAndImage();
      }

      console.log("End of If Else Loop for Give Dino Angel Matching Cards.");

      clearStoredDinos();
    }
  }
}

function clearStoredDinos() {
  selectedWhite = "";
  selectedBlack = "";
}

function removeClassAndImage() {
  selectedWhiteRemoval.innerHTML = "";
  selectedBlackRemoval.innerHTML = "";
  selectedWhiteRemoval.removeAttribute("class");
  selectedBlackRemoval.removeAttribute("class");
}

// else {
//   const message = document.getElementById("playArea").createElement("p");
//   message.innerText = "Cards do not match with each other";
//   document.getElementById("playArea").append(message);
// }

const gameRules = document.getElementById("gameRules");

gameRules.addEventListener("click", displayRules);

function displayRules() {
  alert(
    "Rules of the Game: \n 1. A Deck of 16 cards including 1 Comet card (Total 17 cards) is created at the start of the game. Each player receives a starting hand of 3 cards from the deck and 1 Dino Angel card outside the deck. \n\n 2. If the Comet is drawn by any Player, they lose the game unless they have A Dino Angel Card and play it within 5 seconds. \n\n 3. When Dino Angel card is clicked when the player has the comet, instead of losing the game, the Dino Angel and Comet disappear from hand and the Comet is reshuffled into the deck. \n\n 4. On each player's turn they may take up to one action. \n a) Play a pair of Dino cards (one card from each player, in top down order, click White Player's Board first and then Black Player's Board \n i) Megasaurus beats Rex beats Rap-Pack beats Megasaurus (The Player with the winning Dino out of the pair gets the Dino Angel \n ii) If a player accidentally plays a pair where the opponent has the winning Dino, they have spent the turn action to give the opponent a Dino Angel! \n b) Play a Dino Angel Card to save themself from The Comet. \n c) Clicking a Gift card and an opponent's Dino Angel card as a pair allows a player to take the opponent's Dino Angel. \n\n 5. Players with 6 or more cards in their hand should take an action."
  );
}
