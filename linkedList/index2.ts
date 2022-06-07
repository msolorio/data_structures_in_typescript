const { v4: uuidv4 } = require('uuid')

class ListNode {
  value: string
  id: string
  next: ListNode | null

  constructor(value: string) {
    this.value = value
    this.id = uuidv4()
    this.next = null
  }
}

class LinkedList {
  head: null | ListNode
  tail: null | ListNode

  constructor() {
    this.head = null
    this.tail = null
  }

  getListHead() { return this.head }

  getListTail() { return this.tail }

  addNodeToEnd(value: string) {
    const newNode = new ListNode(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode

    } else {
      this.tail.next = newNode
      this.tail = newNode

    }

    return newNode
  }


  addNodeToFront(value: string) {
    const newNode = new ListNode(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode

    } else {
      newNode.next = this.head
      this.head = newNode

    }

    return newNode
  }


  insertNode(value: string, insertAfterVal: string) {
    const newNode = new ListNode(value)

    let current = this.head

    while (current !== null) {
      if (current.value === insertAfterVal) {
        newNode.next = current.next
        current.next = newNode
        break
      }

      current = current.next
    }
  }


  // getNodeById(id: string) {
  //   let current = this.head

  //   while (current !== null) {
  //     if (current.id === id) return current

  //     current = current.next
  //   }
    
  //   return null
  // }

  // with recursion ///////////////////////////////////////////////////////
  getNodeById(id: string, node: ListNode=this.head): ListNode | null {
    if (node === null) return null    
    else if (node.id === id) return node

    return this.getNodeById(id, node.next)
  }
}

module.exports = {
  ListNode,
  LinkedList
}

export {}
