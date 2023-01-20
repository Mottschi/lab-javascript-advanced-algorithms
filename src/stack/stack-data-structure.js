class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    return this.stackControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    // ... your code goes here
    return this.stackControl.length === 0;
  }

  push(item) {
    // ... your code goes here
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl; // this seems a bit questionable - we wouldn't usually want anyone to directly access the array we use for our stack data, as that circumvents the whole controls? but Jasmine expects it
    } else {
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop() {
    // ... your code goes here
    if (!this.isEmpty()) {
      return this.stackControl.pop();
    } else {
      throw new Error('STACK_UNDERFLOW')
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
