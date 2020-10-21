class MaxBinaryHeap {
    constructor() {
        values = []
    }

    inset(value) {
        this.values.push();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];

            if(element <= parent) break;
            this.values[parent] = element;
            this.values[idx] = parent;

            idx = parentIdx;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;

        this.sinkDown();

        return max;
    }

    sinkDown() {
        // save the current index we are sinking down
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            
        }
    }
}

let heap = new MaxBinaryHeap();
heap.inset(55);