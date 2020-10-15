/** PESUDO CODE -- merging the arrays
 *  create an empty array, take a look at the smallest values in each input array
 *  while there are sill values we haven't looked at...
 *      - if the value in the first array is smaller than value in the second array, push the value in the first array
 *          into our result and move on to the next value in the first array
 *      - if the value in the first array is larger than the value in the second array, push the value in the second array
 *          into our result and move on to the next value in the second array
 *      - once we have exhaused the one array, push in all the remaining values from the other array
 */

function mergeArray(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    // loop only when there is something to look at in the any of the arrays
    while(i < arr1.length && j < arr2.length) {
        // when the element in the first array is smaller -- add it to the results
        /** CHANGE MOVEMENT IN CHECKING
         *  since the arrays are sorted changing the movement will help merge efficiently
         *  the is high probability of finding the next small item
         */
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            // move the pointer in the first array forward
            i++;
        } else { // when the element in the second array is smaller -- add it to the results
            results.push(arr2[j]);
            // move the pointer in the second array forward
            j++;
        }
    }

    // when on of the items reaches the end
    // --------
    // check if this has unlooked items
    while(i < arr1.length) {
        results.push(arr1[i]);
        // move the pointer in the first array forward
        i++;
    }
    
    // check if this has unlooked items
    while(j < arr2.length) {
        results.push(arr2[j]);
        // move the pojnter jn the first array forward
        j++;
    }

    return results;
}


/** PESUDO CODE 
 *  break up the array into halves untill you have arrays that have empty or have one element
 *  once you you have a smaller sorted arrays, merge those arrays with other sorted arrays untill you are
 *   back at the full length of the array
 **/

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length / 2);

    // break the array down till you meet the condition -- arr.length <= 1
    let left = mergeSort(arr.slice(0, midPoint));
    // break the array down till you meet the condition -- arr.length <= 1
    let right = mergeSort(arr.slice(midPoint));

    // add the items all the way up till we get a single array and return it
    return mergeArray(left, right);
}

mergeSort([76, 5, 10,24, 564, 32, 73]);