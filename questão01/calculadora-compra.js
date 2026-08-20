
function calcularCompra(nomeProduto, precoUnitario, quantidade, formaPagamento) {
  const valorBruto = precoUnitario * quantidade;
  
  let descontoQuantidade = 0;
  let descontoPix = 0;

  if (valorBruto >= 200) {
    descontoQuantidade = valorBruto * 0.10;
  }

  if (formaPagamento.toLowerCase() === "pix") {
    descontoPix = valorBruto * 0.05;
  }

  const totalDescontos = descontoQuantidade + descontoPix;
  const valorFinal = valorBruto - totalDescontos;

  console.log("=== RESUMO DA COMPRA ===");
  console.log(`Produto: ${nomeProduto}`);
  console.log(`Preço Unitário: R$ ${precoUnitario.toFixed(2)}`);
  console.log(`Quantidade: ${quantidade}`);
  console.log(`Forma de Pagamento: ${formaPagamento.toUpperCase()}`);
  console.log(`Valor Bruto: R$ ${valorBruto.toFixed(2)}`);
  console.log(`Desconto por Valor (10%): R$ ${descontoQuantidade.toFixed(2)}`);
  console.log(`Desconto Pix (5%): R$ ${descontoPix.toFixed(2)}`);
  console.log(`Total de Descontos: R$ ${totalDescontos.toFixed(2)}`);
  console.log(`Valor Final a Pagar: R$ ${valorFinal.toFixed(2)}`);
  console.log("------------------------\n");
}

console.log("--- TESTE 1: Menos de R$ 200, Cartão (Sem descontos) ---");
calcularCompra("Camiseta", 50.00, 2, "cartao"); 

console.log("--- TESTE 2: R$ 200 ou mais, Dinheiro (Apenas 10% de desconto) ---");
calcularCompra("Tênis", 250.00, 1, "dinheiro"); 

console.log("--- TESTE 3: Menos de R$ 200, Pix (Apenas 5% de desconto) ---");
calcularCompra("Livro", 100.00, 1, "pix"); 

console.log("--- TESTE 4: R$ 200 ou mais, Pix (Descontos acumulados: 15%) ---");
calcularCompra("Monitor", 500.00, 1, "pix"); 