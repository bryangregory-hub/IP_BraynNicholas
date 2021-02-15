 const question= document.getElementById("question");
 const choices =Array.from( document.getElementsByClassName("choice-text"));

 let currentQuestion = {};
 let acceptingAnswers= false;
 let score = 0;
 let questionCounter = 0;
 let availableQuesions=[];

 let questions=[
     {
        questions:"What is the name of the ghost who was killed by an axe?",
        choice1:"Sir Nicholas",
        choice2:"Moaning Myrtle",
        choice3:"James Potter",
        choice4:"Bloody Baron",
        answer:1
     },
     {
        questions:"You have arrived at Hogwarts and see a group of students walk past. They are wearing silver and green robes. Which animal is their house mascot?",
        choice1:"Lion",
        choice2:"Eagle",
        choice3:"Serpent",
        choice4:"Badger",
        answer:3
     },
     {
        questions:"Who is the head of Ravenclaw house?",
        choice1:"Minerva McGonagall",
        choice2:"Pomona Sprout",
        choice3:"Filius Flitwick",
        choice4:"Severus Snape",
        answer:3
     },
     {
        questions:"How many people founded Hogwarts?",
        choice1:"3",
        choice2:"4",
        choice3:"1",
        choice4:"6",
        answer:2
     },
     {
        questions:"Which two colors make up the Hufflepuff badge?",
        choice1:"Red and Gold",
        choice2:"Yellow and Black",
        choice3:"Green and Silver",
        choice4:"Blue and Bronze",
        answer:2
     },
     {
        questions:"What/who divides students into the different houses?",
        choice1:"Professor Dumbledore",
        choice2:"The students get to choose",
        choice3:"Owl postla Service",
        choice4:"The sorting hat",
        answer:4
     },
     {
        questions:"Which core was infused into Harry Potters Wand?",
        choice1:"Unicorn Hair",
        choice2:"Phoenix Feather",
        choice3:"Dragon Heartstring",
        choice4:"Thestral Hair",
        answer:2
     },
     {
        questions:"Who has never own the Elder wand?",
        choice1:"Severus Snape",
        choice2:"Draco Malfoy",
        choice3:"Harry Potter",
        choice4:"voldemort",
        answer:4
     },
     {
        questions:"Which of these people is NOT a Muggle?",
        choice1:"Hermione Granger",
        choice2:"Luna Lovegood",
        choice3:"Lily J. Potter",
        choice4:"Myrtle Warren",
        answer:2
     },
     

 ];

 //CONSTANTS
 const CORRECT_BONUS = 10;
 const MAX_QUESTIONS =9;

 startGame=()=>{
     questionCounter = 0;
     score=0;
     availableQuesions = [ ...questions];
     
     getNewQuestion();
 }
 getNewQuestion=()=>{
    if(availableQuesions.length===0||questionCounter>=MAX_QUESTIONS){
       //go to the result pg
       return window.location.assign('end.html')
    }
   questionCounter++;
   const questionIndex =Math.floor(Math.random()*availableQuesions.length);
   currentQuestion=availableQuesions[questionIndex];
   question.innerText=currentQuestion.questions;

      choices.forEach(choice => {
         const number = choice.dataset["number"];
         choice.innerText = currentQuestion["choice"+number];
      });
      availableQuesions.splice(questionIndex,1);

      acceptingAnswers=true;
 }
choices.forEach(choice =>{
   choice.addEventListener("click",e=>{
      if(!acceptingAnswers)return;

      acceptingAnswers=false;
      const selectedChoice=e.target;
      const selectedAnswer=selectedChoice.dataset["number"];

      const classToApply = 
      selectedAnswer==currentQuestion.answer?"correct":"incorrect";
      
      selectedChoice.parentElement.classList.add(classToApply);

      setTimeout(()=>{
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion();

      },1000);
   });
});

 startGame();