// JavaScript source code
var numbers;

//funtion will create a new array according to size args. Will set to global variable. 
function setArraySize(size) {
    numbers = new Array(size);
}

//Will fill the array with random numbers from 1-99
function fillArray(numArrary) {
    for (i = 0; i < numArrary.length; i++) {
        numbers[i] = Math.floor(Math.random() * 99) + 1;
    }
}

//This will display the numbers in the html, will build the string and then present it in the lotto ticket
function displayNumbers(){
    var string = "";
    for (i = 0; i < numbers.length; i++) {


        string += String(numbers[i]).padStart(2,0);

        if (i != numbers.length - 1) {
            string += '-'
        }
    }
    document.getElementById("ticket-numbers").innerText = string;
}

//This is the function that is called when the submit button on the page is pressed.
//If the function is not passed a size between 1-8, an error will prompt the user and the 
//function will terminate.
function getRandomNumberArray(size) {
    if (size < 1 || size > 8 || size =="") {
        errorMessage();
        return;
    }
    size = Number(size);
    console.log(size);
    setArraySize(size);
    fillArray(numbers);
    displayTicket();
    displayNumbers();
    playJingle();
}

//this plays the cash register jingle
function playJingle() {
    var audio = new Audio('audio/cash-sound.mp3');
    audio.play();
}

//this will replay the fade in anination of the ticket
function displayTicket() {
    var container = document.getElementById("ticket");
    if (container != null) {
        container.id = "ticket-hidden";
    }
    setTimeout(function () { document.getElementById("ticket-hidden").id = "ticket";}, 10)
}

//this will prompt the user that the number they entered is not correct. 
function errorMessage(){
    alert("Please enter a value between 1-8");
}
