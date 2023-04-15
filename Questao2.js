function isUniform(a) {
    if (a.length === 0) {
      return true;
    }
    
    let first = a[0];
    for (let i = 1; i < a.length; i++) {
      if (a[i] !== first) {
        return false; 
      }
    }
    
    return true;
  }

  let lista = [1,1,1,1];
console.log(isUniform(lista));