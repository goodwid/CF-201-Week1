var questionSet = [
  {
    "question": "Was I born in Oregon?",
    "answer": "N",
    "correctFollowup": "Correct, I was not born on in Oregon.",
    "incorrectFollowup": "Actually, I was born in California."
  },
  {
    "question": "Is my favorite food pizza?",
    "answer": "N",
    "correctFollowup": "Correct, I'm more fond of hamburgers!",
    "incorrectFollowup": "Sorry, I love pizza but gimme a hamburger any day!"
  },
  {
    "question": "Have I been to Brazil?",
    "answer": "Y",
    "correctFollowup": "You're right, I visited Brazil in 2006. It was beautiful.",
    "incorrectFollowup": "No, I did actually go there a while ago.  I have pictures to prove it!"
  },
  {
    "question": "Have I ever worked in a restaurant?",
    "answer": "Y",
    "correctFollowup": "Yes, I worked in a Burger King right after college.",
    "incorrectFollowup": "I did actually work in a Burger King, and liked it!"
  },
  {
    "question": "Have I driven across the country?",
    "answer": "Y",
    "correctFollowup": "Yes, from Pennsylvania to Oregon.",
    "incorrectFollowup": "Sure enough, I drove 2200 miles back to Oregon!"
  }
]

var correctResponses = 0;

function askQuestion (questionAsked, correctAnswer, correctFollowup, incorrectFollowup) { // Expecting Y or N passed as correctAnswer
    var validResponse = false;

    console.log ('Asking '+questionAsked+', Correct answer is '+correctAnswer);
    while (!validResponse) {
      var answer = prompt(questionAsked);
      console.log ('Response: '+answer);

      if (answer == null) {
        validResponse = true;
        console.log ('Cancel selected, breaking out');
        break;
      } else if ((/^[Nn,Oo]{0,2}$/.test(answer) || /^[Yy,Ee,Ss]{0,3}$/.test(answer)) && answer != '') {
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
var rightNumber = 42;
var numberGuessed = false;
var validResponse;
console.log ('Asking guessing game question');
alert ('OK, time for a guessing game!');

while (!numberGuessed) {
  validResponse = false;
  while (!validResponse) {
    answer = prompt ('How old am I?');
    console.log ('Response: '+ answer);
    if (answer == null) {
      console.log ('cancelling out of validResponse while loop');
      break;
    } else if ((answer < 1 || answer > 100) || answer == '') {
      console.log ('Response not valid, re-asking');
      alert ('Sorry, that is not a valid response, please make sure your number is between 1 and 100');
    } else {
        console.log ('Response valid.');
        validResponse = true;
    }
  } // while validResponse
  if (answer == null ) {
    console.log ('cancelling out of numberGuessed while loop');
    break;
  } else if (answer == rightNumber) {
    console.log ('Correct answer guessed');
    alert ('You nailed it! ' +rightNumber +' is right!');
    correctResponses++;
    numberGuessed = true;
    break;
  } else if (answer < rightNumber) {
    console.log ('low.');
    alert ('Sorry, too low.  Guess again!');
  } else if (answer > rightNumber) {
    console.log ('high.');
    alert ('Sorry, too high.  Guess again!');
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
