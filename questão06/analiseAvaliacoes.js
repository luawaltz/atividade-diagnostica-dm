
const avaliacoes = [5, 8, 7, 10, 6, 9, 4];


let soma = 0;
let qtdNegativas = 0;
let qtdRegulares = 0;
let qtdPositivas = 0;


let maiorAvaliacao = avaliacoes[0];
let menorAvaliacao = avaliacoes[0];

console.log("--- DETALHAMENTO DAS AVALIAÇÕES ---\n");


for (let i = 0; i < avaliacoes.length; i++) {
  const nota = avaliacoes[i];
  let classificacao = "";

  // Classificação da avaliação
  if (nota < 5) {
    classificacao = "Avaliação negativa";
    qtdNegativas++;
  } else if (nota >= 5 && nota <= 7) {
    classificacao = "Avaliação regular";
    qtdRegulares++;
  } else {
    classificacao = "Avaliação positiva";
    qtdPositivas++;
  }

  console.log(`Posição: ${i} | Nota: ${nota} | Classificação: ${classificacao}`);


  soma += nota;


  if (nota > maiorAvaliacao) {
    maiorAvaliacao = nota;
  }
  if (nota < menorAvaliacao) {
    menorAvaliacao = nota;
  }
}


const media = soma / avaliacoes.length;


console.log("\n====================================");
console.log("Resumo das avaliações");
console.log("====================================");
console.log(`Quantidade de avaliações: ${avaliacoes.length}`);
console.log(`Soma das avaliações:       ${soma}`);
console.log(`Média das avaliações:      ${media.toFixed(2)}`);
console.log(`Avaliações negativas:     ${qtdNegativas}`);
console.log(`Avaliações regulares:     ${qtdRegulares}`);
console.log(`Avaliações positivas:     ${qtdPositivas}`);
console.log(`Maior avaliação:          ${maiorAvaliacao}`);
console.log(`Menor avaliação:          ${menorAvaliacao}`);
console.log("====================================");