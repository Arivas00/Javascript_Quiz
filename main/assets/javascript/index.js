
var highscoreBtn = document.querySelector("#scores");

highscoreBtn.addEventListener("click", function() {
    
        window.location.href = "./main/high_scores.html";

})

var startBtn = document.querySelector("#startBtn");
var title = document.querySelector("#title");
var info = document.querySelector("#info");

function startQuiz() {

    title.remove();
    info.remove();
    startBtn.remove();

}

startBtn.addEventListener("click", startQuiz);