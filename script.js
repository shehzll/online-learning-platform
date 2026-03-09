function startLearning(){
alert("Welcome to LearnHub! Login to start learning.");
}
function playVideo(videoId){

let player = document.getElementById("videoPlayer");

player.src = "https://www.youtube.com/embed/" + videoId;

}

