/**
 * This works by sorting the large values
 */

function bubbleSort(arr) {
    // loop the array in a linear order from then end
    for(var i = arr.length; i > 0; i--) {
        for(var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j + 1]) {
                // SWAP
                // temporarily hold the big value
                var temp = arr[j];
                // set the big value position to be the small
                arr[j] = arr[j + i];
                // set the small value prev position to be the big
                arr[j + i] = temp;   
            }
        }  
        console.log('one cycle complete');
    }

    return arr;
}

bubbleSort([40, 37, 54, 3, 65, 2, 56, 6]);