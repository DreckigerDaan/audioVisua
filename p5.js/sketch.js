var song;
var sliderRate;
var sliderPan;
var play;
var amp;
var wave;







function setup() {
  createCanvas(800, 800, WEBGL);
  song = loadSound("cali.mp3", loaded);
  song.setVolume(0.1);


  sliderRate =   createSlider(0, 1, 0.5, 0.01);
  sliderPan  =   createSlider(-1 , 1, 0.5, 0.01);
  play   = createButton("play");
  play.mousePressed(togglePlaying);


  amp = new p5.Amplitude();
  

  wave = new p5.Oscillator();
  
  
  angleMode(DEGREES)
  
}
function loaded(){
  console.log("loaded");
}

function togglePlaying(){

if(!song.isPlaying()){
  song.play();
  play.html("pause")
} else {
  song.pause();
  play.html("play")
}
  
}


function draw() {
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());
  background(30)
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 200);
  
  fill(diam *1.4, diam*1.6, diam*2);
  ellipse(0, length/2, diam , diam)
  
  rotateX(60)
  noFill()
  stroke(255) 

  for ( var i = 0; i < 30; i++){

    beginShape()
    for(var j =0; j < 360; j+= 10){
      var rad = i * 8
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin (frameCount * 2 + i * 20) * 100

      vertex(x, y, z)
    }
    endShape(CLOSE)
  } 

 




/* 

  background(30);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Body
  fill(125, 176, 133)
  rect(240, 145, 20, 100);


  //Head
  ellipse(240, 115, 90, 90);

  //eyes
  fill(255, 176, 133)
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);

  //legs

line(230, 195, 220, 205);
line(250, 195, 260, 205);

 */


}
