//exercicio1
const idade = prompt("qual sua idade")
const idadeAmigo = prompt("qual a idade do seu melhor amigo")
console.log("Sua idade é maior do que a do seu melhor amigo?", idade >= idadeAmigo)
console.log("diferença de idade", idade - idadeAmigo)

//exercio2
const numeroPar = prompt("digite um numero par")
const resultado = numeroPar % 2
console.log(resultado)
//"o resultado sempre será 0 em numeros pares"

//exercicio3
const idadeUsuario = prompt("digite sua idade")
const resultadoMeses = idadeUsuario / 12
console.log("idade em meses", resultadoMeses)
const resultadoDias = idadeUsuario / 365
console.log("idade em dias", resultadoDias)
const resultadoHoras = idadeUsuario / 24
console.log("idade em horas", resultadoHoras)

//exercicio4
const numero1 = prompt("digite um numero")
const numero2  = prompt("digite um numero")
console.log("O primeiro numero é maior que segundo?", numero1 > numero2)  
console.log("O primeiro numero é igual que segundo?", numero1 === numero2)
const divisao1 = numero1 % numero2
console.log("O primeiro numero é divisível pelo segundo?", divisao1 === 0) 
const divisao2 = numero2 % numero1
console.log("O segundo numero é divisível pelo primeiro?", divisao2 === 0) 
//se o número for ímpar será sempre falso e se for par será verdadeiro



