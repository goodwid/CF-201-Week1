/*
  I made a nice function for questions but it doesn't handle odd user input
  very well at all.

*/
var questionSet = [
  {
    "question": "Was I born in Oregon?",
    "answer": "N",
    "correctFollowup": "Correct, I was not born on in Oregon.",
    "incorrectFollowup": "Actually, I was born in California."
  },
  {
    "question": "Am I a Taurus?",
    "answer": "N",
    "correctFollowup": "Correct, I'm actually a Saggitarius",
    "incorrectFollowup": "No, I'm not a Taurus at all.. Do I act like one?"
  },
  {
    "question": "Have I been to England?",
    "answer": "N",
    "correctFollowup": "You're right, I've never been to England.",
    "incorrectFollowup": "No, sorry, I haven't been there.  Someday..."
  }
]

var correctResponses = 0;

function askQuestion (questionAsked, correctAnswer, correctFollowup, incorrectFollowup) { // Expecting Y or N passed as correctAnswer
    var validResponse = false;

    console.log ('Asking '+questionAsked+', Correct answer is '+correctAnswer);
    while (!validResponse) {
      var answer = prompt(questionAsked);
      console.log ('Response: '+answer);

      if (/^[Nn,Oo]{0,2}$/.test(answer) || /^[Yy,Ee,Ss]{0,3}$/.test(answer)) {
        console.log ('Response valid.');
        validResponse = true;
      } else {
        console.log ('Response not valid, re-asking');
        alert ('Sorry, that is not a valid response, please answer Yes or No.');
      }
    }
    var modAnswer = answer[0].toUpperCase();

    if (modAnswer === correctAnswer) {
      alert (correctFollowup);
      console.log ('User answered correctly');
      return true;
    } else  {
      alert (incorrectFollowup);
      console.log ('User answered incorrectly');
      return false;
    }

}

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);

alert('Hi, ' + userName + '!  Prepare for some questions about me. Please click "ok", then answer Y or N to the next question.');

// Asking all the Y-N questions..

for (var i=0;i<questionSet.length;i++) {
  if (askQuestion (questionSet[i].question,questionSet[i].answer, questionSet[i].correctFollowup, questionSet[i].incorrectFollowup)) {
    correctResponses++;
  }
  console.log ('Asking question '+ i);
}

// Asking the high-low question
var rightNumber = 86;
var numberGuessed = false;
var validResponse = false;
console.log ('Asking guessing game question');
alert ('OK, time for a guessing game!');
while (!numberGuessed) {
  answer = prompt ('Pick a number between 1 and 100');
  console.log ('Response: '+ answer);
  while (validResponse) {
    if (answer < 1 || answer > 100) {
      console.log ('Response valid.');
      validResponse = true;
    } else {
        console.log ('Response not valid, re-asking');
        alert ('Sorry, that is not a valid response, please pick a number between 1 and 100');
    }
  } // while validResponse
  if (answer == rightNumber) {
    console.log ('Correct answer guessed');
    alert ('You nailed it! ' +rightNumber +' is right!');
    correctResponses++;
    numberGuessed = true;
  } else if ((answer == rightNumber-1) || (answer == rightNumber+1)) {
    alert ('Close enough, it was '+rightNumber +'.');
    correctResponses++;
    numberGuessed = true;
  } else {
    alert ('Sorry, that is not correct.  It was ' + rightNumber + '.');
  }
} // while !numberguessed


console.log ('Number of questions answer correctly: ' + correctResponses);
if (correctResponses === 0) {
    alert ('Sorry, you got no answers correct.');
} else if (correctResponses < questionSet.length/2) {
  alert ('Sorry, you only got ' + correctResponses + ' answers correct.');
} else {
  alert ('Congratulations, you got ' + correctResponses + ' answers correct!');
}
