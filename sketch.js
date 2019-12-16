//sets up the canvas
let rectWidth;
//sets up the asnwer array of the letters that spell out digital
var answerArray = ["d", "i", "g", "i", "t", "a", "l"];
//helps set up the scoring
var haswon = false
var correctX = 10
var score =0
function setup() {
	createCanvas(720, 400)
	noStroke();
	background(230);
	rectWidth = width / 4;

}
// sets up the main draw function that everything works through
function draw() {
if (haswon == false) {
//asks the user to put input
  var guess = prompt("Guess a letter");
//uses the scoring functions
		if (answerArray.includes(guess)) {
      text(guess, correctX , 30);
      correctX += 10
      score++
      if (score == 7) {haswon = true}
        if (score =7)  {prompt("Good Job! The asnwer is " + answerArray)}
  	}
}
//from p5 examples i used this to setup the function that will accept user input by pressing keys
function keyPressed() {
  let keyIndex = -1;
  if (key >= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }

}
}
		//README This game is a hangman game that asks the user to guess the letters to the word "digital".
    //I liked the thought of creating a hangman game and with the project using p5 i needed user input and this was a great way of doing so.
    //Trying to make this was difficult I had to look up some ways to begin. I had a great deal of help from my instructor who helped me get rid of errors and help all my functions actually work.

		// alert(answerArray.join(""));
		 //alert("Good Job! The asnwer is " + answerArray);
