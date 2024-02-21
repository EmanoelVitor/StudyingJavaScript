function armazenarSoma(x){
    return y => x + y;
}

let soma1 = armazenarSoma(3);
console.log(soma1(5));

let soma2 = armazenarSoma(5);
console.log(soma2(10));

//Closure --> Uma função que se lembra do ambiente em que ela foi criada;

function contador(i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador()