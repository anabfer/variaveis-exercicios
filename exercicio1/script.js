let nome 
let idade

console.log(typeof nome, idade)
// Foi impresso undefined porque a variavel estava vazia

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome)
console.log(typeof idade)
// Agora as váriasveis receberam um valor.

console.log("Olá,", nome,"você tem", idade, "anos.")

let pergunta1 = prompt("Você está de azul?")
let pergunta2 = prompt("Você está de preto?")
let pergunta3 = prompt("Você gosta de azul e preto?")

console.log("Você está de azul?" , pergunta1, "Você está de preto?" , pergunta2 , "Você gosta de azul e preto?" , pergunta3)

const resposta1 = "Você está de azul?"
const resposta2 = "Você está de preto?"
const resposta3 = "Você gosta de azul e preto?"

console.log(resposta1, pergunta1)
console.log(resposta2, pergunta2)
console.log(resposta3, pergunta3)
