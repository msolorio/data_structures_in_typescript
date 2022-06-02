const deepLog = require('../utils/deepLog')

class Node {
  data: number
  next: null | Node
  previous: null | Node

  constructor(data: number) {
    this.data = data
    this.next = null
    this.previous = null
  }
}


class DoublyLinkedList {
  head: null | Node
  tail: null | Node
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  addNode(data: number) {
    const newNode = new Node(data)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode

    } else {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }

    this.length++
  }

  insertAfter(data: number, insertAfterData: number) {
    const newNode = new Node(data)

    let currentNode = this.head

    while (currentNode) {
      if (currentNode.data === insertAfterData) {
        if (currentNode === this.tail) {
          this.addNode(data)

        } else {
          newNode.previous = currentNode
          newNode.next = currentNode.next
          newNode.next.previous = newNode
          currentNode.next = newNode
  
        }
        
        this.length++
        break
      }

      currentNode = currentNode.next
    }
  }

  removeNode(data: number) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.data === data) {
        if (currentNode === this.head && currentNode === this.tail) {
          this.head = null
          this.tail = null

        } else if (currentNode === this.head) {
          this.head = currentNode.next
          this.head.previous = null

        } else if (currentNode === this.tail) {
          this.tail = currentNode.previous
          currentNode.previous.next = null

        } else {
          currentNode.previous.next = currentNode.next
          currentNode.next.previous = currentNode.previous

        }

        currentNode.next = null
        currentNode.previous = null

        break
      }

      currentNode = currentNode.next
    }
  }
}

const list = new DoublyLinkedList()
list.addNode(0)
list.addNode(5)
list.addNode(10)
list.addNode(15)

list.removeNode(2)

deepLog(list)

export {}