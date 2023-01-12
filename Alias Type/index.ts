
type Users = { // Alias ajuda a você não precisar classificar os tipos que vão fazer parte de um objeto, facilitando na hora de puxar informações
    firstName1: string
    age1: number
}

const user1:Users = { //propriedades com os valores relacionados ao ALIAS
    firstName1: 'Eduardo',
    age1: 28
}

console.log(user1)