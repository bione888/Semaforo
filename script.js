const verde = document.querySelector('#verde')
const amarelo = document.querySelector('#amarelo')
const vermelho = document.querySelector('#vermelho')
let semaforo = document.querySelector('#semaforo')
let auto = document.querySelector('#auto')

function sverde() {
    semaforo.src = 'img/verde.png'
}

function samarelo() {
    semaforo.src = 'img/amarelo.png'
}

function svermelho() {
    semaforo.src = 'img/vermelho.png'
}

function sauto() {
    setTimeout(function(){
        semaforo.src = 'img/vermelho.png'
        setTimeout(function(){
        semaforo.src = 'img/amarelo.png'
        setTimeout(function(){
            semaforo.src = 'img/verde.png'
            setTimeout(function(){
                semaforo.src = 'img/desligado.png'
            },2000)
        },1000)
        },1000)
    },1000)
}

verde.addEventListener('click' , sverde)
amarelo.addEventListener('click' , samarelo)
vermelho.addEventListener('click' , svermelho)
auto.addEventListener('click' , sauto)