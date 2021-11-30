lefWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(550,500);
canvas.position(560,150);
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}
function draw(){
background("#969A97");
textSize(difference);
fill('#FFE787');
text('Neel' , 50 , 400);
}
function modelLoaded(){
console.log('PoseNet is Initialized');
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
lefWristX = results[0].pose.lefWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(lefWristX - rightWristX);
}
}