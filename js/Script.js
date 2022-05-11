// JavaScript source code
/**
 * Certhomas Tan, script for final project
 */

//This a varible to see if the main content is loaded
screenloaded = false;

//This function will display the splash screen. Will add the fade in affect and then stagger the fade in of the other items
function displaySplash() {
    setTimeout(fadeInElement, 250, "splash-title");
    setTimeout(fadeInElement, 750, "splash-btn");
    setTimeout(splashButtonClick, 7000);
}

/**
 * This will take in a name of an element id. This will add the fade in class to that element
 * @param {string} name
 */
function fadeInElement(name) {
    document.getElementById(name).classList.add("fadeIn");
}

/**
 *This is the function for clicking the button. This will show the rest of the site content and fade out the splash screen button.
 **/
function splashButtonClick() {
    //will only run if screen has not been shown. 
    if (!screenloaded) {
        screenloaded = true;

        //Show navbar
        document.getElementById("navbar-top").classList.add("navBarFallIn");
        document.getElementById("navbar-top").classList.remove("d-none");

        //fades out splash screen button
        document.getElementById("splash-btn").classList.remove("fadeOut");
        document.getElementById("splash-btn").classList.add("fadeOut");

        //Pushes main content up to indicate to user to scroll down
        document.getElementById("splash-container").style.height = "90vh";
        document.getElementById("main-content-container").classList.remove("d-none");

        //update the quote 
        updateQuote();
    }
}

/**
 * This function will populate a speech bubble with a random quote taken from quotable.io api. If this fails to get a quote due to API not working, 
 * then a sarcastic quote of how api being down is the cause of
 * the error. This will play a sound when the function runs*/
async function updateQuote() {
    //log function to show function ran
    console.log("updateqQuote Has Ran");

    //plays audio
    playSound();

    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        // Update DOM elements
        var string = '"' + data.content + '"'; //puts quotes in quotation marks
        document.getElementById("quote").innerText = string; //display quote in container
        document.getElementById("author").innerText = '~' + data.author; //display author in container
    } else {
        //Update quote container with sarcastic quote
        document.getElementById("quote").innerText = "Remember that failure is an event, not a descriptor for coder of the API";
        document.getElementById("author").innerText = '~' + "Certhomas Tan";
        console.log(data);
    }
}

/**
 * Plays a jingle
 * */
function playSound(){
    var audio = new Audio('img/splash-audio.wav');
    audio.play();
}

window.onload = displaySplash;