

// ////selection sort 

// function selectionsort(arr){
//     for(let i=0;i<=arr.length-1;i++){

//         for(j=0;j<=arr.length-1;j++){
//             if(arr[i]<arr[j])
//             {
//               let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp
//             }
//         }
//     }
//     console.log(arr)
// }
// let array2=[5,6,8,7,1,5,7]
// selectionsort(array2)

//HELPER FUNCTION
function selectionSort(arr, i) {
    if (i === 0) {
      return arr;
    }
    const min = Math.min(...arr.filter((x, j) => j < i));
    const index = arr.findIndex(x => x === min);
    arr.splice(index, 1);
    arr.push(min);
    return selectionSort(arr, --i);
  }
  
  const unsortedArr = [5, 34, 5, 1, 6, 7, 9, 2, 100];
  console.log('result', selectionSort(unsortedArr , unsortedArr.length))