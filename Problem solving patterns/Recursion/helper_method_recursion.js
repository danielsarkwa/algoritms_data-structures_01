function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) return 0;

        // check if the item is odd
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput);
        }

        helperInput(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 46, 34]);