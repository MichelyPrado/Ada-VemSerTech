// ******04 - Adivinhe o Número******

// Crie um programa que gere um número aleatório entre 1 e 100. Em seguida, peça ao usuário para adivinhar o número. Use um loop while para continuar pedindo ao usuário que adivinhe até que ele acerte o número. Forneça dicas informando se o número é maior ou menor.

const n_aleatorio = parseInt(Math.random() * 100) + 1;

let n_user = Number(prompt("Tente acertar um número de 1 a 100: "));

while (n_user !== n_aleatorio) {
    if (n_user > n_aleatorio){
        alert("o número é menor!");
        n_user = Number(prompt("Tente outra vez: "));
    } else if (n_user < n_aleatorio){
        alert("o número é maior!");
        n_user = Number(prompt("Tente outra vez: "));
    } else {
        alert(`Você acertou, ${n_aleatorio}`);
    }
}


///////////////////////////////////////////////////////////////////////

// ******05 - Jogo de Adivinhação com Limite******

// Modifique o jogo de adivinhação do Exercício 2 para limitar o número de tentativas. Se o usuário não adivinhar o número dentro de um determinado número de tentativas (por exemplo, 5 tentativas), o programa deve encerrar e informar o número correto.

const n_aleatorio = parseInt(Math.random() * 100) + 1;

let tentativa = 5;

while (tentativa <= 5) {
    const n_user = Number(prompt("Tente acertar um número de 1 a 100: "));

    if (n_user > n_aleatorio){
        alert("o número é menor!");
        n_user = Number(prompt("Tente outra vez: "));
    } else if (n_user < n_aleatorio){
        alert("o número é maior!");
        n_user = Number(prompt("Tente outra vez: "));
    } else {
        alert(`Você acertou, ${n_aleatorio}`);
    }
    tentativa++;

    if (tentativa === 5) {
        alert(`Você ultrapassou suas tentativas. O número correto é ${n_aleatorio}`);
    }
    
}



