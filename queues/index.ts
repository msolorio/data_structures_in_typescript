// Queue - first in first out
// Time Complexity of Queues
// Get, search, and delete specific item from the queue - O(n)
// Inserting item into back of queue - O(1)
// Removing item from front of queue - O(1)

class Queue {
  queue: number[]

  constructor() {
    this.queue = []
  }

  enqueue(data: number) {
    this.queue.push(data)
  }

  dequeue() {
    return this.queue.shift()
  }

  printQueue() {
    let str = ''

    for (let i = 0; i < this.queue.length; i++) {
      str += `${this.queue[i]} `
    }

    return str
  }
}

const myQueue = new Queue()

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)

console.log(myQueue.printQueue())

// Time Complexity //////////////////////////////////////////////

// Get, search, delete a particular item from the queue
// 0(n) - need to loop through each item

// Insert item onto end of queue
// 0(1) - constant time

export {}