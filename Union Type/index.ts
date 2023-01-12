
function userInput(input1:number | string, input2:number | string){ // " | " representa o UNION 
    let result

if (typeof input1 === 'number' && typeof input2 === 'number') { // Fez uma condição para se for numero
    result = input1 + input2
}
else{
    result = input1.toString() + input2.toString() // condição se for string
}
   
    return result
}

const combinePrices = userInput(10,20) // valores number

const combineNames = userInput('Apple','Avocado') // valores string