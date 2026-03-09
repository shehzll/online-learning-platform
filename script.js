function startLearning(){

alert("Welcome to LearnHub! Choose a course to start learning.");

}

function playVideo(videoId){

let player = document.getElementById("videoPlayer");

player.src = "https://www.youtube.com/embed/" + videoId;

}
