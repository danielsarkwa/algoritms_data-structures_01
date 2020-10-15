/**
 * This works by sorting the smaller values
 * 
 * this helps to reduce the number of movements between an array
 */

/** PSEUDO CODE
 *  store the first element as the first item you have so far
 *  compare the smallest value to the next item in the array until you find a smaller number
 *  if a smaller number is found designate the smallest value to be the new minimum and continue untill the end of the array
 *  if the minimun is not the value (index) you initially began with, swap the two values 
 *  repeat this with the next element untill the array is sorted
 * 
 *  Understand how the who algo will work to know where to place things
 */

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var lowest = i;
        for (let j = i + 1; j < arr.length; j++) { // this loops till the end of the array -- arr.length
            if (arr[j] < arr[lowest]) { // when the next item is smaller than the smallest item
                lowest = j;
            }
        }
        if (i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest]; // set the first item in the array to be the smallest value
            arr[lowest] = temp; // set the smallest value position to be for the initial first item
        }
    }
    return arr;
}

selectionSort([5, 3, 4, 5, 2, 1]);