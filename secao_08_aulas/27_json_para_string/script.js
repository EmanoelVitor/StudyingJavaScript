//JSON = JavaScript Object Notation.;
//Comunicação entre serviços, ex: back <-> front

let pessoa = {
    "name": "Vitor",
    "idade": 28,
    "profissao": "Programador"
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON)
console.log(pessoaJSON.name)