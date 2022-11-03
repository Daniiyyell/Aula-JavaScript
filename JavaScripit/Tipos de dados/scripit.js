//tipos de dados

//Todos são primitivos exceto os objetos.
var nome = "joão" //String
var idade = 16 //Number
var verdadeiroOuFalso = true //Boolean
var time; //Undefined
var comida = null //Null
var novoObjeto = {} //Object

//Objetos 
    const Alunos = {
        NomeDoAluno: "Erick",
        idadeDoAluno: 16, 
        TimeDoAluno: false,
    }

    console.log(Alunos.NomeDoAluno)

//Verificar os tipos de dados 
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof verdadeiroOuFalso);
console.log(typeof time);
console.log(typeof comida);
console.log(typeof novoObjeto);

//Você pode somar string e assim concatenar as palavras.

var nome2 = "Matheus"
var sobrenome = "vaz"
var nomeCompleto = nome2 + " " +sobrenome;
console.log(nomeCompleto)

//Você pode somar com strings, o reusltado final será sempre uma string.

var gols = 1000;
var frase = 'Pelé fez ' + gols + ' gols'
console.log(frase)

//Template String
var golacos = 1000; 
var frase2 = `Matheus Vaz fez mais de ${golacos} gols`
console.log(frase2)


//Exercicios.
//Declarar uma variavel contendo uma string
let moto = "Motos"
console.log(moto)

//Declarar uma variavel contendo um numero dentro de uma string
let pontos = "32"
console.log(pontos)

//Declare uma variavel com sua idade
let idade2 = 22;
console.log(idade2)

//Declare duas variaveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var nome4 = "Daniel"
var sobrenome2 = "Santos"
var NomeCompleto = nome4 + " " + sobrenome2;
console.log(NomeCompleto)

//Coloque a seguinte frasee em uma variavel: It's time
var teste = "It's time"
console.log(teste)

//Verifique o tipo da variavel que contem seu nome

console.log(typeof NomeCompleto);


//var numero = prompt("Digite um valor: ");
//console.log(numero)

//Faça um programa que peça dois numeros para o usaario. Imprima a soma desses dois numeros.

//Criar dois prompt dentro de variaveis
//let x = parseInt (prompt("Digite o 1° valor: "))
//let y = parseInt (prompt("Digite o 2° valor: "))

//Somar os resultados
//let soma = x + y
//console.log(soma) 

