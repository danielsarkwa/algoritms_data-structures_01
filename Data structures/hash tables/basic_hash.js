function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 13;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        // char here is a single string
        // map "a" to 1, "b" to 2, "c" to 3, etc
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

hash('pink', 10);