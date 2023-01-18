interface Item {
    name:string
    price:number

    itemPurchase(message:string):void //define que a mensagem que vai aparecer é uma string

}

let product1: Item

product1 = {
    name: 'Apple',
    price: 2,
    itemPurchase(message:string) { //confirma que a mensagem vai aparecer em relação a variavel selecionada
        console.log(message + this.name)
    }
}

product1.itemPurchase('Você acabou de comprar uma ') //Apresenta a mensagem que está associada a variavel e que traz as diretrizes da interface

//criar um objeto com interface, auxilia melhor na estrutura do objeto
