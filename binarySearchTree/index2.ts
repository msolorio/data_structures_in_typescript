class TreeNode {
  data: number
  left: null | TreeNode
  right: null | TreeNode

  constructor(data: number) {
    this.data = data
    this.left = null
    this.right = null
  }
}


class BinarySearchTree {
  root: null | TreeNode

  constructor() {
    this.root = null
  }

  addNode(data: number) {
    const newNode = new TreeNode(data)

    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(parentNode: TreeNode, newNode: TreeNode) {
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

  findIfNodeExists(data: number) {
    let currentNode = this.root

    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left

      } else if (data > currentNode.data) {
        currentNode = currentNode.right

      } else {
        return true

      }
    }

    return false
  }
}

module.exports = {
  TreeNode,
  BinarySearchTree
}