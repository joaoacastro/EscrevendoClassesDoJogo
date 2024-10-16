class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    }
    return ataque;
  }
}

let Crash = new heroi("Crash", "15", "guerreiro");

console.log(
  `O ${Crash.tipo} de nome ${Crash.nome} atacou usando ${Crash.atacar()}.`
);
