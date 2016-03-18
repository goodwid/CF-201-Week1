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
var statesVisited = ["pennsylvania", "ohio", "indiana", "illinois", "iowa", "nebraska", "wyoming", "utah", "idaho", "oregon"];

function askStringQuestion (questionAsked, correctAnswer, correctFollowup, incorrectFollowup) { // Expecting Y or N passed as correctAnswer
    var validResponse = false;
    output += '<h2>' + questionAsked + '</h2>';
    document.getElementById('results').innerHTML = output;

    console.log ('Asking '+questionAsked+', Correct answer is '+correctAnswer);
    while (!validResponse) {
      var answer = prompt(questionAsked);
      console.log ('Response: '+answer);

      if (answer == null) {
        validResponse = true;
        console.log ('Cancel selected, breaking out');
        break;
      } else if ((/^[Nn,Oo]{0,2}$/.test(answer) || /^[Yy,Ee,Ss]{0,3}$/.test(answer)) && answer != '') {
        console.log ('Response valid.,');
        validResponse = true;
      } else {
        console.log ('Response not valid, re-asking');
        alert ('Sorry, that is not a valid response, please answer Yes or No.');
      }
    }
    var modAnswer = answer[0].toUpperCase();

    if (modAnswer === correctAnswer) {
      output += '<p>' + correctFollowup + '</p>';
      document.getElementById('results').innerHTML = output;
      console.log ('User answered correctly');
      return true;
    } else  {
      output += '<p>' + incorrectFollowup + '</p>';
      document.getElementById('results').innerHTML = output;
      console.log ('User answered incorrectly');
      return false;
    }

}

function askNumberQuestion(questionAsked, rightNumber, lowerRange, upperRange) {
  var numberGuessed = false;
  var validResponse;
  output += '<h2>' + questionAsked + '</h2>';
  document.getElementById('results').innerHTML = output;
  while (!numberGuessed) {
    validResponse = false;
    while (!validResponse) {
      answer = prompt (questionAsked);
      console.log ('Response: '+ answer);
      if (answer == null) {
        console.log ('cancelling out of validResponse while loop');
        break;
      } else if ((answer < lowerRange || answer > upperRange) || answer === '' || isNaN(answer)) {
        console.log ('Response not valid, re-asking');
        alert ('Sorry, that is not a valid response, please make sure your number is between ' + lowerRange + ' and ' + upperRange + '.');
      } else {
          console.log ('Response valid.');
          validResponse = true;
      }
    } // while validResponse
    if (answer == null) {
      console.log ('cancelling out of numberGuessed while loop');
      break;
    } else if (answer == rightNumber) {
      console.log ('Correct answer guessed');
      output += '<p>You nailed it! ' +rightNumber +' is right!</p>';
      document.getElementById('results').innerHTML = output;
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
}

// Multiple answer guessing game
function askArrayQuestion(questionAsked, arr) {
  console.log ('Asking guessing game question');

  var arrItemsFound = 0;
  output += '<h2>' + questionAsked + '</h2>';
  document.getElementById('results').innerHTML = output;
  var arrAnswer = prompt(questionAsked + ' (Guess as many as you like, separated by spaces.)').split(" ");

  for (var s=0;s<arrAnswer.length;s++) {
      if (arr.indexOf(arrAnswer[s].toLowerCase()) >= 0) {
          arrItemsFound++;
      }
  }
  output += '<p>Congratulations, you found ' + arrItemsFound + ' out of ' + arr.length + '!</p>';
  document.getElementById('results').innerHTML = output;
}

// Notify the user of their score.
function summarize(num, userName) {
  console.log ('Number of questions answer correctly: ' + num);
  if (num === 0) {
      output = '<h2 id="summary">Sorry, ' + userName + ', you got no answers correct.</h2>' + output;
  } else if (num < questionSet.length/2) {
    output = '<h2 id="summary">Sorry, ' + userName + ', you only got ' + num + ' answers correct.</h2>' + output;
  } else {
    output = '<h2 id="summary">Congratulations, ' + userName + ', you got ' + num + ' answers correct!</h2>' + output;
  }
  document.getElementById('results').innerHTML = output;
}

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);

alert('Hi, ' + userName + '!  Prepare for some questions about me. Please click "ok", then answer Y or N to the next question.');

var correctResponses = 0;
var output = '';

// Asking all the Y-N questions..
for (var i=0;i<questionSet.length;i++) {
  if (askStringQuestion (questionSet[i].question,questionSet[i].answer, questionSet[i].correctFollowup, questionSet[i].incorrectFollowup)) {
    correctResponses++;
  }
  console.log ('Asking question '+ i);
}

// Asking the high-low question
askNumberQuestion('How old am I?', 42, 1, 100);

output = '<h2 id="crossCountry">In 2006 I drove across the country from Pennsylvania to Oregon.</h2>' + output;
document.getElementById('results').innerHTML = output;
askArrayQuestion('How many states did I visit?', statesVisited);

summarize(correctResponses, userName);
