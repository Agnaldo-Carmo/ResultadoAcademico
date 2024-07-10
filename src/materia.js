//Importação do Prompt
const prompt = require("prompt-sync")();

//Função para o cadastro de Notas
function cadastraNotas() {
    let nota;
    let notas = [];
    let i = 0;

    //repete o laço até que 3 notas validas sejam digitadas
    while (i < 3) {

        nota = prompt("Digite uma nota: ");
        console.log("");

        //Validação para garantir que a nota digitada seja um numero positivo entre 0 e 10
        if (isNaN(nota) || nota < 0 || nota > 10) {

            console.log("Nota Invalida, digite um valor numerico positivo entre 0 e 10! Ex.(9.5)");

        } else {
            notas.push(nota);
            i++;
        }
    }

    //Retorna uma lista contendo 3 notas
    return notas;
}

//Função para calcular a média
function calculaMedia(notas) {

    let media = 0;
    let sum = 0;

    /*navega pela lista de notas e salva a soma dos valores em uma variavel
     garantindo a conversão para float*/
    notas.forEach(element => {

        sum += parseFloat(element);

    });

    //calcula a media e retorna um valor float fixado em 1 casa decimal
    media = sum / 3;

    return media.toFixed(1);
}

//Função para o cadastro de faltas
function cadastraFaltas() {

    let faltas;

    //Lê o valor digitado convertendo para numérico
    faltas = Number(prompt("Digite o numero de faltas do aluno: "));
    console.log("");


    /*Faz uma validação garantindo que o numero de faltas seja positivo e inteiro,
    chama recursivamente a função até que um valor válido tenha sido digitado*/

    if (faltas < 0 || !Number.isInteger(faltas)) {

        console.log("O numero de faltas deve ser um valor inteiro e positivo, favor digite novamente");
        console.log("");
        faltas = cadastraFaltas();
    }

    return faltas;

}

//Função que irá determinar a aprovação ou reprovação do aluno
function determinarAprovacao(materia) {

    //Se obteve media e está dentro do limite de faltas
    if (materia.Media >= 6 && materia.Faltas <= 5) {

        return "Aprovado";
    }

    //Se obteve media e estourou o limite de faltas
    else if (materia.Media >= 6 && materia.Faltas > 5) {

        return "Reprovado por faltas";
    }

    //Se não obteve media e está dentro do limite de faltas
    else if (materia.Media < 6 && materia.Faltas <= 5) {

        return "Reprovado por Nota";
    }

    //Se não obteve media e estourou o limite de faltas
    else if (materia.Media < 6 && materia.Faltas > 5) {

        return "Reprovado por Nota e Faltas";
    }
}


//Função para o cadastro de matérias
function cadastraMateria() {

    //Instancia um novo objeto e preenche cada dado chamando as respectivas funções
    let materia = new Object();

    materia["Titulo"] = prompt("Digite o nome da Materia: ");
    console.log("");

    materia["Notas"] = cadastraNotas();

    materia["Media"] = calculaMedia(materia.Notas);

    materia["Faltas"] = cadastraFaltas();

    materia["Situacao"] = determinarAprovacao(materia);

    //retorna um objeto materia
    return materia;

}

//Exporta a função cadastraMateria
module.exports = cadastraMateria;



