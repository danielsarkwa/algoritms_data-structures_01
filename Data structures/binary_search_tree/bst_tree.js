class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    inset(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            // this is the current node of comparision
            var current = this.root;
            // keep checking till you find the right spot
            while(true) {
                if(value === current.value) return undefined;
                // check if the value is greater or equal to the root
                if(value < current.value) { // when the value is smaller than the current root 
                    // when the current value's left has not node
                    // when this left side ends the code stops and the loop starts again with a new node of comparison
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    // when the current value's left has items
                        // change the node of comparision
                    current = current.left;
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(value) {
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        // continue the loop while there is a node to check and when the item has not been found
         while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else { // when the current node is equal to the value
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
}

var tree = new BinarySearchTree();