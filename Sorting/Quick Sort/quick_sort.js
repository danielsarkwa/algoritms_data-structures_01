/** PESUDO CODE - PIVIT HELPER
 *  GOAL - get the first item, put it at the right spot
 */

function pivot(arr, start=0, end=arr.length - 1) {
    const swap = (array, idx1, idx2) =>
        ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);

    var pivot = arr[start];
    var swapIdx = start; // where we are moving the pivot to at the end of the search

    // start after the first item
    for (var i = start + 1; i < arr.length; i++) {
        // when you find an element greater than the pivot
        if(pivot > arr[i]) {
            swapIdx++;
            // move all item that a smaller than the pivot to one side
                // then swap pivot with the last last item
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // get the first index on the main array
        let pivotIndex = pivot(arr, left, right); // idx = 3 
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);

// [2, 1, 3, 4, 8, 5, 6, 7] // 3
// [1, 2, 3, 4, 8, 5, 6, 7] // 1
// [1, 2, 3, 4, 8, 5, 6, 7] // 0
// [1, 2, 3, 4, 8, 5, 6, 7] // left = right // false