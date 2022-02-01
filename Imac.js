objectDetector = "";
img = "";
objects = [];
status = "";

function preload() {
    
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detected";
}

function modelLoaded() {
    console.log("Model Loaded!") 
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 400, 400);
    if (status != "") {

document.getElementById("status").innerHTML = "Status : Object Detected";
        objectDetector.detect(video, gotResult);
        for (var i = 0; i < objects.length; i++) {
            
            document.getElementById("number_of_objects").innerHTML = "Number Of Objects : " + objects.length;
            fill(red);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y );
            noFill();
            stroke(red)
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}