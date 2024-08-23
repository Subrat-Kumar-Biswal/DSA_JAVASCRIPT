function missingNumber(a, N) {
    // Outer loop that runs from 1 to N:
    for (let i = 1; i <= N; i++) {
      // flag variable to check if an element exists
      let flag = 0;
  
      // Search the element using linear search:
      for (let j = 0; j < N - 1; j++) {
        if (a[j] === i) {
          // i is present in the array:
          flag = 1;
          break;
        }
      }
  
      // check if the element is missing (i.e., flag === 0):
      if (flag === 0) {
        return i;
      }
    }
  
    // The following line will never execute.
    // It is just to avoid warnings.
    // return -1;
  }
  

console.log(missingNumber([1, 2,  4, 5], 6))