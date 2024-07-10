//Função para preparar a tela e tratar os dados para uma melhor exibição
function exibir(lista, nome) {

    console.log("");
    console.log("-----------------------------------------------------------------------------------");
    console.log("");

    //Exibe uma mensagem junto com o nome do aluno cadastrado
    console.log(`O resultado acadêmico do aluno ${nome} é: `);
    console.log("");

    //Navega pela lista de objetos materia e concatena a mensagem de exibição com o valor de cada campo
    lista.forEach(element => {

        console.log(`Materia: ${element.Titulo}`);
        console.log("");
       
        /*Navega pela lista de notas contida dentro de cada objeto materia,
        exibindo a mensagem concatenada aos valores*/
        element.Notas.forEach((value, i) => { console.log(`Nota ${i + 1}: ${value}` + " "); })
        console.log("");

        console.log(`Media: ${element.Media}`);
        console.log("");
        console.log(`Faltas: ${element.Faltas}`);
        console.log("");
        console.log(`Situação: ${element.Situacao}`);
        console.log("");
        console.log("-----------------------------------------------------------------------------------");
    });
    console.log("");
}

//Exporta função exibir
module.exports = exibir;
