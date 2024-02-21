let idade = 18
let cnh = false

if(idade >= 18 && cnh == false){
    console.log("Não pode dirigir, pois não tem CNH.");
}else if(idade >= 18 && cnh == true){
    console.log("Pode dirigir.");
}else{
    console.log("Não pode dirigir, pois não tem CNH e é menor.")
}
