class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];

            if(element.priority <= parent.priority) break;
            this.values[parent] = element;
            this.values[idx] = parent;

            idx = parentIdx;
        }
    }

    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swapIdx = null;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority > element.priority) {
                    swapIdx = leftChildIdx;
                }
            }
            
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (swapIdx === null && rightChild.priority > element.priority) ||
                    (swapIdx != null && rightChild.priority > leftChild.priority)
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if(swapIdx === null) break;

            // do the swap
            this.values[idx] = this.values[swapIdx];
            this.values[swapIdx] = element;

            idx = swapIdx;
        }
    }
}