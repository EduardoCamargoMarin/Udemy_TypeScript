
class Users {
    name: string
    balance: number

    constructor(name: string, balance:number)  { 
        this.name = name
        this.balance = balance

    }
  
}

const user1 = new Users ('Eduardo', 10)
console.log(user1)