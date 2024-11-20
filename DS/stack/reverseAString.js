class Stack {
    constructor(maxSize = 10) {
        this.items = [];
        this.maxSize = maxSize;
        this.top = -1;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    push(element) {
        if (this.top === this.maxSize - 1) {
            return "Overflow";
        }
        this.top++;
        this.items[this.top] = element;
    }

    pop() {
        if (this.top === -1) {
            return "Underflow";
        }
        const poppedItem = this.items[this.top];
        this.items.pop()
        this.top--;
        return poppedItem;
    }

    peek() {
        if (this.top === -1) {
            return "Underflow";
        }
        return this.items[this.top];
    }

    isFull() {
        return this.items.length === this.maxSize;
    }

    print() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

const originalString = "leela";

const reverseString = (originalString) => {
    const s = new Stack();
    let reversedStr = '';
    for (let i = 0; i < originalString.length; i++) {
        s.push(originalString[i]);
    }
    while (!s.isEmpty()) {
        reversedStr += s.pop();
    }
    return reversedStr;
};

console.log(reverseString(originalString)); 
