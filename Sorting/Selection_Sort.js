// function SelectionSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i; 
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     if (minIndex !== i) {
//     //   [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//   }
//   return arr;
// }
// console.log(SelectionSort([4, 1, 3, 9, 7]));


const selectionSort = (arr) => {
    let minElement;
    for (let i = 0; i < arr.length; i++) {
        minElement = i;
        for (let j = i+1; j < arr.length; j++) {
                if(arr[j] < arr[minElement]){
                minElement = j;
            }
        }
        [arr[i],arr[minElement]] = [arr[minElement],arr[i]]

    }
    return arr
  
}

console.log(selectionSort([4, 1, 3, 9, 7]))