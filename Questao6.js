function inverte(array) {
    return array.slice().reverse();
  }

const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = inverte(numeros);
console.log(numerosInvertidos);

function inverte(array) {
    if (!Array.isArray(array)) {
      return [];
    }
    return array.slice().reverse();
  }
  