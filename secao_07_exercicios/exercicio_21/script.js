function detecta(tipo){
    if(typeof tipo === 'string'){
        console.log("Este dado é uma string");
    }else if(typeof tipo === 'number'){
        console.log("Este dado é um number")
    }else if(typeof tipo === 'boolean'){
        console.log("Este dado é um boolean");
    }
}

detecta(123)
detecta("OLA")
detecta(true)

