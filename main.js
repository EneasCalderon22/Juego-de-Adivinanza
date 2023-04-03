const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinar() {
  const numero = parseInt(document.getElementById('numero').value);
  
  if (isNaN(numero) || numero < 1 || numero > 100) {
    document.getElementById('resultado').innerHTML = 'Ingresa un número válido entre 1 y 100.';
  } else if (numero === numeroSecreto) {
    intentos++;
    document.getElementById('resultado').innerHTML = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
    document.getElementById('numero').disabled = true;
  } else if (numero < numeroSecreto) {
    intentos++;
    document.getElementById('resultado').innerHTML = 'El número que buscas es mayor.';
  } else if (numero > numeroSecreto) {
    intentos++;
    document.getElementById('resultado').innerHTML = 'El número que buscas es menor.';
  }
}
