//Function for madlib website.
//This could have been achieved cleaner by using an args and then using an if statement to decided which story to use.


/*Function for adventure one, will ask user to put in 2 nouns, 2 verbs, and 2 adjectives.
 * The nouns will be placed in the story and then displayed to user. The div will fade in once story is down.
*/
function AdventureOne() {
    //variables
    var nounOne = prompt("Enter a noun");
    var nounTwo = prompt("Enter another noun");
    var adjectiveOne = prompt("Enter an adjective");
    var adjectiveTwo = prompt("Enter another adjective");
    var verbOne = prompt("Enter a verb");
    var verbTwo = prompt("Enter another verb");

    //Story placed in string with variables.
    var story = `You enter the tavern and you see a half-elf with a ${adjectiveOne} look. They come up to you and asks whether your party were ask to ${verbOne} thru the city. He points the ${nounOne} at your chest. You tell them that you were not doing that. ` +
        `Instead you were running from a ${adjectiveTwo} dragon because your brother stole the dragon's ${nounTwo}. The dragon was infruriated and forced your party to ${verbTwo} as punishment. You sighed, \" we barely escaped.\"`;

    //will check if the div has already been shown. If the div is null, then it will skip assign the div.
    var element = document.getElementById('adventure-hidden');
    if (element != null) { element.id = 'adventure-show'; }

    //This will change the text of the story container and the title in the html.
    document.getElementById('StoryContainer').innerText = story;
    document.getElementById('AdvetureTitle').innerText = "The Strange Elf and Dragon Chase";
}

/*Function for adventure one, will ask user to put in 2 nouns, 2 verbs, and 2 adjectives.
 * The nouns will be placed in the story and then displayed to user. The div will fade in once story is down.
*/
function AdventureTwo() {
    //variables
    var nounOne = prompt("Enter a noun");
    var nounTwo = prompt("Enter another noun");
    var adjectiveOne = prompt("Enter an adjective");
    var adjectiveTwo = prompt("Enter another adjective");
    var verbOne = prompt("Enter a verb");
    var verbTwo = prompt("Enter another verb");

    //Story placed in string with variables.
    var story = `You approach the decrepit town. With weapon in one hand and ${nounOne} in the other, you approach the gate. You see a ${nounTwo} in front of the gate.The ${nounTwo} ask you, \"what purpose do you have here\". ` +
        `You tell them that you are looking to ${verbOne} the ${adjectiveOne} vampire. The ${nounTwo} gets angry with you and calls you a ${adjectiveTwo} adventurer. They pull out their weapon and tells you that they will ${verbTwo} you. You prepare for it.`;

    //will check if the div has already been shown. If the div is null, then it will skip assign the div.
    var element = document.getElementById('adventure-hidden');
    if (element != null) { element.id = 'adventure-show'; }

    //This will change the text of the story container and the title in the html.
    document.getElementById('StoryContainer').innerText = story;
    document.getElementById('AdvetureTitle').innerText = "The Vampire Town and Its Strange Gaurd";
}
