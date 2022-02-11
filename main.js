music1=""
music2=""
rightWristX=0
rightWristY=0
leftWristX=0
leftWristY=0

function preload(){
    music1=loadSound("music.mp3")
    music2=loadSound("music2.mp3")
}

function setup(){
    canvas=createCanvas(500,550)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}

function modelLoaded(){
    console.log("Model Loaded")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        rightWristX=results[0].pose.rightWrist.x
        leftWristX=results[0].pose.leftWrist.x
        rightWristY=results[0].pose.rightWrist.y
        leftWristY=results[0].pose.leftWrist.y
    }
}

function draw(){
    image(video,0,0,500,550)
}