object = [];
status = "";
img = "";

function preload() {
    img = loadImage("phone.jpg");
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('Status').innerHTML = "Status : Detecting Objects."
}

function modelLoaded() {
    console.log('Model Loaded.');
    status = true;
    object_detector.detect(img,gotResults);
}

function draw() {
    image(img, 0, 0, 640, 480);
    if(status != ""){
    for(i = 0; i < object.length;i++){
        document.getElementById("Status").innerHTML = "Status : Object Detected";
        fill("Red");
        percent = floor(object[i].confidence * 100);
        text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
        noFill();
        stroke("Red");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
    }
}

function gotResults(error,results){
if(error){
console.error(error);
}
console.log(results);
object = results;
}	

