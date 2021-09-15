var wave;
var button;
var playing;
var slider;



function setup(){
    createCanvas(500,  500);
    wave = new p5.Oscillator();
    wave.setType('sine');

    button = createButton("play/pause")
    button.mousePressed(togglePlaying);

    slider = createSlider(100, 1200, 440);

    

}

function draw(){
    wave.freq(slider.value());
    if(playing){

        background(slider.value() / 2);
    }
    else {

        background(51);

    }

}

function togglePlaying(){
    if(!playing){
        playing = true;
        wave.start();
        wave.amp(1, 1);
        wave.freq(300);
    } else {
        playing = false;
        wave.stop();
    }
}