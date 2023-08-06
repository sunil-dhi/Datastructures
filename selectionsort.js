

////selection sort 

function selectionsort(arr){
    for(let i=0;i<=arr.length-1;i++){

        for(j=0;j<=arr.length-1;j++){
            if(arr[i]<arr[j])
            {
              let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp
            }
        }
    }
    console.log(arr)
}
let array2=[5,6,8,7,1,5,7]
selectionsort(array2)