var noseX=0;
var noseY=0;

function preload(){
    moustache=loadImage("https://i.postimg.cc/qRtr1NCV/istockphoto-485318064-612x612-removebg-preview.png");
}
function setup() { 
    canvas = createCanvas(300,300); 
    canvas.center();
    video = createCapture(VIDEO); 
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
 image(video,0,0,300,300);
 image(moustache,noseX,noseY,50,50);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function modelLoaded(){
    console.log("model is loaded!");
}
function gotPoses(results){
    if(results.length>0){
        noseX=results[0].pose.nose.x-25;
        noseY=results[0].pose.nose.y-5;
        console.log("noseX = "+ noseX);
        console.log("noseY = "+ noseY);
    }
}