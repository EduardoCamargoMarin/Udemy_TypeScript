
class Person {
    constructor(public firstName: string, public lastName: string, public age: number) {}

    greet() {
        console.log('Hi')
    }
}

//Cliente do banco

class Client extends Person { //extensão da person

}

let client1 = new Client('Eduado','Marin', 28)

//criar classes menores são chamadas de childs .. conceito de herança