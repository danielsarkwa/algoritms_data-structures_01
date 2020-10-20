/**
 * This works by sorting a portion of the array -- it inserts unsorted values into the sorted portions of the array
 * this helps stream data sorting
 */

 /** PSEUDO CODE
  *  start by picking the second element in the array
  *  compare the second element with the one before it and swap if necessary
  *  continue to the next element and if it is in the correct order, iterate through the sorted portion (ie: the left
  *     side to the place the element in the correct place)
  *  repeat until the array is sorted
  */

function insertedSort(arr) {
    for (let i = 1; i < arr.length; i++) { // start looping from the second element
        var currentVal = arr[i]; // hold the first value

        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) { // compare from the end
            if (arr[j] > currentVal) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = currentVal;
        }
    }
    return arr;
}

insertedSort([2, 1, 9, 76, 4]);