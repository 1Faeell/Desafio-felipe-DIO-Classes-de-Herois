class tipoClasse {
  constructor(nome = "👤 Guest", idade = 0, classe = "None") {
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;
  }
  mensagem() {
    let classeLower = this.classe.toLowerCase();
    let armas = [
      "Espada 💥",
      "Arco 🏹",
      "Magia ⚡",
      "Artes Marciais 🥋",
      "Katana 🥷",
    ];

    if (classeLower == "guerreiro") {
      this.ataque = armas[0];
    } else if (classeLower == "atirador" || classeLower == "arqueiro") {
      this.ataque = armas[1];
    } else if (classeLower == "mago") {
      this.ataque = armas[2];
    } else if (classeLower == "monge") {
      this.ataque = armas[3];
    } else if (classeLower == "ninja") {
      this.ataque = armas[4];
    } else if (classeLower) {
      this.ataque = "Socos básicos 🤜";
    } else {
      console.log("Insira as informações corretamente!");
      return;
    }

    console.log(
      `${this.nome} de classe ${this.classe} atacou usando ~> ${this.ataque}`
    );
  }
}

const faelClass = new tipoClasse("Rafael", 20, "guerreiro");
faelClass.mensagem();

const daiClass = new tipoClasse("Daiane", 20, "atirador");
daiClass.mensagem();

const ruanClass = new tipoClasse("Ruan", 22, "monge");
ruanClass.mensagem();

const igorClass = new tipoClasse("Igor", 28, "mago");
igorClass.mensagem();

const wendClass = new tipoClasse("Wenderson", 14, "ninja");
wendClass.mensagem();

const noneClass = new tipoClasse();
noneClass.mensagem();
