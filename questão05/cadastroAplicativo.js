
const aplicativo = {
  nome: "Vida Pet",
  categoria: "Cuidados com animais",
  versao: "1.0.0",
  gratuito: true,
  quantidadeDownloads: 1500
};

const {
  nome,
  categoria,
  versao,
  gratuito,
  quantidadeDownloads
} = aplicativo;

const tipoAcesso = gratuito ? "Gratuito" : "Pago";

let popularidade = "";

if (quantidadeDownloads < 1000) {
  popularidade = "Pouco conhecido";
} else if (quantidadeDownloads >= 1000 && quantidadeDownloads <= 9999) {
  popularidade = "Em crescimento";
} else {
  popularidade = "Popular";
}

console.log("====================================");
console.log(`Aplicativo:               ${nome}`);
console.log(`Categoria:                ${categoria}`);
console.log(`Versão:                   ${versao}`);
console.log(`Quantidade de downloads:  ${quantidadeDownloads}`);
console.log(`Tipo de acesso:           ${tipoAcesso}`);
console.log(`Popularidade:             ${popularidade}`);
console.log("====================================");