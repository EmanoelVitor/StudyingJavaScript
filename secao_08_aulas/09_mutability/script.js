let pessoa = {
    nome: "Vitor"
}

let pessoa2= pessoa;

console.log(pessoa == pessoa2)

pessoa2.nome = "Pedro";

console.log(pessoa2.nome)
console.log(pessoa.nome)

pessoa.nome = "Maria"
console.log(pessoa2.nome)