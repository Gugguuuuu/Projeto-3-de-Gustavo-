let cor = document.getElementById("filho1");
let resultado;
let tamanho = document.getElementById("filho2")
let resultado1;
let colorido = document.getElementById("filho3")
let resultado2;
function mudecor(){
    resultado = document.getElementById("filho1").style.backgroundColor = "blue"
    resultado = document.getElementById("filho1").innerText = "agora esta div é azul"
    resultado = document.getElementById("filho1").style.color = "white"
    resultado = document.getElementById("filho1").style.fontSize = "72px"
}
function mudartamanho(){
   
     resultado1 = document.getElementById("filho2").style.width = "400px"
     resultado1 = document.getElementById("filho2").style.height = "400px"
     resultado1 = document.getElementById("filho2").innerText = "agora esta div tem 400px de altura e 400px de largura"
     resultado1= document.getElementById("filho2").style.color = "white"
    resultado1 = document.getElementById("filho2").style.fontSize = "70px"
}
function danca(){
    resultado2 = document.getElementById("filho3").style.animation = "led 1.5s linear infinite"
    resultado2 = document.getElementById("filho3").innerText = " "
}