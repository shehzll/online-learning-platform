function playVideo(videoId){

let player = document.getElementById("videoPlayer");

player.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";

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


function loginUser(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let message = document.getElementById("loginMessage");

if(username === "student" && password === "1234"){

message.style.color = "green";
message.innerText = "Login Successful!";

setTimeout(function(){
window.location.href = "course.html";
},1500);

}

else{

message.style.color = "red";
message.innerText = "Invalid Username or Password";

}

}

let completedLessons = 0;
let totalLessons = 3;

function updateProgress(){

completedLessons++;

let percent = (completedLessons / totalLessons) * 100;

document.getElementById("progressFill").style.width = percent + "%";

document.getElementById("progressText").innerText = percent + "% Completed";

if(percent === 100){
alert("Congratulations! You completed the course 🎉");
}

}

function submitQuiz(){

let answer = document.querySelector('input[name="q1"]:checked');

if(!answer){
alert("Please select an answer");
return;
}

if(answer.value === "correct"){
alert("Correct Answer 🎉");
}else{
alert("Wrong Answer ❌");
}

}
