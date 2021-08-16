// criando uma variável tipada - possui tipo
const isValid: boolean = true;
// do tipo number
const actualYear: number = 2020;
// do tipo string
const aula: string = "Iniciando com Typescript";

console.log(`${isValid} ${actualYear} ${aula}`)

// outros tipos de dados

let idade: any; // aceita qualquer valor. 
idade = 18;
idade = "dezoito";

// vetores - arrays
const meses: string[] = ["janeiro", "fevereiro", "março", "abril", "maio", "junho"]
const frutas: Array<string> = ["laranja", "banana", "maracuja"]
console.log(meses)
console.log(frutas)
// tuplas
const aluno: [string, number] = ["Alysson", 21]
console.log(aluno)

// numeração de variáveis
enum Tecnologias {
    Typescript, 
    Node,
    React,
    TypeORM,
    PostgreSQL
}

console.log(Tecnologias.React)

// criamos uma interface
interface Aluno {
    nome: string,
    idade: number,
    publica: boolean,
    notas: number[],
    calculaMedia(): void
}

const aluno1: Aluno = {
    nome: "Alysson",
    idade: 21,
    publica: true,
    notas: [6,7,8,9],
    calculaMedia(){
        let soma = this.notas.reduce((total, elemento) => total + elemento)
        console.log(soma/this.notas.length);
    }
}
console.log(aluno1);
console.log(aluno1.calculaMedia());

// vamos criar interfaces em TypeScript
interface Saudacao {
    bomDia(mensagem: string): void // função não retorna nada
    boaTarde(mensagem: string): void // função não retorna nada
    boaNoite(mensagem: string): void // função não retorna nada
}

class Superior {
    protected titulacao: string;

    constructor(titulacao: string){
        this.titulacao = titulacao;
    }
}

// criar classe que implementa a interface Saudacao
class Professor extends Superior implements Saudacao {
    private nome: string;

    // função construtora
    constructor(nome:string, titulacao: string){
        super(titulacao); // chama construtor da superclasse
        this.nome = nome;
    }
    // criar os métodos da interface
    public bomDia(mensagem: string): void {
        console.log(`${mensagem}, querido ${this.nome} com titulação ${this.titulacao}`)
    }
    public boaTarde(mensagem: string): void {
        console.log(`${mensagem}, querido ${this.nome} com titulação ${this.titulacao}`)
    }
    public boaNoite(mensagem: string): void {
        console.log(`${mensagem}, querido ${this.nome} com titulação ${this.titulacao}`)
    }
}

// exemplo de instância
let prof1 = new Professor("Daniel", "Doutor"); // chama construtor
prof1.bomDia("Seja bem-vindo, tenha um bom dia");
prof1.boaTarde("Tenha uma boa tarde");
prof1.boaNoite("Tenha uma boa noite")


