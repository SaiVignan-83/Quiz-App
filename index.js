const readLineSync = require("readline-sync");
const questions = [
  {
  question:"What is the highest score of rohit sharma?",
  options:["285","264","250","208"],
  answer:"2"
  },
  {
    question:"In which year did India win 1st 50th the World Cup?",
    options:["1983","2007","2011","2013"],
    answer:"3"
  },
  {
    question:"How long is the wicket on cricket pitch(in yards)?",
    options:["22","26","24","28"],
    answer:"1"
  },
  {
    question:"What is the name of the trophy awarded in India-Australia test series?",
    options:["Duleep Trophy","Irani Trophy","Border-Gavaskar Trophy","None of the above"],
    answer:"3"
  },
  {
    question:"Who was our couch when india won their first world cup?",
    options:["Kirsten","Prithvi Raj Man Singh","Ravi Shastri","Duncan Fletcher"],
    answer:"2"
  },
]
let correct_answers = 0;
function Play(questions){
  console.log(questions.question);
  for(let ind=0;ind<questions.options.length;ind++){
    console.log((ind+1)+"."+questions.options[ind]);
  }
  const selected_option = readLineSync.question("Enter your option:");
  if(questions.answer === selected_option){
      console.log("Hurray!!! correct answer");
      correct_answers++;
  }
  else{
    console.log("Wrong answer, correct answer is option "+questions.answer);
  }
  console.log();
}
console.log("                 Welcome to cricket Quiz       ");
console.log();
questions.forEach(Play);
console.log("Final score:"+correct_answers+"/"+questions.length);
