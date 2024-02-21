function negativoPositico(num){
    while(num < 0){
        
        if(num < 0){
            return num * (-1);
        }
    }
    console.log("O número já é postivo");
}

console.log(negativoPositico(-9));

//Outra maneira usando a lib--> Math.abs;

function numeroPos(numNegativo){
    return Math.abs(numNegativo);
}
console.log(numeroPos(-13));
console.log(numeroPos(13));