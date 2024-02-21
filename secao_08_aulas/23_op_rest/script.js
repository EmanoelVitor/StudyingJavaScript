let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

function imprimirNum(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNum(num1,num2,num3);
console.log('pausa');
imprimirNum(num3,num4);
console.log('pausa')
imprimirNum(2,4,5,6,7,8,9,9,8,7,6,4)