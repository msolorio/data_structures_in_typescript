// Time complexity of Linked List
// Get, search item from list - O(n)
// Insert, delete item from any position in the list - O(n)
// Access the head or tail of list - O(1)


const deepLog = require('../utils/deepLog')

interface ListNodeType {
  data: number
  next: ListNodeType | null
}

class ListNode {
  data: number
  next: ListNodeType | null

  constructor(data: number) {
    this.data = data
    this.next = null
  }
}

interface SinglyLinkedListType {
  head: ListNodeType | null
  tail: ListNodeType | null
}

class SinglyLinkedList {
  head: ListNodeType | null
  tail: ListNodeType | null

  constructor() {
    this.head = null
    this.tail = null
  }

  // Adding new node to end is constant time - O(1) /////////////
  addNode(data: number) {
    const newNode = new ListNode(data)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode

    } else {
      this.tail.next = newNode // set list's existing tail to new node
      this.tail = newNode // reset list's tail to the new node
    }

    return newNode
  }

  // O(n) linear time - loop through each node in the chain starting
  // with first and insert after given point
  insertAfter(data: number, insertAfterData: number) {
    let currentNode = this.head

    while(currentNode) {
      if (currentNode.data === insertAfterData) {
        const newNode = new ListNode(data)

        if (currentNode === this.tail) {
          currentNode.next = newNode
          this.tail = newNode

        } else {
          newNode.next = currentNode.next
          currentNode.next = newNode

        }

        break // after data is inserted, exit while loop
      }

      currentNode = currentNode.next
    }
  }

  // O(n) linear time - loop through each node in the chain starting with
  // the first one.
  removeNode(data: number) {
    let currentNode = this.head
    let previousNode = null

    while(currentNode) {
      if (currentNode.data === data) {
        if (currentNode === this.head) {
          this.head = currentNode.next
          currentNode.next = null
        }

        if (currentNode === this.tail) {
          previousNode.next = null
          this.tail = null
        }

        if (currentNode !== this.head && currentNode !== this.tail) {
          previousNode.next = currentNode.next
          currentNode.next = null
        }

        break
      }

      previousNode = currentNode
      currentNode = currentNode.next
    }
  }
}

const myList = new SinglyLinkedList()

myList.addNode(5)
myList.addNode(10)
myList.addNode(15)
myList.addNode(20)
myList.addNode(25)

myList.removeNode(25)

deepLog(myList)

// Possible shape of Linked list ///////////////////////////////
// const myList: SinglyLinkedListType = {
//   head: {
//     data: 1,
//     next: {
//       data: 2,
//       next: null
//     }
//   },
//   tail: {
//     data: 2,
//     next: null
//   }
// }

export {}