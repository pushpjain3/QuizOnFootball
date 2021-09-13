var readLineSync = require("readline-sync");
const chalk = require('chalk');
var score = 0;

const questionAnswerSet = [
  {
    question: "How many players are there in a Football team? ",

    answer: "11"
  },
  {
    question: "Best football player is? ",

    answer: "Messi"
  },
  {
    question: "Who won previous FIFA world cup? ",

    answer: "France"
  }
  {
    question: "Latest club of Leonel Messi?(intitals only) ",

    answer: "PSG"
  }
  {
    question: "Previous club of Cristiano Ronaldo? ",

    answer: "juventus"
  }
]
var highScores = [
  {
    name: "Anant",
    score: 5
  },
  {
    name: "Daxu",
    score: 3
  },
  {
    name: "Vaibhu",
    score: 2
  }
]

const play = (username) => {
  for(i = 0 ; i<3; i++){
    var userAnswer = readLineSync.question(chalk.bold("Q"+(i+1)+". "+ chalk.underline(questionAnswerSet[i].question))+"\n\t");
    if(userAnswer.toUpperCase() === questionAnswerSet[i].answer.toUpperCase()){
      console.log(chalk.green("\tYou are right!"));
      score++;
      console.log("\t"+username + "\'s Score is: " + chalk.bold.underline(score));
    }
    else{
      console.log(chalk.red("\tYou are wrong!"));
      console.log("\t"+username + "\'s Score is: " + chalk.bold.underline(score));
    }
    console.log(" ");
  }
  console.log(chalk.bold("\nHigh Scores are as follows: "));
  var flag =0;
  for( k = 0; k< highScores.length;k++){
    if(score>= highScores[k].score && flag!=1){
      flag =1;
    console.log(chalk.bold(username+": "+chalk.bgGreen.underline(" "+score+" ")));
    }
    console.log(chalk.bold(highScores[k].name+": "+ chalk.bgHex('#FFA500')
            .underline(" "+highScores[k].score+" ")));
  }
  if(flag ===1){
    console.log(chalk.hex('FFC0CB').underline("Congratulation! You have beaten a High Score."));
  }
  else{
    console.log(chalk.hex('FFC0CB').underline("Oh no! You couldn't beat a High Score."));
  }
}
const userName = readLineSync.question("Enter your user name: ");
play(userName);
