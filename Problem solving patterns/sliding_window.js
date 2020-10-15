function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    // check if the window length is valid
    if(arr.length < num) return null;

    // perform the first sum of the first window
    for(let i = 0; i < num; i++) {
        // add items one-by-one to the sum
        maxSum += arr[i];
    }

    tempSum = maxSum;

    // slide the window by removing the first item and then adding the next new item
    for(let i = num; i < arr.length; i++) {
        // add and remove item in array
        tempSum = tempSum - arr[i - num] + arr[i];
        // find and set the max sum by comparing the new calc sum and the tempSum
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

maxSubarraySum([2, 4, 3, 5, 8, 5, 3], 3);