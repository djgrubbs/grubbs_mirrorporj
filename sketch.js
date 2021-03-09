let skeletons = [];
let numSkeletons = 2;

let donuts = [];
let numDonuts = 2;

let pops = [];
let numPops = 2;

let waters = [];
let numWaters = 2;

let greens = [];
let numGreens = 2;

let reds = [];
let numReds= 2;

let pinks = [];
let numPinks = 2;

let jets = [];
let numJets = 2;

var button1; //variable to create a button object
var button2; //variable to create a button object

function preload (){
  let skeleton1 = loadImage('data/skeleton0.png');
    let skeleton2 = loadImage('data/skeleton1.png');
    let skeleton3 = loadImage('data/skeleton2.png');
  skeletons = [skeleton1,skeleton2,skeleton3]
  
  let donuts1 = loadImage('data2/hair.png');
  let donuts2 = loadImage('data2/hat.png');
  let donuts3 = loadImage('data2/righside_face.png');
  donuts = [donuts1,donuts2,donuts3]
  
  let pop1 = loadImage('data3/eye.png');
  let pop2 = loadImage('data3/dog_eyes.png');
  let pop3 = loadImage('data3/dog_ears.png');
  pops = [pop1, pop2, pop3]
  
  let water1 = loadImage("data4/dark.png");
  let water2 = loadImage("data4/person.png");
  let water3 = loadImage("data4/Photoshop.png");
  waters = [water1,water2,water3]
  
  let green1 = loadImage("data5/art.png");
  let green2 = loadImage("data5/art2.png");
  let green3 = loadImage("data5/bride.png");
  greens = [green1,green2,green3]

  let red1 = loadImage('data6/leaf.png');
  let red2 = loadImage('data6/puffer.png');
  let red3 = loadImage('data6/vans.png');
  reds = [red1,red2,red3]
  
  let pink1 = loadImage('data7/camera.png');
  let pink2 = loadImage('data7/coffee.png');
  let pink3 = loadImage('data7/skyrim.png');
  pinks = [pink1,pink2,pink3]
  
  let jet1 = loadImage('photo/crown.jpg');
  let jet2 = loadImage('photo/hannah.jpeg');
  let jet3 = loadImage('photo/lost.jpg');
  let jet4 = loadImage('photo/harrison.jpg');
  let jet5 = loadImage('photo/harrison_bark.JPG');
  jets = [jet1,jet2,jet3,jet4,jet5]




}

function setup() {
  createCanvas(700, 700);
  
  button1 = createButton("option 2"); //button
  button1.position(250, 30); //x,y location of input

  button2 = createButton("option 1"); //button
  button2.position(50, 30); //x,y location of input
}

function draw() {
  
  button1.mousePressed(bkgrnd); //pressing the button object
  button2.mousePressed(nobkgrnd); // pressing the button object
}

  function bkgrnd(){
    background(200);
    
    let pot = random(greens);
    image(pot,200,150,width,height)
    
    let color = random(reds);
    image(color,200,0,width,height/2)
    
    let pea = random(waters);
    image(pea,-50,150,width,height)
    
    let soda = random(pinks);
    image(soda,-220,-20,width,height)
    
    let randoImg =  random(skeletons);
  image(randoImg, 150, 100, width,height); 
  
    let okay = random(donuts);
    image(okay,0,-200,width,height);
    
    let hunt = random(pops);
    image(hunt,50,50,width,height/2)
    
}


  function nobkgrnd(){
    background(200);
    
    let brown = random(jets);
    image(brown,150,150,width/2,height/2)
 
}


