function sumArray(soma) {
    let sum = 0;
    for (let i = 0; i < soma.length; i++) {
      sum += soma[i];
    }
    return sum;
  }
  
  let numbers = [5, 5, 5, 5];
  let result = sumArray(numbers);
  console.log(result);