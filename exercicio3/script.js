const nome = prompt("Qual é o seu nome?").toLocaleLowerCase()
const idade = Number(prompt("Qual é a sua idade?"))

console.log(nome === "josé"?`Oi Zé!`:`Olá, ${nome}`)

console.log(idade >= 18?"Pode tirar carteira de motorista":"Ainda não pode tirar carteira de motorista")
