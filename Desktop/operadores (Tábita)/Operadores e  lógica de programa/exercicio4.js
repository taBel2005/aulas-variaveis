const numero1 = prompt("digite um numero")
const numero2  = prompt("digite um numero")
console.log("O primeiro numero é maior que segundo?", numero1 > numero2)  
console.log("O primeiro numero é igual que segundo?", numero1 === numero2)
const divisao1 = numero1 % numero2
console.log("O primeiro numero é divisível pelo segundo?", divisao1 === 0) 
const divisao2 = numero2 % numero1
console.log("O segundo numero é divisível pelo primeiro?", divisao2 === 0) 
//se o número for ímpar será sempre falso e se for par será verdadeiro

