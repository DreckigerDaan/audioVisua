var song;
var fft;
var particles = [];

function preload(){
    song = loadSound('simon_trompet_drums_mixdown_00.wav')
}

function setup(){
    createCanvas( windowWidth, windowHeight);
    angleMode(DEGREES);
    fft = new p5.FFT();
}

function draw() {
    background(51);
    stroke(255);
    noFill();
    fft.analyze()
    amp = fft.getEnergy(20, 200)
    //console.log(amp)
    test = fft.getCentroid();
    console.log(test);
    ellipse(width/2, height / 2 , this.test / 10)


    translate(width / 2, height / 2)

    var wave = fft.waveform();

    for( var t = -1; t <= 1; t += 2){
    beginShape()
    for (var i = 0; i <= 180 ; i++){
        var index = floor(map(i, 0, 180, 0, wave.length -1))

        var r = map(wave[index], -1 , 1, 150, 480)
        
        var x = r * sin(i) * t; 
        var y = r * cos(i);
        vertex(x, y)
    } 
    endShape()
}

    var p = new particle();
    particles.push(p)

    for(var i = particles.length -1 ; i >= 0 ; i--){

        if(!particles[i].edges()){
        particles[i].update(amp > 180);
        particles[i].show();
        }else {
            particles.splice(i, 1);
        }
    }


    
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

class particle {
    constructor(){
        this.pos = p5.Vector.random2D().mult(40)
        this.vel = createVector(0,0)
        this.acc = this.pos.copy().mult(random(0.0001, 0.0001))

        this.w = random(3,5)
    }

    update(cond){
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        if(cond){
            this.pos.add(this.vel)
            this.pos.add(this.vel)
            this.pos.add(this.vel)
        }
    }

    edges(){
        if(this.pos.x < -width / 2 || this.pos.x > width / 2 || this.pos.y < -height / 2 || this.pos.y > height){
            return true
        }else {
            return false
        }
    }
    show(){
        noStroke()
        rect(this.pos.x, this.pos.y, 4)

       var r = random(255); 
       var g = random(100,200); 
       var b = random(100); 
       var a = random(200,255);


        fill(r, g, b, a);
    }
}