function naive_string(long, short) {
    var count = 0;
    // go through the long item one after the other 
    for(var i = 0; i < long.length; i++) {
        // go through the short item to find the continous match
        for(var j = 0; j < short.length; j++) {
            if(short[j] !== long[i + j]) break;
            // there is a match
            if(j === short.length - 1) count++;     
        }
    }
    return count;
}

console.log(naive_string('lorie loledlol', 'lol'));
