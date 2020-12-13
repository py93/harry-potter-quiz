var readLineSync = require('readline-sync')
const chalk = require('chalk');
var figlet = require('figlet');

console.log(chalk.yellowBright(figlet.textSync("Harry Potter")));

var userName = readLineSync.question('\n\nEnter username please: ')

console.log("Welcome, ", userName, "!!");

var hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

var userHouse = readLineSync.keyInSelect(hogwartsHouses, 'Which house you want to play for?');

if(userHouse>=0){
console.log("\nYou have decided to play for: ", hogwartsHouses[userHouse]);
console.log("\nLet's see how much you know about Harry Potter!! Let's begin!!");

var questionList = [
  {
    question: '\n1. Which house does Harry Potter belong to?\nAnswer: ',
    answer: 'Gryffindor',
    level: 1
  },
  {
    question: "\n2. What is Neville's surname?\nAnswer: ",
    answer: 'Longbottom',
    level: 1
  },
  {
    question: '\n3. Which creature is Ron afraid of?\nAnswer: ',
    answer: 'Spider',
    level: 2
  },
  {
    question: "\n4. To which family did Dobby last belong to as a house elf? (Last name only)\nAnswer: ",
    answer: 'Malfoy',
    level: 2
  },
  {
    question: "\n5. What is Lord Voldemort's first real name?\nAnswer: ",
    answer: 'Tom',
    level: 2

  },
  {
    question: '\n6. Who killed Albus Dumbledore? (Last name only)\nAnswer: ',
    answer: 'Snape',
    level: 3

  },
  {
    question: '\n7. True or false: Is Harry a horcrux?\nAnswer: ',
    answer: 'True',
    level: 3

  },
  {
    question: '\n8. Who killed Nagini? (first name only)\nAnswer: ',
    answer: 'Neville',
    level: 3
  },
  {
    question: '\n9. Who did Hermoine go to Yule Ball with? (last name only)\nAnswer: ',
    answer: 'Krum',
    level: 4
  },
  {
    question: '\n10. Apart from Harry, who was the second champion from Hogwarts for Triwizard Tournament? (first name only)\nAnswer: ',
    answer: 'Cedric',
    level:4
  }
]

var highScores = [
    {
      name: 'Pooja',
      score: 100,
    },
    {
      name: 'Priya',
      score: 60,
    }
]

var score = 0;

var houseScores = [
  {
    house: 'Gryffindor',
    score: 100,
    color: 'red'
  },
  {
    house: 'Hufflepuff',
    score: 0,
    color: 'yellow'
  },
  {
    house: 'Ravenclaw',
    score: 60,
    color: 'blue'
  },
  {
    house: 'Slytherin',
    score: 0,
    color: 'green'
  }
]

function play(question,correctAnswer,level)
{
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === correctAnswer.toUpperCase())
  {
    score+=(10*level);
    
    console.log(chalk.greenBright("Wohoo! That's correct. Your score is: ", score));
  }
  else 
  {
    console.log(chalk.redBright("Oops! That's incorrect. No points for you"));
  }
}

var currentLevel = 1;
for(var i =0;i<questionList.length;i++)
{
  if(currentLevel<questionList[i].level)
  {
    currentLevel = questionList[i].level;
    console.log(chalk.cyanBright.bold('\nWelcome to level', currentLevel,'. Each correct answer is now worth ', currentLevel*10));
    
  }
  play(questionList[i].question,questionList[i].answer,currentLevel);
  
}

console.log(chalk.bgMagenta.bold.underline("\n", userName, ", your final score is: ", score, "\n"));


console.log(chalk.yellow.bold.underline("\nHigh scores are: "));
for(var i=0;i<highScores.length;i++)
{
  console.log(highScores[i].name, ": ", highScores[i].score);
}
console.log(chalk.redBright.bold.underline("\n\nHouse scores are: "));
for(var i=0;i<houseScores.length;i++)
{
  if(hogwartsHouses[userHouse].toUpperCase()===houseScores[i].house.toUpperCase())
  {
    houseScores[i].score+=(score);
  }
  console.log(houseScores[i].house, ": ", houseScores[i].score);
}
}
else{
  console.log(chalk.magenta("You didn't select any house! Sad to see you go!"))
}