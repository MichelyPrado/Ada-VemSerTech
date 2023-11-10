// ******07 - Verificação de Números Pares e Ímpares******

// Escreva um programa que recebe um número como entrada e verifica se é par ou ímpar. 
//Imprima "É par" se for par e "É ímpar" se for ímpar. (Usar switch Case)

const numero = prompt("Digite um número")
const divisao = numero % 2
switch(divisao) {
    case 0:
        console.log("É par");
        break;
    case 1:
        console.log("É ímpar");
        break;
}
////////////////////////////////////////////////////////////////////////////////////////

// ******08 - Conversão de Notas em Conceitos******

// Faça um programa que peça ao usuário para digitar uma letra e verifique se é uma vogal ou uma consoante utilizando o comando switch case. Se o usuário digitar uma vogal (a, e, i, o, u), o programa deve exibir a mensagem "É uma vogal". Se o usuário digitar uma consoante, o programa deve exibir a mensagem "É uma consoante".

const letra = prompt("Digite uma letra").toLocaleLowerCase()

switch(letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("É uma vogal");
        break;
    default:
        console.log("É uma consoante");
}

///////////////////////////////////////////////////////////////////////////////////////
//09 - Determinação de Estação do Ano

// Escreva um programa que recebe o nome de um mês como entrada e utiliza um switch case para determinar a estação do ano correspondente. Use a seguinte correspondência de meses:

// Dezembro, Janeiro, Fevereiro: "Inverno" Março, Abril, Maio: "Primavera" Junho, Julho, Agosto: "Verão" Setembro, Outubro, Novembro: "Outono"

const estacao = prompt("Escolha um mês do ano").toLocaleLowerCase();

switch(estacao) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
        console.log("Inverno");
        break;
    case "março":
    case "abril":
    case "maio":
        console.log("Primavera");
        break;
    case "junho":
    case "julho":
    case "agosto":
        console.log("Verão");
        break;
    case "setembro":
    case "outubro":
    case "novembro":
        console.log("Outono é sempre igual as folhas caem no quintal!");

        
}

////////////////////////////////////////////////////////////////////////////////////////