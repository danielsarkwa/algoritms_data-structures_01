function sumZero(arr) {
    // for the first item in arr - first pointer
    let left = 0;
    // for the last item in arr - second pointer
    let right = arr.length - 1;

    // loop till the first pair is found
    while(left < right) {
        // add to know the value and direction to move
        let sum = arr[left] + arr[right];
        if (sum === 0) { // return and break the function
            return [arr[left], arr[right]];
        } else if(sum > 0) { // if sum is positive, move right pointer downwards
            right--;
        } else { // move left pointer upwards, if the number is negative
            left++;
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

// principle
    // the more we move down from the right the closer we get to 0
        // --- move when the sum is greater than 0
        /* --- this also means the value on the right natural number is 
            bigger, therefore the number on the right is not eligible */
    // the more we move up from left the closer we get to 0 as well
        // --- move when the sum is less than 0
        /* --- this also means the value on the left natural number is 
            smaller, therefore the number on the left is not eligible */