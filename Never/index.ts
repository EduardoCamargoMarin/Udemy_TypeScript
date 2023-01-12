
function generateError(message:string, code:number):never{
    throw{
        message: message, 
        errorCode: code

    }
}

generateError('The application crashed', 500)

//evitou passar informação extra no console