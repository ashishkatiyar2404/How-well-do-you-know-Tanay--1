var readlineSync = require('readline-sync');
var userName = readlineSync.question('Tell me your name ');

console.log("Welcome "+userName+ " let's see How well do you know Tanay");

var score = 0;


//function
function checking(question_First, answer) {
  var userAnswer = readlineSync.question(question_First);
  if(userAnswer=== answer) {
    console.log('🤩 You are right..\n'+'Your current score: '+(++score)+'\n');
  }
  else{
    console.log('🥺 You are wrong\n'+'Your current score: '+(--score)+'\n')
  }
}


// objects
var questions = [{
  question : '1. Where did Tanay Work?\na. Microsoft\nb.Amazon\nc.Flipkart\nd.Google\n',
  answer : 'a'},
  {
    question : '2. Where did Tanay live?\na.Hydrebad\nb.Bhopal\nc.Delhi\nd.Banglore\n',
    answer : 'd'
  },
  {
    question : '3. Tanay Fav. super hero would be?\na.Superman\nb.Batman\nc.Ironman\nd.Shaktiman\n',
    answer : 'c'
  },
  {
    question : '4. Tanay Work in MS as a?\na.Software Engineer\nb.Cyber Security Engineer\nc.Manager\nd.HR\n',
    answer : 'a'
  },
  {
    question : '5. Why is Tanay bringing this course?\na.To make programming fun for you again.Teach you through a project-based live course, where you will create your own apps and realize the joy of creation.\nb.I dont know\nc.He want to change the way of programming\nd.Because he like Teaching\n',
    answer : 'a'
  }
  ]

  //loop
  for(var i = 0; i< questions.length; i++) {
    var currentQuestion = questions[i];
    checking(currentQuestion.question, currentQuestion.answer);
  }

//score
if(score === 5) {
  console.log(userName+' Yaah Dude 🥰 You Score Hightest🔥\n and Score is : '+ score+'\nNow I(Tanay) will sing a Shaktimaan Shaktimaan Theme For You😎');
}
else if (score === 4) {
  console.log(userName+' You Score Good! Nice Dude 🙈');
}
else if(score ===0 || score === 1) {
  console.log(userName+' You do not know Tanay😒 Go and Search on Google. Google also Know about Him.')
} 
else{
  console.log(userName+' You Score: '+ score+'😄');
}