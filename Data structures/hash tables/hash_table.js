class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
   }

   _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
   }

   set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
   }

   get(key) {
       let index = this._hash(key);
       if(!this.keyMap[index]) {
           // loop over the items in the selected array
           for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i];
                }
            }
        }
        return undefined;
   }

   keys() {
        let keyArr = [];
        // loop over the whole hash table
        for(let i = 0; i < this.keyMap.length; i++) {
            // loop over a single hash block
            for(let j = 0; j < this.keyMap[i].length; j++) {
                // return the values of all the keys within the seleced single hash block
                if(keyArr.includes(this.keyMap[i][j][0])) {
                    keyArr.push(this.keyMap[i][j][0]);
                };
            }
        }
        return undefined;
   }

   values() {
        let valuesArr = [];
        // loop over the whole hash table
        for(let i = 0; i < this.keyMap.length; i++) {
            // loop over a single hash block
            for(let j = 0; j < this.keyMap[i].length; j++) {
                // return the values of all the keys within the seleced single hash block
                if(valuesArr.includes(this.keyMap[i][j][1])) {
                    valuesArr.push(this.keyMap[i][j][1]);
                };
            }
        }
        return undefined;
   }
}

var ht = new HashTable(17);