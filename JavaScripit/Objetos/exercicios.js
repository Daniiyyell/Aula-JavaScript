// Crie um objeto com os seus dados pessoais deve possui pelo menos duas propriedades com nome e sobrenome

var cadastro = {
    nome: 'Daniel',
    Sobrenome:'Santos',
    Idade: 22,
    Cursos: 'Desenvolvedor Web',
}

console.table(cadastro)


//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
    raça: 'labrador',
    cor: 'Preto',
    Idade: 10,
    late: true
}

console.table(cachorro)

//Crie um objeto que tenha a funcionalidade de achar a média aritmetica de tres valores


var aritmetica = {
  media: function (valor1, valor2, valor3) {
    return (valor1 + valor2 + valor3) / 3
    }
}