
//Importações do Prompt e das funções cadastraMateria e exibir;
const prompt = require("prompt-sync")();
const cadastraMateria = require("./materia.js");
const exibir = require("./exibicao.js");

//Função principal que executa todo o programa
function main() {
    let continua = "SIM";
    let lista = [];

    //Lê o Nome do aluno
    let nome = prompt("Digite o nome do Aluno: ");
    console.log("");


    /*Repete o laço ate que um mínimo de 3 materias sejam cadastradas, 
    após isso pergunta ao usuário se deseja continuar a cada novo cadastro*/
    do {

        //Chama a função cadastro de materias e guarda o objeto retornado dentro de uma lista
        lista.push(cadastraMateria());

        if (lista.length >= 3) {

            continua = prompt("Quer cadastrar mais materias? Digite SIM, ou qualquer tecla para sair! ");

        }

    } while (continua.toUpperCase() === "SIM");
    
    //Chama a função exibir passando a lista de matérias e o nome do aluno cadastrados
    exibir(lista, nome);
}

//Chama a função principal e da inicio à execução do Programa
main();



