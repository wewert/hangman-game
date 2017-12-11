
var words = ["proton", "electron", "neutron"];
var userInput = "";
var letter= [];
var slots = 0;
var correctReplace = [];
var wrongLetters = [];
var accessCounter = 0;
var deniedCounter = 0;
var guessesLeft = 10;

	function loadProgram() {
	randomWord = words[Math.floor(Math.random() * words.length)];
	letter = randomWord.split("");
	slots = letter.length; // create in console
  console.log(randomWord);
  console.log(letter);
}

	remainingTries = 10;
	wrongLetters = [];
	blanksAndSuccesses = [];

	for (var i=0; i<slots; i++) {
		correctReplace.push("_");
	}

	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("accessCounter").innerHTML = accessCounter;
	document.getElementById("deniedCounter").innerHTML = deniedCounter;

	function checkletters(letter) {

	var isletterInWord = false;

	for (var i=0; i<numBlanks; i++) {
		if(userInput[i] == lettter) {
			isletterInWord = true;
			alert("Letter found");
		}
	}

	if(isletterInWord) {
		for (var i = 0; i<numBlanks; i++) {
			if(userInput[i] == letter); {
				blanksAndSuccesses[i] = letter;
			}
		}
		wrongLetters.push(letter);
	}
}

	function roundComplete(){
		console.log("Access Counter: "+ accessCounter + " | Access Denied Counter: " + deniedCounter + " | Remaining Input Count " + remainingTries)

	if (letter.toString() == blanksAndSuccesses.toString()) {
		accessCounter++;
		alert("You Won");

	document.getElementById("accessCounter").innerHTML =
  accessCounter;

	loadProgram();
		}

	else if (remainingTries == 0) {
		deniedCounter++;
		alert("You Lost!");

		document.getElementById("deniedCounter").innerHTML = deniedCounter;
	}
}

	loadProgram();

document.onkeyup = function(event){
	var userText =  String.fromCharCode(event.keyCode).toLowerCase();
}
