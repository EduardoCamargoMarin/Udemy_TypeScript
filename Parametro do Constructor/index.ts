

class Movie {
  //  readonly id:number 
  //   name: string
 
     constructor( public readonly id:number, public readonly name:string, private _price:number) { // apenas adicionando o publica não precisa usar o this
        // this.id = id,
        // this.name = name
     }
 }
 
 let movie2  = new Movies(1,'Sobrenatural', 20)
 
 console.log(movie2)