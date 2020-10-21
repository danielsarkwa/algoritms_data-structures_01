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
                // when the value has a duplicate
                if(value === current.value) return undefined;
                // check if the value is greater or equal to the root
                if(value < current.value) { // when the value is smaller than the current root 
                    // when the current value's left has no node
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
        // when the item is not found
        if(!found) return undefined;
        // when the item is found, return it
        return current;
    }

    /**
     * BFS - takes up more space on large tree
     * DFS - takes up less space on large tree
     *  DFSInOrder - side effect of sorted
     *  DFSPreOrder - side effect of reconstructing the tree
     */

    BFS() {
        // get the first item for checking
        var node = this.root;
        var data = [];
        var queue = [];
        
        // put the first item in to the queue for traversing
        queue.push(node);
        while(queue.length) {
            // get the first item in the queue for checking
            node = queue.shift();
            // add node to the items to be returned
            data.push(node.value);
            // add more items for checking
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            data.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    DFSPostOrder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node);
        }
        traverse(current);
        return data;
    }

    DFSInOrder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

var tree = new BinarySearchTree();