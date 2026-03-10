function startLearning(){

alert("Welcome to LearnHub! Choose a course to start learning.");

}

function playVideo(videoId){

let player = document.getElementById("videoPlayer");

player.src = "https://www.youtube.com/embed/" + videoId;

}

function checkQuiz(){

let score = 0;

let q1 = document.querySelector('input[name="q1"]:checked');
let q2 = document.querySelector('input[name="q2"]:checked');
let q3 = document.querySelector('input[name="q3"]:checked');

if(q1) score += parseInt(q1.value);
if(q2) score += parseInt(q2.value);
if(q3) score += parseInt(q3.value);

document.getElementById("result").innerText =
"Your Score: " + score + " / 3";

}
