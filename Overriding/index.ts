
class Person {
    constructor(public firstName: string, public lastName: string, public age: number) {}

    greet() {
        return this.firstName + '' + this.lastName
    }
}

//Cliente do banco

class Client extends Person { //extensão da person
  override get  greet() {
        return 'Dear ' + this.firstName + '' + this.lastName
    }

}

class Staff extends Person {
   override get  greet() { //escreve em cima da referencia da frase.
        return 'hi ' + this.firstName + '' + this.lastName
}

let client1 = new Client('Eduado','Marin', 28)
let staff1 = new Staff ('ana', 'Silva', 25)