let arrayNew = [1, 15, 57, 7, 90, 5, 25, 8, 56, 9];

arrayNew.sort((a, b) => a - b);

// console.log(arrayNew);        // sorted array:-->>>>>>  [1, 5, 7, 8, 9, 15, 25, 56, 57, 90]
// let search=8;
// let start=0
// let end=arrayNew.length-1;
// // console.log(start,mid,end)

// while(start<=end){
//     let mid=Math.round((start+end)/2)
//     if(arrayNew[mid]>search){
//         // start=0;
//         end=arrayNew[mid];
//         // console.log(end)
//     }
//     else if(arrayNew[mid]<search){
//         start=arrayNew[mid];
//     }
    
// }
// console.log(end)

function binarySearch(array, numberToFind) {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		let middle = Math.floor((start + end) / 2);

		if (array[middle] === numberToFind) {
			return middle;
		} else if (array[middle] < numberToFind) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}

	return false;
}

let numbers = [2, 6, 8, 9, 10];
let toFind = 10;
let findNumber = binarySearch(numbers, toFind);

if (findNumber !== false) {
	console.log(`${toFind} has been found at position ${findNumber}.`);
} else {
	console.log(`${toFind} has not been found.`);
}

///////////////////////////////  with recursion  ///////////////////////////

function binaryRecursive(nums,numToFind,start,end){
       let mid= Math.floor((start+end)/2);
       
        if(nums[mid]==numToFind){
            return mid;
        }
        else if(numToFind>nums[mid]){
            return binaryRecursive(nums,numToFind,mid+1,end)
        }
        else{
            return binaryRecursive(nums,numToFind,start,mid-1)
        }
       
}
let numbs=[1,2,3,4,5,6,6,7,8,9]
let findd=6;

	let result10=binaryRecursive(numbs,findd,0,numbs.length-1)
console.log(`${findd} is present at ${result10}th index`)