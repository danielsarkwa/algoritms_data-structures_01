class MaxBinaryHeap {
    constructor() {
        values = []
    }

    inset(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        // get the last item index
        let idx = this.values.length - 1;
        // get the last item value
        const element = this.values[idx];

        // loop till you reach the beginning of the array
        // compare the bubble up item to it's parent
            // if the bubble up item is bigger swap them
            // change the bubble up index and compare it again
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];

            if(element <= parent) break;
            // swap the values
            this.values[parent] = element;
            this.values[idx] = parent;

            idx = parentIdx;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        // save the current index we are sinking down
        let idx = 0;
        const length = this.values.length;
        // get the item that is sinking down
        const element = this.values[0];
        while(true) {
            // get the child elements of the sinking item
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swapIdx = null;

            // check if the index of the children is valid -- then set the value
                // compare and swap
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swapIdx = leftChildIdx;
                }
            }
            
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (swapIdx === null && rightChild > element) || // when the right item is only the biggest 
                    (swapIdx != null && rightChild > leftChild) // when the right is bigger than the left item
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if(swapIdx === null) break;

            // do the swap
            this.values[idx] = this.values[swapIdx]; // set item at the from the back to the front
            this.values[swapIdx] = element; // set the back item to be the item from the front

            // update the sinking item index to compare with others
            idx = swapIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.inset(55);