class heroi{
    constructor(nome, idade, tipo){
this.nome = nome;
this.idade = idade;
this.tipo = tipo;

    }

Ataque(){

    let Ataque;
    
    switch(this.tipo){
       
        case "Mago":
        Ataque = "magia"
        console.log(`O ${this.tipo} atacou usando ${Ataque}!\n`)
        break;

        case "Guerreiro":
            Ataque = "espada"
        console.log(`O ${this.tipo} atacou usando ${Ataque}!\n`)
        break;

        case "Monge":
            Ataque = "artes marciais"
        console.log(`O ${this.tipo} atacou usando ${Ataque}!\n`)
        break;
        
        case "Ninja":
            Ataque = "shuriken"
        console.log(`O ${this.tipo} atacou usando ${Ataque}!\n`)
        break;
    }
}

}

const heroi1 = new heroi("Maguin", 113, "Mago")
const heroi2 = new heroi("Guerreirin", 24, "Guerreiro")
const heroi3 = new heroi("Mongin", 81, "Monge")
const heroi4 = new heroi("Ninjin", 28, "Ninja")

heroi1.Ataque()
heroi2.Ataque()
heroi3.Ataque()
heroi4.Ataque()
