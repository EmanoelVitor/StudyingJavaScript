function soma(a,b){
    if(a === undefined || b === undefined){
        console.log("Esta função precisa de dois argumentos.");
    }else{
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1,2));
