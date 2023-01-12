
enum Role {admin =1, Read = 2, Backup = 3} //trabalha com listas relacionadas, auxilia em manter o codigo limpo

const user = {
    firstName: 'Eduardo',
    age:28,
    Role: Role.Backup
}

console.log(user)