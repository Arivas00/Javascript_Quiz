
var highscoreBtn = document.querySelector("#scores");

highscoreBtn.addEventListener("click", function() {
    
        window.location.href = "./main/high_scores.html";

})

var startBtn = document.querySelector("#startBtn");
var title = document.querySelector("#title");
var info = document.querySelector("#info");
var btn1 = document.querySelector("#choice1");
var btn2 = document.querySelector("#choice2");
var btn3 = document.querySelector("#choice3");
var btn4 = document.querySelector("#choice4");

var questionsAnswers = [

    {question: 'How do you write "Hello World" in an alert box?',
    choice1: 'alertBox("Hello World");',
    choice2: 'msgBox("Hello World");',
    choice3: 'msg("Hello World");',
    choice4: 'alert("Hello World");',
    correct: "choice4",
    },

    
    {question: "How do you create a function in JavaScript?",
    choice1: "function myFunction()",
    choice2: "function = myFunction()",
    choice3: "function : myFunction()",
    choice4: "function * myFunction()",
    correct: "choice2",
    },  

    {question: 'How do you write an IF statement in JavaScript?',
    choice1: "if i === 5 then",
    choice2: "if i = 5",
    choice3: "if (i === 5)",
    choice4: "if i = 5 then",
    correct: "choice3",
    },

    {question: "How does a FOR loop start?",
    choice1: "for (var i = 0; i < 5; i++)",
    choice2: "for (var i = 0; i < 5)",
    choice3: "for (i < 5; i++)",
    choice4: "for i = 1 to 5",
    correct: "choice1",
    },

    {question: "How do you single line comment in Javascript?",
    choice1: "<!-- This is a comment -->",
    choice2: "//This is a comment",
    choice3: "*This is a comment*",
    choice4: "{This is a comment}",
    correct: "choice2",
    }
];

function startQuiz() {

    title.remove();
    info.remove();
    startBtn.remove();

}

startBtn.addEventListener("click", startQuiz);