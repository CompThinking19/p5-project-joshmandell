let rectWidth;
var answerArray = ["d", "i", "g", "i", "t", "a", "l"];
var haswon = false
var correctX = 10
var score =0
function setup() {
	createCanvas(720, 400)
	noStroke();
	background(230);
	rectWidth = width / 4;
	// put setup code here
}

function draw() {
if (haswon == false) {

  var guess = prompt("Guess a letter");

		if (answerArray.includes(guess)) {
      text(guess, correctX , 30);
      correctX += 10
      score++
      if (score == 7) {haswon = true}
        if (score =7)  {prompt("Good Job! The asnwer is " + answerArray)}
  	}
}
		function keyPressed() {
			let keyIndex = -1;
			if (key >= 'z') {
				keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
			}
			if (keyIndex === -1) {
				for (var i = 0; i < word.length; i++) {
					answerArray[i] = "_";
				}
				var remainingLetters = word.length;
				while (remainingLetters > 0) {
					alert(answerArray.join(" "));
				}
				if (guess === null) {} else if (guess.length !== 1) {
					alert("please enter a single letter.");
				} else {
					for (var j = 0; j < word.length; j++) {
						if (word[j] === guess) {
							answerArray[j] = guess;
							remainingLetters--;
						}
					}
				}
			}
		}
  }

		// alert(answerArray.join(""));
		 //alert("Good Job! The asnwer is " + answerArray);
     //var userword = "" create array then check if letter user inputs is in array  if it is then delete from array  once array is empty then win
