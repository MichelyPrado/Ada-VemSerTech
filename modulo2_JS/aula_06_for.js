//***Exercícios aula 06 ***
// 01 - Utilizando um loop for, calcule a soma dos números de 1 a 10 e imprima o resultado.(1+2=3+3=6+4=10+5=15)

let soma = 0;

for (let count = 1; count <= 10; count++){
    soma += count;
}
console.log(soma);

////////////////////////////////////////////////////////////////////////////////////////

// 02 - Crie um objeto representando uma pessoa com nome, idade e cidade.Utilize um loop for-in para imprimir no console todas as propriedades e os valores do objeto

const pessoa = {
    nome: "Michely",
    idade: 30,
    cidade: "São Paulo"
  }
  for (let propriedade in pessoa) {
    console.log(propriedade, ":", pessoa[propriedade]);
  }
  
///////////////////////////////////////////////////////////////////////////////////////

// 03- Crie um array com pelo menos 5 nomes de frutas.  Utilize um loop for-of para imprimir no console cada nome de fruta.
const array = ["morango", "uva", "banana", "limão", "laranja"];
 
    for (let fruta of array) {
    console.log(fruta);
    }

///////////////////////////////////////////////////////////////////////////////////////

// 04 - Escolha um número e imprima sua tabuada de 1 a 10 utilizando um loop for.Saída: 10 x 1 = 10

const n_user = Number(prompt("Digite um número:"));

for (let num = 0; num <= 10; num++){
    let tabuada = n_user * num;
    console.log(`${n_user} x ${num} = ${tabuada}`);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 05 - Crie um objeto com valores numéricos e utilize um loop for-in para calcular e imprimir a soma desses valores.

const valores = {
    valor1: 11,
    valor2: 22,
    valor3: 33,
    valor4: 44
}
let soma = 0;

for (let valor in valores) {
    soma += valores[valor];
}
console.log(`A soma dos valores é ${soma}`);


////////////////////////////////////////////////////////////////////////////////////////

// 06 - Faça um mecanismo de busca dentro de um array.
// [1,2,3,4,5,6,7,8,9,10] 
// Achei o numero 7

const array = [1,2,3,4,5,6,7,8,9,10];
const acharNumero = 12
let itemAchado = false;

for(let count = 0; count < array.length; count++){
    if(array[count] === acharNumero){
        itemAchado = true;
        break;
    }
}
console.log(itemAchado ? "Numero encontrado!" : "Numero não encontrado!");

////////////////////////////////////////////////////////////////

// 07 - Achei a logica: 1 1 2 3 5 8 13
// Agora, sua tarefa é criar um programa que recebe um número inteiro N como entrada e retorna os primeiros N termos da sequência

// Exemplo: Entrada: 6 Saída: [1, 1, 2, 3, 5, 8] 
// Entrada: 14 Saída: [1, 1, 2, 3, 5, 8, 13, …, 377]

const numUser = Number(prompt("Digite um número:"));

const array = [];

for(let i = 0; i < numUser; i++) {
    if(i <= 1) {
        array.push(1)
    }else {
        const soma = array[i - 1] + array[i - 2];
        array.push(soma)
    }
}
console.log(array)


// 08 - Crie um programa que pede ao usuário para inserir uma palavra e conta quantas vogais (a, e, i, o, u) ela contém. Utilize um loop for e estruturas condicionais if para realizar a contagem.

const palavraUser = prompt("Digite uma palavra:").toLowerCase();

let totalVogais = 0;

const vogaisPossiveis = ['a', 'á', 'à', 'ã', 'â', 'e', 'é', 'è', 'ê', 'i', 'í', 'ì', 'î', 'o', 'ó', 'ò', 'ô', 'õ', 'u', 'ú', 'ù', 'ü', 'û'];

const palavra = palavraUser.split('');

for (letras of palavra){
    if (vogaisPossiveis.includes(letras)) {
        totalVogais += 1;
    }
}
console.log(totalVogais);


////////////////////////////////////////////////////////////////////////////////////////

// 09 - Faça um mecanismo de ordenação de arrays;
// Mecanismo e um metodo que faz isso

const meuArray = [8, 3, 7, 1, -4, 0];

let ordena;

do {
    ordena = false;
        for(let index = 0; index <= meuArray.length; index++){
            if(meuArray[index] > meuArray[index + 1]){
                let nova = meuArray[index];
                meuArray[index] = meuArray[index + 1];
                meuArray[index + 1] = nova;
                ordena = true;
            } 
        }
    }while(ordena)
    console.log(meuArray)

// for(let i = 1; i < meuArray.length; i++)
//     for(let j = 0; j < meuArray.length; j++)
//         if (meuArray[i] < meuArray[j]) {
//             let nova = meuArray[i];
//             meuArray[i] = meuArray[j];
//             meuArray[j] = nova;
//         }
// console.log(meuArray);


//********usando método:

const meuArray = [8, 3, 7, 1, -4, 0];
console.log(meuArray.sort((a, b) => a - b));

////////////////////////////////////////////////////////////////////////////////////////

//10 - Fazer um simulador de rolagem de dados, que receba como input N dados de 6 lados e mostre as rolagens individuais e a soma dos valores?

const dadosUser = Number(prompt("Digite a quantidade de dados desejada:"));
let rolagensIndividuais = [];
let totalDados = 0;

console.log("******Rolagens individuais******");
for (let i = 1; i <= dadosUser; i++){
    let dado = Math.floor(Math.random() * 6) + 1;
    rolagensIndividuais.push(dado);
    totalDados += dado;
    console.log(`Dado ${i} : ${dado}`);
}
console.log(`Soma dos valores: ${totalDados} `);

///////////////////////////////////////////////////////////////////////////////////////
// 11 - Fazer um simulador de rolagem de dados, que receba como input N dados e N lados e mostre as rolagens individuais e a soma dos valores?
// Entradas:
// Quantidade de dados: 2
// Quantidade de lados: 9

const dadosUser = Number(prompt("Digite a quantidade de dados desejada:"));
const ladosUser = Number(prompt("Digite a quantidade de lados do(s) seu(s) dados:"));

let rolagensIndividuais = [];
let totalDados = 0;

console.log("******Rolagens individuais******");

for( let i = 1; i <= dadosUser; i++) {
    let dado = Math.floor(Math.random() * ladosUser) + 1;
    rolagensIndividuais.push(dado);
    totalDados += dado;
    console.log(`Dado ${i} : ${dado}`);
}
console.log(`Soma dos valores: ${totalDados}`);


////////////////////////////////////////////////////////////////////////////////////////

// 12 - Fazer um simulador de rolagem de dados, que receba como input N dados e N lados e quantidade de tentativas e mostre as rolagens individuais e a soma dos valores?

// Entradas:

// Quantidade de dados: 3
// Quantidade de lados: 9
// Quantidade de tentativas: 3

const dadosUser = Number(prompt("Digite a quantidade de dados desejada:"));
const ladosUser = Number(prompt("Digite a quantidade de lados do(s) seu(s) dados:"));
const tentativas = 3;
let rolagensIndividuais = [];
let count = 1;

while (count <= tentativas){
  let totalDados = 0;
  console.log(`Tentativa ${count}`);
  console.log("******Rolagens Individuais: ******");

  for( let i = 1; i <= dadosUser; i++) {
    let dado = Math.floor(Math.random() * ladosUser) + 1;
    rolagensIndividuais.push(dado);
    totalDados += dado;
    console.log(`Dado ${i} : ${dado}`);
  }
  count++;
  console.log(`A soma dos dados é ${totalDados}`);
}