Harry_potter_song = "";
Peter_pan_song = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0
right_wrist_y  = 0;
left_wrist_score = 0;
status_of_song = "";
function preload(){
Harry_potter_song = loadSound("music.mp3");
Peter_pan_song = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = Ml5.poseNet(video , modelLoaded);
poseNet.on('pose', gotPoses)

}
function draw()
{
image(video, 0,0,600,500);
fill("blue");
stroke("red");
 status_of_song = Harry_potter_song.isPlaying();
 if(left_wrist_score > 0.2){

    circle(left_wrist_x, left_wrist_y, 20);
    Peter_pan_song.stop()
 }

if(status_of_song == false){
    song.play(Harry_potter_song);
    document.getElementById("song_name").innerHTML = "Harry Potter"
}
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function gotPoses(results){
    if(results.lenght> 0 ){
        console.log(results);
        left_wrist_score = results[0].pose.kepoints(9).score;
left_wrist_x = results[0].leftWrist.x;
left_wrist_y = results[0].leftWrist.y;
console.log("Left wrist x position is:" + left_wrist_x + "Left Wrist y position is:" + left_wrist_y);
right_wrist_y = results[0].rightWrist.y;
right_wrist_x = results[0].rightWrist.x;
console.log("Right wrist x position is:" + right_wrist_x + "Right Wrist y position is:" + right_wrist_y);
    }
}

