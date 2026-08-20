
function calcularInternetRestante(totalContratado, quantidadeUtilizada) {

  if (quantidadeUtilizada >= totalContratado) {
    return 0;
  }
  return totalContratado - quantidadeUtilizada;
}

const classificarConsumo = (totalContratado, quantidadeRestante) => {
 
  if (totalContratado <= 0) return "Plano esgotado";

  const percentualRestante = (quantidadeRestante / totalContratado) * 100;

  if (quantidadeRestante === 0) {
    return "Plano esgotado";
  } else if (percentualRestante > 50) {
    return "Consumo normal";
  } else if (percentualRestante >= 20 && percentualRestante <= 50) {
    return "Atenção ao consumo";
  } else {
    return "Limite próximo do fim";
  }
};

function exibirRelatorioInternet(total, utilizado) {
  const restante = calcularInternetRestante(total, utilizado);
  const percentual = ((restante / total) * 100).toFixed(0);
  const situacao = classificarConsumo(total, restante);

  console.log("====================================");
  console.log(`Internet contratada: ${total} GB`);
  console.log(`Internet utilizada:  ${utilizado} GB`);
  console.log(`Internet restante:   ${restante} GB`);
  console.log(`Percentual restante: ${percentual}%`);
  console.log(`Situação:            ${situacao}`);
  console.log("====================================\n");
}

console.log("--- TESTES DE CONTROLE DE INTERNET ---\n");

exibirRelatorioInternet(20, 12);

exibirRelatorioInternet(100, 30);

exibirRelatorioInternet(50, 42);

exibirRelatorioInternet(30, 35);