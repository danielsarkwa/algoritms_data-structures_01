/**
 * This works by sorting the large values
 */

function bubbleSort(arr) {
    var noSwaps;
    // loop the array in a linear order from the end
    for(var i = arr.length; i > 0; i--) {
        // move the bigger number to the top
        for(var j = 0; j < i - 1; j++) {
            noSwaps = true;
            if(arr[j] > arr[j + 1]) {
                // SWAP
                // temporarily hold the big value
                var temp = arr[j];
                // set the big value position to be the small
                arr[j] = arr[j + i];
                // set the small value prev position to be the big
                arr[j + i] = temp; 
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }

    return arr;
}

bubbleSort([40, 37, 54, 3, 65, 2, 56, 6]);