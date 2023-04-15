
const numeros = [2, 5, 15, 7, 2, 8, 4];
console.log(max(numeros));

function max(numeros) {
    if (numeros.length === 0) {
      return undefined;
    }
    let max_atual = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > max_atual) {
        max_atual = numeros[i];
      }
    }
    return max_atual;
  }