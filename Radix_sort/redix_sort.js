// get the exact digit position
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// count the number of digits in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// find the larget digits a number can have
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    // get to know how many times to loop through the nums -- array
    let maxDigitsCount = mostDigits(nums);
    // loop using the digit positions; from 0-10
    for (let k = 0; k < maxDigitsCount; k++) {
        // hold the grouped results for a while, will they are all sorted
        let digitBuckets = Array.from({length: 10}, () => []);
        // get the last digits of the nums
        for (let i = 0; i < nums.length; i++) {
            // put each num in the right bucket
            digitBuckets[getDigit(nums[i], k)].push[nums[i]];
        }
        // save the elements to the nums for regrouping
        nums = [].concat(...digitBuckets);
    }

    return nums;
}