class Stack {
  stack: number[]

  constructor() {
    this.stack = []
  }

  push(data: number) {
    this.stack.push(data)
  }

  pop() {
    return this.stack.pop()
  }

  getLength() {
    return this.stack.length
  }

  printStack() {
    let str = ''
    for (let i = 0; i < this.stack.length; i++) {
      str += `${this.stack[i]} `
    }

    return str
  }
}

const myStack = new Stack()

// Pushing and poping item ///////////////////////////////////////////////
// O(1) - constant time
myStack.push(10)
myStack.push(5)
myStack.push(12)
const topItem = myStack.pop()
// console.log('topItem ==>', topItem)
console.log(myStack.printStack())


// Reverse an array using a stack //////////////////////////////////////////
// O(n) - linear time complexity
const reverse = function (originalArr: number[]) {
  const stack = new Stack()
  
  for (let i = 0; i < originalArr.length; i++) { // loop through array and push items on stack
    stack.push(originalArr[i])
  }
  
  const newArr = []

  const stackLen = stack.getLength()
  for (let i = 0; i < stackLen; i++) { // loop through stack and pop items off into new array
    newArr.push(stack.pop())
  }

  return newArr
}

// Finding an item in the stack would be O(n) time complexity

// console.log(reverse([1, 2, 3]))

