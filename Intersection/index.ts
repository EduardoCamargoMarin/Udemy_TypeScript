

type User = { //ALIAS
    firstName: string
    age: number
}

type jobRole = { //ALIAS
    id: number
    role: string
}

//criando um objeto

type employee = User & jobRole // intersection - criar um objeto a partir de duas ou mais ALIAS - mas precisa usar o TYPE.

const User01: employee = {
    firstName: 'Eduardo',
    age:28,
    id: 202399844,
    role: 'Web Developer'

}