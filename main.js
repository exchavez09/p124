function setup() {
    video = createCapture(VIDEO);
    video.size(650, 600)

    canvas = createCanvas(650, 600);
    canvas.position(690,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#ADD8E6');
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
    }
}