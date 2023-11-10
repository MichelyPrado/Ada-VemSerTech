// ******01 - Verificação de Números Pares e Ímpares******

// Escreva um programa que recebe um número como entrada e verifica se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for ímpar.

//Ternário
const numero = Number(prompt("Digite um número"))

const par_impar = (numero % 2 == 0) ? console.log("É par!") : console.log("É ímpar");


// If/else
const numero = Number(prompt("Digite um número"))

if (numero % 2 == 0) {
    console.log("É par!");
} else if (numero % 2 == 1) {
    console.log("É impar!")
}
////////////////////////////////////////////////////////////////////////////////////////
// ******02 - Verificação de Nota******

// Crie um programa que recebe uma nota como entrada e atribui uma mensagem com base na nota. Use as seguintes regras:

// Se a nota for maior ou igual a 90, imprima "Aprovado".
// Se a nota for maior ou igual a 70 e menor que 90, imprima "Aprovado com mérito". 
// Se a nota for menor que 70, imprima "Reprovado".

const nota = Number(prompt("Digite a nota"))

if (nota >= 90) {
    console.log("Aprovado")
} else if (nota >= 70 && nota < 90) {
    console.log("Aprovado com mérito")
} else if (nota < 70) {
    console.log("Reprovado")
}

////////////////////////////////////////////////////////////////////////////////////////
// ******03 - Determinação do Maior Número******

// Escreva um programa que recebe três números como entrada e determina o maior deles. Imprima o número mais alto.

const numeroUm = Number(prompt("Digite o primeiro número"))
const numeroDois = Number(prompt("Digite o segundo número"))
const numeroTres = Number(prompt("Digite o terceiro número"))

if (numeroUm > numeroDois && numeroUm > numeroTres) {
    console.log("O maior número é o " + numeroUm)
} else if (numeroDois > numeroUm && numeroDois > numeroTres) {
    console.log("O maior número é o " + numeroDois)
} else if (numeroTres > numeroUm && numeroTres > numeroDois) {
    console.log("O maior número é o " + numeroTres)
}

////////////////////////////////////////////////////////////////////////////////////////
// ******04 - Verificação de Triângulo******

// Crie um programa que recebe três comprimentos de lados de um triângulo como entrada e determina se eles formam um triângulo equilátero (Todos os lados são iguais), isósceles (Dois lados são iguais) ou escaleno (Se nada é igual). Imprima a classificação do triângulo.

const ladoUm = Number(prompt("Digite o primeiro comprimento"))
const ladoDois = Number(prompt("Digite o segundo comprimento"))
const ladoTres = Number(prompt("Digite o terceiro comprimento"))

if (ladoUm == ladoDois && ladoUm == ladoTres && ladoDois == ladoTres) {
    console.log("triângulo equilátero")
} else if (ladoUm == ladoDois || ladoUm == ladoTres || ladoDois == ladoTres) {
    console.log("triângulo isósceles")
} else {
    console.log("triângulo escaleno")
}

////////////////////////////////////////////////////////////////////////////////////////
// ******05 - Verificação de Ano Bissexto******

// Desenvolva um programa que receba um ano como entrada e verifica se ele é bissexto ou não. Um ano bissexto é aquele que é divisível por 4, exceto por anos que são divisíveis por 100, a menos que sejam divisíveis por 400. Imprima "Ano bissexto" ou "Não é um ano bissexto" com base na entrada. (2000, 1996) 

const ano = Number(prompt("Digite um ano"))

// Ternário
const bissexto = (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) ? console.log("O ano é bissexto") : console.log("O ano não é bissexto") 


// If/else

const ano = Number(prompt("Digite um ano"))

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("O ano é bissexto")
} else {
    console.log("O ano não é bissexto")
}

////////////////////////////////////////////////////////////////////////////////////////
// ******06 - Verificação de Idade para Compra de Bebida Alcoólica******

// Crie um programa que verifica a idade de uma pessoa e determina se ela pode comprar bebidas alcoólicas ou não. Se a pessoa tiver 18 anos ou mais, ela pode comprar bebidas alcoólicas; caso contrário, não pode.

    // Ternário
    const idade = Number(prompt("Digite sua idade"))

    idade >= 18 ? console.log("Permitido") : console.log("Não Permitido");

    // If/else

    const idade = Number(prompt("Digite sua idade"))

    if(idade >= 18) {
        console.log("Permitido")
    } else {
        console.log(" Não Permitido")

    }

////////////////////////////////////////////////////////////////////////////////////////