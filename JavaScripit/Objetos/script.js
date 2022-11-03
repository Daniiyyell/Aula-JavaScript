//Objetos
//Conjutos de variáveis e funções, que são chamadas de propriedades e métedps.

var pessoa = {
    nome: 'Grazi',
    Idade: 20,
    profissao: 'Monitora do profesor bonitão',
    faculdade: true,
}

pessoa.nome
console.table(pessoa)

//Objetos com funções ou métodos

var quadrado = {
    perimetro: function(lado){
        return lado + lado + lado + lado
    },
    area: function(lado){
        return lado*lado
    }
}

//Arrays

//È um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma unica variavel.

var videoGames = ['PS4', 'Xbox', 'Swit']

console.log(videoGames.length)