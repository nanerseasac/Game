let caracter
let grass

let size = 64

let speed = 64

let moveX = 0
let moveY = 0

let restart

//executa apenas uma vez ao iniciar o programa
function setup() {
  createCanvas(576, 576);
  caracter = loadImage('cat.png')
  grass = loadImage('grass.png')
}

// fica executando em loop ate que seja encerrado
function draw() {
  background(220);  
  
  if(moveX < 0){
  moveX = 0
  }
   if(moveY < 0){
  moveY = 0
  }
    if(moveX > 512){
  moveX = 512
  }
   if(moveY > 512){
  moveY = 512
  }
  
  for(let x = 0; x < 9; x++){
    for(let y = 0; y < 9; y++){
      image(grass, size*x,size*y, size, size)
    }
  }
  
  
  image(caracter, moveX, moveY, size, size)
  
  if(moveX === 512 && moveY === 512){
     rect(160,160, 256, 256)
     textSize(35)
     text('You won!', 210,300)
  
  restart = createButton('Reiniciar')
    restart.position(250,350)
    restart.mousePressed(reset)
    
    noLoop()
     }
  
function reset(){
  moveX = 0
  moveY = 0
  restart.remove()
  loop()
}
    
}
//executa uma vez que cada tecla é pressionada
function keyPressed(){
  if(keyIsDown(DOWN_ARROW)){
    moveY += speed     
     }
  if(keyIsDown(UP_ARROW)){
    moveY -= speed     
     }
  if(keyIsDown(LEFT_ARROW)){
    moveX -= speed     
     }
  if(keyIsDown(RIGHT_ARROW)){
    moveX += speed     
     }
}