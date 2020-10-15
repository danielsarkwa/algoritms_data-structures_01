/* write a function that accepts two arrays, it should return true if every value in the array 
   has a corresponding value squared in the second array the frequency of values should be the same
*/

function same(arr1, arr2) {
    // check if the arrays have the same length
    if(arr1.length !== arr2.length) {
        return false;
    }

    // count the item in the arrays
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // count the frequency of the item in arr1
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1 || 0) + 1;
    }
    // count the frequency of the item in arr2
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2 || 0) + 1;
    }

    // check if arr1 items' square values are in arr2 and are at the right frequency
    for(let key in frequencyCounter1) {
        // return false arr1 item's square is not in the arr2
        if(!(key **2 in frequencyCounter2)) {
            return false;
        }
        // check if arr1 item's square frequency is correct in arr2
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}


console.log(same([1, 2, 3, 5], [1, 4, 9, 25]));