// 201
// 3-tue-lecture code demo
var questionSet = ([
  {
    "question": "Was I born on the moon?",
    "answer": "Y",
    "correctFollowup": "Nice, I was born on the moon",
    "incorrectFollowup": "No, I was actually born on the moon"
  },
  {
    "question": "Am I a Taurus?",
    "answer": "N",
    "correctFollowup": "Correct, I'm actually a Saggitarius",
    "incorrectFollowup": "No, I'm not a Taurus at all.. Do I act like one?"
  },
  {
    "question": "Was I born on the moon",
    "answer": "Y",
    "correctFollowup": "Nice, I was born on the moon",
    "incorrectFollowup": "No, I was actually born on the moon"
  }
])

var correctResponses = 0;
function askQuestion (questionAsked, correctAnswer, correctFollowup, incorrectFollowup) { // Expecting Y or N passed as correctAnswer
  console.log ('Asking '+questionAsked+', Correct answer is '+correctAnswer);
  var answer = prompt(questionAsked);
  console.log ('Response: '+answer);
  modAnswer = answer[0].toUpperCase();
  console.log (modAnswer);

  if (modAnswer === correctAnswer) {
    alert (correctFollowup);
    return true;
  } else  {
    alert (incorrectFollowup);
    return false;
  }
}

// var userName = prompt('What is your name?');
// console.log('The user said their name is ' + userName);
//
// alert('Hi, ' + userName + '!  Prepare for some questions about me. Please click "ok", then answer Y or N to the next question.');

for (var i=0;i<questionSet.length;i++) {
  if (askQuestion (questionSet[i].question,questionSet[i].answer, questionSet[i].correctFollowup, questionSet[i].incorrectFollowup)) {
    correctResponses++;
  }
}

console.log (correctResponses);

// var userResponse = prompt('Was, I born on the moon?');
// console.log('userResponse: ' + userResponse);
//
// if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {
//   alert('Nope, I was actualy born on the moon. I\'m a moonian computer language.');
// } else if (userResponse === 'Y') { // TODO: Make this more robust!
//   alert('Nice, I was born on the moon');
// } else {
//   alert('Ooops!, you should have given a Y or N, so you lose this round.');
// }
