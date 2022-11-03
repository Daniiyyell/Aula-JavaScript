//Array
//E um grupo de valores. Servem para guardarmos diferentes valores em uma única variavél
/*var videoGames = ['Switch', 'PS4', 'Xbox'];

var numeros = [1,2,3]

console.log(numeros[0]+numeros[2])
*/
/*
var i = 0;
while(i<10){
    console.log(i);
    i = i + 1
}
*/
/*
for (var i = 0; i < 10; i = i+1){
    console.log(i)
}
*/
/*
var videoGames = ['Switch', 'PS4', 'Xbox'];


//ForEach
//foreach é um metodo qie executa uma função para cada item array. È uma forma mais simples de utilizarmos um loop com arrays

videoGames.forEach(function(a, b ,c){
    console.log(a, b, c)
})
*/
//Crie uma array com os anos que o Brasil ganhou a copa 1958, 1962, 1994, 2002

var brasil = [1958,1962,1994,2002]

//Intereja com a array utilizando um loop, para mostrar no console a seguinte mensagem, "O Brasil ganhou a copa de ${}"

brasil.forEach(function(c){
    console.log('O Brasil ganhou a copa de', c)
})

