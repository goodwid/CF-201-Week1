
var resp1, resp2, resp3, resp4, resp5, resp6;

var query1 = "Hi, how are you?";
var query2 = "What did you have for breakfast?";
var query3 = "Did you have tea or coffee this morning?";
var query4 = "Where are you going for lunch today?";
var query5 = "Do you have a cat or a dog?";

resp1 = prompt (query1);
console.log ('Asking:' + query1 + ', response: ' + resp1);
resp2 = prompt (query2);
console.log ('Asking:' + query1 + ', response: ' + resp2);
resp3 = prompt (query3);
console.log ('Asking:' + query3 + ', response: ' + resp3);
resp4 = prompt (query4);
console.log ('Asking:' + query4 + ', response: ' + resp4);
resp5 = prompt (query5);
console.log ('Asking:' + query5 + ', response: ' + resp5);
var query6 = "What is your " + resp5 +  "'s name?";
resp6 = prompt (query6);
console.log ('Asking:' + query6 + ', response: ' + resp6);

var alertText = '';

alertText += 'Excellent, I am ' + resp1 + ' as well.  ';
alertText += 'I did not have ' + resp2 + ', I had a bagel.  I like bagels better than '+ resp2 +'s ';
alertText += 'and I prefer milk to ' + resp3 + '.  ';
alertText += 'Instead of '+ resp4 +", I'm going to Chipotle.  Yum!  ";
alertText += 'I like ' + resp5 +'s but I have a bird.  ';
alertText += 'I am sure ' + resp6 + " is a fine name in some cultures but I don't like it.  ";

alert (alertText);
document.getElementById('entry').innerHTML= alertText;
