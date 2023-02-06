function matrixmul() {
    // Step 1: Get matrix size from the user for both matrices and compare them.
    let validInput = false;
    while (!validInput) {
      let m = prompt("Enter the number of rows for matrix A");
      let n = prompt("Enter the number of columns for matrix A");
      let p = prompt("Enter the number of rows for matrix B");
      let q = prompt("Enter the number of columns for matrix B");
      if (n != p) {
        alert("The column number of matrix A should be equal to the row number of matrix B.");
      } else {
        validInput = true;
      }
    }
  
    // Step 2: Store values in list for each matrix by prompting user to enter the values.
    let matrixA = [];
    for (let i = 0; i < m; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        let value = parseInt(prompt("Enter the value for matrix A [" + i + "][" + j + "]"));
        row.push(value);
      }
      matrixA.push(row);
    }
  
    let matrixB = [];
    for (let i = 0; i < p; i++) {
      let row = [];
      for (let j = 0; j < q; j++) {
        let value = parseInt(prompt("Enter the value for matrix B [" + i + "][" + j + "]"));
        row.push(value);
      }
      matrixB.push(row);
    }
  
    // Step 3: Calculate the product of matrix A and matrix B.
    let matrixC = [];
    for (let i = 0; i < m; i++) {
      let row = [];
      for (let j = 0; j < q; j++) {
        let sum = 0;
        for (let k = 0; k < n; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        row.push(sum);
      }
      matrixC.push(row);
    }

    console.log("Matrix A:");
    console.log(matrixA);
    console.log("Matrix B:");
    console.log(matrixB);
    console.log("Matrix C (product of matrix A and matrix B):");
    console.log(matrixC);
  }
  