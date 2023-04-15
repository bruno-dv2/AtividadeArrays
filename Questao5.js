function contains(array, elemento) {
    return array.includes(elemento);
  }

const numeros = [1, 2, 3, 4, 5];
console.log(contains(numeros, 3));  
console.log(contains(numeros, 6));

function contains(array, elemento) {
    if (!Array.isArray(array)) {
      return false;
    }
    return array.includes(elemento);
  }

  