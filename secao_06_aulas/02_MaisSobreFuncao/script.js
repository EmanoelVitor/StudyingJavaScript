function multiplicar(x,y,z){
    return x * y * z;
}
console.log(multiplicar(2,3,4))

function podeDirigir(idade,cnh){
    if(idade >= 18 & cnh === true){
        console.log("Pode Dirigir.")
    } else{
        console.log("Não pode dirigir.")
    }
}

console.log(podeDirigir(19,1))