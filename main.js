noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(400, 400);
    canvas.position(450,280);
    poseNet=ml5.poseNet(video,modalLoaded)
    poseNet.on("pose",gotPoses);
}
function modalLoaded(){
    console.log("PoseNet Is Initialized")
}
function draw() {
    background('#969A97');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    
  }
}