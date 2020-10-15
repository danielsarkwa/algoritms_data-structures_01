function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    // create first pointer
    var i = 0;
    // create scout pointer for arr, to start at the second value
    for (let j = 1; j < arr.length; j++) {
        // if the last i is not equal to the last j, then move the i to the next value
        // this means that all the items before the current i are unique
        if (arr[i] !== arr[j]) {
            // move the i forward
            i++;
            // set the next value to be the next unique value
            arr[i] = arr[j]
        }
    }

    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6]));