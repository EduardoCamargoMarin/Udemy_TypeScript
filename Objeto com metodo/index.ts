
class Users {
    name: string
    balance: number

    constructor(name: string, balance:number)  { 
        this.name = name
        this.balance = balance

    }
    
    addMoney(amount:number) {
        this.balance += amount
    }
}

const user1 = new Users ('Eduardo', 10)
user1.addMoney(100)
console.log(user1)