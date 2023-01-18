
class Movies {
   readonly id:number // pode acessar fora da classe mas não pode alterar
   readonly name: string

    constructor( id:number, name:string) {
        this.id = id,
        this.name = name
    }
}

let movie1  = new Movies(1,'Sobrenatural')

console.log(movie1)