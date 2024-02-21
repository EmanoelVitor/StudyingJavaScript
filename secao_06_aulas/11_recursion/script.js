function retornarNumeroPar(n){
    if(n % 2 == 0){
        console.log("n agora é par: " + n);
    }else{
        console.log(n);
        retornarNumeroPar(n - 1);
    }
}

retornarNumeroPar(3);

function recursao(n){

    if(n-1 < 2){
        console.log("Recursao parou");
    } else if(n % 2 !=0){
        console.log("Número ímpar " + n);
        recursao(n - 1);
    } else{
        console.log("Número par " + n);
        recursao(n - 2);
    }
}

recursao(33);
