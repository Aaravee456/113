function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill('#d61125')
    rect(50, 50, 50, 560);
    fill('#00FF00')
    circle(80, 60, 50);
    fill('#d61125')
    rect(85, 50,520, 50);
    fill('#00FF00')
    circle(590, 60, 50);
    fill('#FF0000')
    rect(580, 50, 50, 560);
}

function take_snapshot() {
    save('my_picture.jpg');
}