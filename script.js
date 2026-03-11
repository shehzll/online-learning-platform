function playVideo(videoId){

let player = document.getElementById("videoPlayer");

player.src = "https://www.youtube.com/embed/" + videoId;

}


function checkQuiz(){

let score = 0;

let q1 = document.querySelector('input[name="q1"]:checked');
let q2 = document.querySelector('input[name="q2"]:checked');

if(q1) score += parseInt(q1.value);
if(q2) score += parseInt(q2.value);

document.getElementById("result").innerText =
"Your Score: " + score;

localStorage.setItem("quizScore", score);

}


