var fft;


function setup () {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)

    fft = new p5.FFT()

}

function preload(){
    song = loadSound('simon_trompet_drums_mixdown_00.wav')
}


function draw(){
    background(51);
    stroke(255);
    noFill();

    var wave = fft.waveform();

    


    beginShape();

        for(var i = 0; i < width; i += 10){
        
        var index = floor(map(i,0,width,0, wave.length));
        var x = i;
        var y = wave[index] * 300 + height / 2;
        vertex(x,y)

    }
    endShape(CLOSE);

}

    

    




function mouseClicked(){
    if(song.isPlaying()){
        song.pause();
        noLoop();
    }else {
        song.play();
        loop();
    }
}