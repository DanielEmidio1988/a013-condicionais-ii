const num = Number(prompt("Digite seu numero"))

if (num % 2 === 0){ 
    if(num %3 === 0){
        console.log("É divisivel por 2 e 3")
    }else{
        console.log("É divisivel por 2")
    }
}else if(num %3 === 0){
    console.log("É divisivel por 3")
}else{
    console.log("Não é divisivel nem por 2 ou 3")
}

if (num%2 === 0 || num%3 === 0){
    console.log(`O ${num} é divisivel por 2 ou 3`)
}else{
    console.log(`O ${num} não é divisivel nem por 2 ou 3`)
}
