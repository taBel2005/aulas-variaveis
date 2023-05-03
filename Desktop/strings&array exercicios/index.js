//exercicio 1 - interpretação de código


let array
console.log('a. ', array)
//a. undefined

array = null
console.log('b. ', array)
//b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//c. 11

let i = 0
console.log('d. ', array[i])
//d. 3

array[i+1] = 19
console.log('e. ', array)
//e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
//f. 9



// exercicio 2 - interpretação de código

const frase = prompt("Digite uma frase") //Subi num ônibus em Marrocos
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS 27

 
//exercicio 1 - escrita de código

const nome = prompt("Digite seu nome")
const email = prompt("Digite seu email")
console.log("O e-mail" ,email, "foi cadastrado com sucesso. Seja bem-vinda(o)" ,nome); //usar template string


//exercicio 2 - escrita de código

const comidas = ["Torta de limão", "Maçã", "Banana", "Uva", "Ovo"]
console.log(comidas);
const comidaNova = prompt("Qual sua comida preferida?")
array[1] = comidaNova


//exercicio 3 - escrita de código

const listaTarefas = []
const tarefaum = prompt("Digite uma tarefa que você precise realizar no dia a dia")
const tarefadois = prompt("Digite outra tarefa")
const tarefatres = prompt("Digite outra tarefa")

listaTarefas.push(tarefaum,tarefadois,tarefatres)
// console.log(Array(tarefaum, tarefadois, tarefatres));
const indiceTarefa = Number(prompt("Digite o índice de uma tarefa feita"))
listaTarefas.splice(indiceTarefa - 1,1)
console.log(listaTarefas);

