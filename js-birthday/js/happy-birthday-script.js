// JavaScript source code
//Varaible
var username = prompt("Enter your name:");  
var age = prompt("Enter your age:");
var month = prompt("What month were you born in:");
var message = ""; //string builder, this will build the prompt

//add base sentence to message
message += "Hello " + username + "! You are " + age + " Years old, and you were born in " + month + ". ";

//add prompt to message depending on age entered.
if (age < 50) {
    message += "You're still young! ";
}
else {
    message += "Dang! You're Old. ";
}

/*this switch case will see if the month the user put in matches any of the months. Spelling needs to be correct, but 
 * var is not case sensitive. If month equals another month, then the gem stone prompt will be added to the message. If 
 * not, the message will not be included.
 */
switch (month.toLowerCase()) {
    case "january":
        message += "Your birth stone is ";
        message += "garnet";
        break;
    case "february":
        message += "Your birth stone is ";
        message += "garnet. ";
        break;
    case "march":
        message += "Your birth stone is ";
        message += "amethyst. ";
        break;
    case "april":
        message += "Your birth stone is ";
        message += "aquamarine. ";
        break;
    case "may":
        message += "Your birth stone is ";
        message += "diamond. ";
        break;
    case "june":
        message += "Your birth stone is ";
        message += "pearl. ";
        break;
    case "july":
        message += "Your birth stone is ";
        message += "ruby. ";
        break;
    case "august":
        message += "Your birth stone is ";
        message += "peridot. ";
        break;
    case "september":
        message += "Your birth stone is ";
        message += "sapphire. ";
        break;
    case "october":
        message += "Your birth stone is ";
        message += "opal. ";
        break;
    case "november":
        message += "Your birth stone is ";
        message += "topaz. ";
        break;
    case "december":
        message += "Your birth stone is ";
        message += "tanzanite. ";
        break;
    default:
}

/*this switch case will see if the month the user put in matches any of the months. Spelling needs to be correct, but
 * var is not case sensitive. If month equals another month, then the season prompt will be added to the message. If
 * not, the message will not be included.
 */
switch (month.toLowerCase()) {
    case "january":
        message += "You were born in the ";
        message += "winter.";
        break;
    case "february":
        message += "You were born in the ";
        message += "winter.";
        break;
    case "march":
        message += "You were born in the ";
        message += "spring.";
        break;
    case "april":
        message += "You were born in the ";
        message += "spring.";
        break;
    case "may":
        message += "You were born in the ";
        message += "spring.";
        break;
    case "june":
        message += "You were born in the ";
        message += "summer.";
        break;
    case "july":
        message += "You were born in the ";
        message += "summer.";
        break;
    case "august":
        message += "You were born in the ";
        message += "summer.";
        break;
    case "september":
        message += "You were born in the ";
        message += "fall.";
        break;
    case "october":
        message += "You were born in the ";
        message += "fall.";
        break;
    case "november":
        message += "You were born in the ";
        message += "fall.";
        break;
    case "december":
        message += "You were born in the ";
        message += "winter.";
        break;
    default:
}

//this will display the message to the user.
alert(message);



