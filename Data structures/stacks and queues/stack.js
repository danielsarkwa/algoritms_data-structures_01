// using arrays - pop() and push()

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// add and remove from the begining from the start
// connect the newNode's next to the first node
// then set the first node to be the newNode
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);

        if(!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first;
            this.first = newNode;
            // var temp = this.first;
            // this.first = newNode;
            // this.first.next = temp;
        }
        return this.size++;
    }

    pop() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last) {
           this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp.value;
    }
}

var stack = new Stack();