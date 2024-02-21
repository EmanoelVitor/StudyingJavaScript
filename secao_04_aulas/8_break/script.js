let nome =  "Vitor"

for(let i = 0;i < 10;i++){
    if(i == 3){
        nome = "Emanoel"
    }
    if(i == 5 && nome == "João"){
        console.log("Pode parar, nome Emanoel!")
        break;
    }
    console.log(i);
}