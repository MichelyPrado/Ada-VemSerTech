// ******01 - Contagem Regressiva******

// Escreva um programa que use um loop while para contar de 10 até 1 e imprima cada número na tela, em ordem decrescente.

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

////////////////////////////////////////////////////////////////////////////////////////
// ******02 - Números Primos******

// Crie um programa que peça ao usuário para inserir um número e use um loop while para verificar se o número é primo ou não. Um número primo é aquele que só é divisível por 1 e por ele mesmo. Imprima se o número é primo ou não.

const n_user = Number(prompt("Digite um número aleatório:"));
let isPrimo = true;

while (n_user % 2 === 0) { 
    isPrimo = false; 
    break; 
} 
if (isPrimo) {
    alert("Esse número é primo")
} else {
  alert("Esse número não é primo")
}
////////////////////////////////////////////////////////////////////////////////////////
******03 - Soma de Números Pares******

Desenvolva um programa que peça ao usuário para inserir números inteiros. Use um loop while para calcular a soma dos números pares inseridos pelo usuário. Pare a entrada quando o usuário inserir 0 e exiba a soma total.

let pares = 0;

while(true){
    const n_user = Number(prompt("Digite um número:"));
    if(n_user === 0) {
    break;    
    }
    if (n_user % 2 === 0){
        pares += n_user;
    }
}
console.log("Soma dos números pares:", pares);


// ******04 - Adivinhe o Número******

// Crie um programa que gere um número aleatório entre 1 e 100. Em seguida, peça ao usuário para adivinhar o número. Use um loop while para continuar pedindo ao usuário que adivinhe até que ele acerte o número. Forneça dicas informando se o número é maior ou menor.

const n_aleatorio = parseInt(Math.random() * 100) + 1;

let n_user = Number(prompt("Tente acertar um número de 1 a 100: "));

while (n_user !== n_aleatorio) {
    if (n_user > n_aleatorio){
        alert("o número é menor!");   
    } else {
        alert("o número é maior!");
    } 
    n_user = Number(prompt("Tente outra vez: ")); 
}

alert(`Você acertou, ${n_aleatorio}`);

///////////////////////////////////////////////////////////////////////

// ******05 - Jogo de Adivinhação com Limite******

// Modifique o jogo de adivinhação do Exercício 2 para limitar o número de tentativas. Se o usuário não adivinhar o número dentro de um determinado número de tentativas (por exemplo, 5 tentativas), o programa deve encerrar e informar o número correto.

const n_aleatorio = parseInt(Math.random() * 100) + 1;

let tentativa = 1; // Inicializa o contador de tentativas com 1

while (tentativa <= 5) {
    let n_user = Number(prompt("Tente acertar um número de 1 a 100: "));

    if (n_user === n_aleatorio) {
        alert(`Você acertou, ${n_aleatorio}`);
        break; // Se o usuário acertar, sai do loop
    } else if (n_user > n_aleatorio) {
        alert("O número é menor!");
    } else {
        alert("O número é maior!");
    }

    tentativa++; // Incrementa o contador de tentativas
}

if (tentativa > 5) {
    alert(`Você ultrapassou suas tentativas. O número correto é ${n_aleatorio}`);
}
  
//////////////////////////////////////////////////////////////////////////////////////
06 - Criar o jogo da Velha




