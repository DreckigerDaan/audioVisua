var mic;
var song;
var button;
var amp;
var volHistory = [];

/* function preload(){
    song = loadSound('techno.mp3');
} */

function setup(){
    createCanvas(400, 400);
    mic = new p5.AudioIn();
    mic.start();
    console.log(mic);
   /*  button = createButton("toggle");
    button.mousePressed(togglePlaying);

   song.play(); 
    amp = new p5.Amplitude();  */

}

function draw(){

    background(51);
    
/*     var volume = amp.getLevel();

    volHistory.push(volume);
    stroke(255);
    noFill();
    beginShape();
    for(var i = 0; i < volHistory.length; i++){
        var y = map(volHistory[i], 0, 1, height / 2, 0)
        vertex(i, y);

    }
    endShape();
    if(volHistory.length > width){
        volHistory.splice(0, 1);
    }
 */




    var miclevel = mic.getLevel();
    ellipse(200, 200, 200, miclevel * 300)
}

function togglePlaying(){
    if(song.isPlaying()){
        song.pause();
    }else {
        song.play();
    }
}