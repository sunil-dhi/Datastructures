function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
  return arr;
}

let array5 = [2, 5, 8, 6, 5, 7];
console.log(insertionSort(array5));
