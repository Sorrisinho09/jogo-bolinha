function setup() {
  createCanvas(400, 400);
  let palavras = ["Beleza","Bonito","lindeza", "Beldade"];
  palavra = random(palavras);
}

function inicializaCores(){
   background("white");
  fill("black")
  textSize(64);
  textAlign(CENTER, CENTER);
}


function draw() {
 inicializaCores();
  let maximo = width; 
  let minimo = 0; 
  let quantidade = map(mouseX, 0, width, 1, palavra.length); 
  let parcial = palavra.substring(0, quantidade); 
  text(parcial, 200, 200);
  
  /*if (mouseX < 50){
  let palavra = "e";
  text(palavra,200, 200);
  } else if(mouseX < 100){
    let palavra = "es";
    text (palavra, 200, 200);
  } else if(mouseX < 150){
    let palavra = "esc";
    text (palavra, 200, 200);
  } else if(mouseX < 200){
    let palafunction inicializaCores(){vra = "escu";
    text (palavra, 200, 200);
  } else if(mouseX < 250){
    let palavra = "escur";
    text (palavra, 200, 200);
  } else if(mouseX < 300){
    let palavra = "escuri";
    text (palavra, 200, 200);
  } else if(mouseX < 350){
    let palavra = "escrupo";
    text (palavra, 200, 200);
  } else if(mouseX < 400){
    let palavra = "escrupol";
    text (palavra, 200, 200);
  } else if(mouseX < 450){
    let palavra = "escrúpolo";
    text (palavra, 200, 200);
  } */
  
}

