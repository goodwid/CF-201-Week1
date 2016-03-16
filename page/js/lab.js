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
    var noTest = new RegExp ('[Nn,Oo]');
    var yesTest = new RexExp ('[Yy,Ee,Ss]');
    var validResponse = false;

    console.log ('Asking '+questionAsked+', Correct answer is '+correctAnswer);
    while (!validResponse) {
      var answer = prompt(questionAsked);
      console.log ('Response: '+answer);

      if (noTest.test(answer) && yesTest.test(answer)) {
        validResponse = true
      } else {
        alert ('Sorry, that is not a valid response, please answer Yes or No.');
        console.log ('Respons not valid, re-asking');
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

for (var i=0;i<questionSet.length;i++) {
  if (askQuestion (questionSet[i].question,questionSet[i].answer, questionSet[i].correctFollowup, questionSet[i].incorrectFollowup)) {
    correctResponses++;
  }
  console.log ('Asking question '+ i);
}

console.log ('Number of questions answer correctly: ' + correctResponses);
if (correctResponses < questionSet.length/2) {
  alert ('Sorry, you only got ' + correctResponses + ' answers correct.');
} else {
  alert ('Congratulations, you got ' + correctResponses + ' answers correct!');
}
