noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(1300,300)
    canvas=createCanvas(1250, 600);
    canvas.position(25,280);
    poseNet=ml5.poseNet(video,modalLoaded)
    poseNet.on("pose",gotPoses);
}
function modalLoaded(){
    console.log("PoseNet Is Initialized")
}
function draw() {
    background('#969A97');
    fill("#F90093");
    textSize(difference);
    text("Modak Muvvala", 0 , 300);
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX = "+leftWristX+"    rightWristX = "+rightWristX+"    difference = "+difference)
  }
}