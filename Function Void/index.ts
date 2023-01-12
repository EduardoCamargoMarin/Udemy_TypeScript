

function adds (num1:number, num2:number):number {
    return num1 + num2
}

function results(price:number) {

    console.log( 'The result is'+ price) //essa função não tem um return por isso que é void
    //sem o return é considerado undefined

}

results(add(6,3))