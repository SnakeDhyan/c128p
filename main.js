song1="";
song2="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
    song1=loadSound("Bones_320(PaglaSongs).mp3");
    song2=loadSound("Imagine_Dragons_-_Believer.mp3");
}
leftWrsitX=0;
leftWrsitY=0;
rightWristX=0;
rightWristY=0;

function modelLoaded(){
    console.log("Posenet is Intialized");
}
function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
        leftWrsitX=results[0].pose.leftWrsit.x;
        leftWrsitY=results[0].pose.leftWrsit.y;
        console.log("Left Wrist X ="+leftWrsitX+"Left wrist Y ="+leftWrsitY);
        
        rightWrsitX=results[0].pose.rightWrsit.x;
        rightWrsitY=results[0].pose.rightWrsit.y;
        console.log("Right Wrist X ="+rightWrsitX+"Right wrist Y ="+rightWrsitY);
    }
}