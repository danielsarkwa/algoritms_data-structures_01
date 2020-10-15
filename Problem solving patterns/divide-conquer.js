function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <=max ) {
        // divide every single item
        let middle = Math.floor((min + max) / 2);
        // get the actual value
        let currentElement = arr[middle];

        // find where the item is placed in the array
        if(arr[middle] < val) {
            // set the min value for the search
            min = middle + 1;
        } else if(arr[middle] > val) {
            // set the max value for the search
            max = middle + 1;
        } else {
            return middle;
        }
    }

    return -1;
}