function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    // add items of the first array to the lookup with it's frequency
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      // lookup[letter] = (lookup[letter] || 0) + 1;
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
  
    // check if the itesm in the second array are the same and are also in the accurate frequency
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0, s:1}
  console.log(validAnagram('anagrams', 'angramsa'));