const deepLog = require('../utils/deepLog')

// Binary Search tree
// Store sorted data in a tree structure
// Time complexity
// Get, search, insert, delete an item in the tree
// Avarage - O(log(n))
// Worst - O(n) - the tree is completely unbalanced, it will resemble a linked list, and we will have to search through all items.

class Node {
  data: number
  left: Node | null
  right: Node | null

  constructor(data: number) {
    this.data = data
    this.left = null
    this.right = null
  }
}


class Tree {
  root: Node | null

  constructor() {
    this.root = null
  }


  addNode(data: number) {
    const newNode = new Node(data)

    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }


  insertNode(parentNode: Node, newNode: Node) {
    if (newNode.data < parentNode.data) {
      if (!parentNode.left) {
        parentNode.left = newNode
      } else {
        this.insertNode(parentNode.left, newNode)
      }
    } else {
      if (!parentNode.right) {
        parentNode.right = newNode
      } else {
        this.insertNode(parentNode.right, newNode)
      }
    }
  }
}


const tree = new Tree()

tree.addNode(5)
tree.addNode(7)
tree.addNode(4)

deepLog(tree)


export {}