
let nivelBateria = 100;
const consumoPorCiclo = 15;

console.log("--- SIMULAÇÃO DE CONSUMO DE BATERIA ---\n");

while (nivelBateria > 0) {
 
  nivelBateria = nivelBateria - consumoPorCiclo;
  
  if (nivelBateria < 0) {
    nivelBateria = 0;
  }

  console.log(`Nível da bateria: ${nivelBateria}%`);

  if (nivelBateria === 0) {
    console.log("Bateria descarregada.");
  } else if (nivelBateria <= 20) {
    console.log("Aviso: bateria baixa!");
  }
}