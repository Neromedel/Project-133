
status = "";
img = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('Status').innerHTML = "Status : Detecting Objects.";
}

function modelLoaded() {
    console.log('Model Loaded.');
    status = true;
    object_detector.detect(img,gotResults);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("lightseagreen");
    text("Dog",140,40);
    noFill();
    stroke('lightseagreen');
    rect(30,60,450,350);

    fill("lightsalmon");
    text("Cat",500,40);
    noFill();
    stroke('lightsalmon');
    rect(300,90,270,320);
}

function gotResults(error,results){
if(error){
console.error(error);
}
console.log(results);
}
function one(){
    window.location = "1.html"
}

function two(){
    window.location = "2.html"
}

function three(){
    window.location = "3.html"
}