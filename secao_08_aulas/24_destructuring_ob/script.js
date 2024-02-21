/*
 -Podemos variaveis com propriedades do objeto  com uma notação diferente
*/

let pessoa = {
    nome: "Vitor",
    idade: 19,
    profissao: "Programador"
}

const {nome: fnome, idade: fIdade, profissao: prof} = pessoa;

console.log(fnome,fIdade,prof)