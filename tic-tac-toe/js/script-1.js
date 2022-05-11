// JavaScript source code

//global variables
var playerOneName = ""; 
var playerTwoName = "";
var playerOneScore = 0;
var playerTwoScore = 0;
var whoseTurn = 0; //turn toggle, 0 = player ones trun, 1 = players 2 turn
var gameIsRunning = false; //varaible to determine if game is running

//Function that sets players name, if no player name is foumd. Player will be given default name. Needs a formID to get values
function setPlayersName(formID) {

    //store form in varaible
    var form = document.getElementById(formID);

    //check if player name is entered into text fields. If no name found, player is given generic name
    if (form.elements["playerOneName"].value == "") {
        playerOneName = "Player One";
    }
    else {
        playerOneName = form.elements["playerOneName"].value;
    }
    console.log(playerOneName);

    if (form.elements["playerTwoName"].value == "") {
        playerTwoName = "Player Two";
    }
    else {
        playerTwoName = form.elements["playerTwoName"].value;
    }
    console.log(playerTwoName);

    //header will fade out when finished. 
    document.getElementById('header-container').classList.remove("fadeIn");
    document.getElementById('header-container').classList.add("fadeOut");

    //game will start
    startGame();
}


//Function will accpet a div that is clicked and a value for the points. This is the main game logic.
function playGame(clickedDiv, boxValue) {
    //check if game is running
    if (!gameIsRunning) {
        return;
    }

    //will remove the onclick function to disable trigger
    clickedDiv.attributes[1].nodeValue = "";

    //Game logic, Player turn will be determined by whoseTurn variable.
    //play 1 turn
    if (whoseTurn == 0) {
        clickedDiv.style.backgroundImage = "url('img/x.png')"; //places X in box
        whoseTurn = 1; //changes turn
        playerOneScore += boxValue; //Add score to player once
        document.getElementById('player-turn-display').innerText = playerTwoName + " Turn"; //shows the next players turn in display
        console.log(playerOneName + " has" + playerOneScore); //log for debuging

        //checks win conditions
        if (checkWin(playerOneScore)) {
            console.log("playerOne has Won");
            displayWinner(playerOneName);
        }
    }

    //player 2 turn
    else {
        clickedDiv.style.backgroundImage = "url('img/o.png')"; //places 0 in box
        whoseTurn = 0; //changes turn
        document.getElementById('player-turn-display').innerText = playerOneName + " Turn"; // shows the next players turn in display
        playerTwoScore += boxValue; // add values to player 2 score
        console.log(playerTwoName + " has" + playerTwoScore); // log for debug

        //check win conditions
        if (checkWin(playerTwoScore)) {
            console.log("playerTwo has Won");
            displayWinner(playerTwoName);
        }
    }
    return;
}

//checks for win conditions, takes a value and see if its a winning combination
function checkWin(value) {
    boxes = document.getElementsByClassName('box');
    if ((value & 7) == 7) {
        highlightWin(boxes[0], boxes[1], boxes[2]);
        return true;
    }
    else if ((value & 56) == 56) {
        highlightWin(boxes[3], boxes[4], boxes[5]);
        return true;
    }
    else if ((value & 73) == 73) {
        highlightWin(boxes[0], boxes[3], boxes[6]);
        return true;
    }
    else if ((value & 84) == 84) {
        highlightWin(boxes[2], boxes[4], boxes[6]);
        return true;
    }
    else if ((value & 146) == 146) {
        highlightWin(boxes[1], boxes[4], boxes[7]);
        return true;
    }
    else if ((value & 273) == 273) {
        highlightWin(boxes[0], boxes[4], boxes[8]);
        return true;
    }
    else if ((value & 292) == 292) {
        highlightWin(boxes[2], boxes[5], boxes[8]);
        return true;
    }
    else if ((value & 448) == 448) {
        highlightWin(boxes[6], boxes[7], boxes[8]);
        return true;
    }
    else if ((playerOneScore + playerTwoScore) == 511) {
        displayTie();
    }
    else { return false;}
    
}

//highlights boxes that resulted in a win, Takes 3 boxes(div elements) to highlight.
function highlightWin(boxOne, boxTwo, boxThree) {
    boxOne.style.backgroundColor = 'yellow';
    boxTwo.style.backgroundColor = 'yellow';
    boxThree.style.backgroundColor = 'yellow';
}

//This function will initialize the game, All values are reset and all the boxes in the game board are also reset. 
function startGame() {
    //reset score
    playerOneScore = 0; 
    playerTwoScore = 0;
    //reset turn
    whoseTurn = 0;

    //displays the game baord
    document.getElementById('player-turn-display').innerText = playerOneName + " Turn";
    document.getElementById('game-container').classList.add('fadeIn'); 
    document.getElementById('main-content').style.backgroundImage = "url('img/particle.gif')";

    //resets the boxes in the game board
    var innerDiv = "";
    for (i = 0; i < 9; i++) {
        var value = 2 ** i;
        innerDiv += '<div class="box" onclick = "playGame(this,' + value + ');" ></div > ';
    }
    document.getElementById('game-board').innerHTML = innerDiv;

    //sets true for game is running. 
    gameIsRunning = true;
}

//will display the winner, will take a name and display them as winner in the results container
function displayWinner(name) {
    //create win text
    document.getElementById('results').innerText = name + " has Won TIC TAC TOE";
    //displays the container and fades it in
    document.getElementById('result-container').classList.remove("fadeOut");
    document.getElementById('result-container').classList.add('fadeIn');
    //plays a win sound
    var audio = new Audio('audio/win.wav');
    audio.play();
    //sets the game is running to false
    gameIsRunning = false;
}

//display a tie in the results container
function displayTie() {
    //create text for tie
    document.getElementById('results').innerText = "The Game Ends in A Tie";
    //displays tier in the results container
    document.getElementById('result-container').classList.remove("fadeOut");
    document.getElementById('result-container').classList.add('fadeIn');
    //plays a lose/tie sound
    var audio = new Audio('audio/lose.wav');
    audio.play();
    //set the game is running to false
    gameIsRunning = false;
}

//function to redisplay the header container if replay is selected on the results container
function replayGame() {
    //hides results caontainer
    document.getElementById('result-container').classList.add('fadeOut');
    document.getElementById('result-container').classList.remove('fadeIn');
    //displays title and player name container
    startGame();
    
}