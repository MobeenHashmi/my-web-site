function QFormula(a, b, c) {
    var x1, x2;
    var disc = b * b - 4 * a * c;
    
    if (disc > 0) {
      x1 = (-b + Math.sqrt(disc)) / (2 * a);
      x2 = (-b - Math.sqrt(disc)) / (2 * a);
      return [x1, x2];
    } else if (disc === 0) {
      x1 = -b / (2 * a);
      return [x1];
    } else {
      return [];
    }
  }
  