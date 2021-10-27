// js is going to have to reference points in the html 
// create variables for all html elements 
// create event listeners for each of the boxes and a callback function that performs when clicked 
// need a way to display the winner 
// function to keep track of which cards have been already correctly guessed, function to revert cards to original state when incorrectly guessed, function to end the game when user has found all matches or guesses limit reached 
let cells = document.querySelectorAll('.cell')
var counter = 0;
var img1 = null;
var img2 = null;
var cardCounter = 0;
var isPlayerOnesTurn = true;
console.log(cells)
cells.forEach(cell => {
   cell.addEventListener("click", function(e) {

        console.log(e.target.getAttribute('src'));
        e.target.style.filter = "brightness(100%)";
        counter++;
        console.log("This is the counter: " + counter);
        if (counter == 1){
            img1 = e.target;
        }
        if(counter == 2){
            console.log("reaching")
            img2 = e.target
            if(img1.getAttribute('src') == img2.getAttribute('src')){
                console.log("congrats");
                counter = 0;
                cardCounter++;
                console.log(cardCounter);
            }
            else {
                setTimeout(
                    function(){
                        img1.style = "brightness(0%)";
                        img2.style = "brightness(0%)";
                    },
                    1000
                )
                counter = 0;
                isPlayerOnesTurn = !isPlayerOnesTurn;
            }
        }
        displayPlayerTurn();
        checkGameStatus();
        console.log(isPlayerOnesTurn);
      });
})

function checkGameStatus() {
    if(cardCounter == 8){
        alert("Game Over!");
    }
}

function displayPlayerTurn(){
    if(isPlayerOnesTurn){
        document.getElementById("playerTurn").innerHTML = "Player 1's turn";
    }
    else{
        document.getElementById("playerTurn").innerHTML = "Player 2's turn";
    }
}
// fake variables 
// let myImages = []
// document.querySelector(".game").innerHTML = "You won";
// let cell1 = document.getElementbyId("cell1")

// let cell2 = document.getElementbyId("cell2")

// let cell3 = document.getElementbyId("cell3")

// let cell4 = document.getElementbyId("cell4")

// let cell5 = document.getElementbyId("cell5")

// let cell6 = document.getElementbyId("cell6")

// let cell7 = document.getElementbyId("cell7")

// let cell8 = document.getElementbyId("cell8")

// let cell9 = document.getElementbyId("cell9")

// let cell10 = document.getElementbyId("cell10")

// let cell11 = document.getElementbyId("cell11")

// let cell12 = document.getElementbyId("cell12")

// let cell13 = document.getElementbyId("cell13")

// let cell14 = document.getElementbyId("cell14")

// let cell15 = document.getElementbyId("cell15")

// let cell16 = document.getElementbyId("cell16")


function turn(img){
    console.log("turn");
    console.log(document.getElementById(img));
    if (!document.getElementById(img).src) {
        if (isPlayerOnesTurn) {
            document.getElementById(img).src = 
            isPlayerOnesTurn = false; 
            document.getElementById("playerTurn").innerHTML = "Player 2's turn";
    
        } else {
            document.getElementById(img).src = 
            isPlayerOnesTurn = true;
            document.getElementById("playerTurn").innerHTML = "Player 1's turn";
        }
    }
}
