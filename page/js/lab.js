// 201
// 3-tue-lecture code demo

var correctResponses = 0;
function askQuestion (question, correctAnswer, correctFollowup, incorrectFollowup, ) { // Expecting Y or N passed as correctAnswer
  console.log ('Asking '+question+', Correct answer is '+correctAnswer);
  var answer = prompt(question);
  console.log ('Response: '+answer);
  modAnswer = answer[0].toUpperCase();
  console.log (modAnswer);

  if (modAnswer === correctAnswer) {
    return true;
  } else  {
    return false;
  }
}

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);

alert('Hi, ' + userName + '!  Prepare for some questions about me. Please click "ok", then answer Y or N to the next question.');

console.log(askQuestion ('Was I born on the moon','Y', ""));


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
