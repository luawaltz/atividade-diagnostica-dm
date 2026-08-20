
function verificarSituacao(nome, nota1, nota2, frequencia) {

  const media = (nota1 + nota2) / 2;
  let situacao = "";

  
  if (frequencia < 75) {
    situacao = "Reprovado por frequência";
  } 
  
  else if (media >= 7) {
    situacao = "Aprovado";
  } 
  
  else if (media >= 5 && media <= 6.9) {
    situacao = "Recuperação";
  } 

  else {
    situacao = "Reprovado por nota";
  }

  console.log("====================================");
  console.log("Aluno: " + nome);
  console.log("Média: " + media.toFixed(2));
  console.log("Frequência: " + frequencia + "%");
  console.log("Situação: " + situacao);
  console.log("====================================\n");
}

verificarSituacao("Mariana Alves", 7.0, 8.0, 82);

verificarSituacao("Lucas Pereira", 9.0, 9.0, 60);

verificarSituacao("Beatriz Lima", 6.0, 5.5, 80);

verificarSituacao("Carlos Eduardo", 4.0, 3.0, 90);