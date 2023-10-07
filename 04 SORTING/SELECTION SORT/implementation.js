function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        minIndex = i;

        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}

const arr = [2,46,89,45,1,29,29]
selectionSort(arr)
console.log(arr)