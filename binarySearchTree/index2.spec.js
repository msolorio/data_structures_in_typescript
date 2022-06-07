const deepLog = require('../utils/deepLog')
const { expect } = require('chai');
const {
  TreeNode,
  BinarySearchTree
} = require('./index2.js')

describe('binarySearchTree/index2 - TreeNode', () => {
  it('0 - should create a tree node', () => {
    const treeNode = new TreeNode(5);
    expect(treeNode).to.deep.equal({
      data: 5,
      left: null,
      right: null
    });
  });
});


describe('binarySearchTree/index2 - BinarySearchTree', () => {
  it('0 - should create a tree', () => {
    const binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree).to.deep.equal({
      root: null
    });
  });
});


describe('binarySearchTree/index2 - BinarySearchTree.addNode()', () => {
  it('0 - should add a node the root', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.addNode(5);

    const newNode = binarySearchTree.root;

    expect(newNode).to.deep.equal({
      data: 5,
      left: null,
      right: null
    });
  });

  it('1 - should add a node left of the root', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.addNode(5);
    binarySearchTree.addNode(3); 

    const leftNode = binarySearchTree.root.left;

    expect(leftNode).to.deep.equal({
      data: 3,
      left: null,
      right: null
    });
  });
});

describe('binarySearchTree/index2 - BinarySearchTree.findIfNodeExists()', () => {
  it('0 - should return true if node found', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.addNode(5);
    binarySearchTree.addNode(3);
    binarySearchTree.addNode(7);
    binarySearchTree.addNode(4);
    binarySearchTree.addNode(2);

    const result1 = binarySearchTree.findIfNodeExists(5);
    const result2 = binarySearchTree.findIfNodeExists(3);
    const result3 = binarySearchTree.findIfNodeExists(7);
    const result4 = binarySearchTree.findIfNodeExists(4);
    const result5 = binarySearchTree.findIfNodeExists(2);

    expect(result1).to.equal(true);
    expect(result2).to.equal(true);
    expect(result3).to.equal(true);
    expect(result4).to.equal(true);
    expect(result5).to.equal(true);
  });

  it('0 - should return false if node not found', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.addNode(5);
    binarySearchTree.addNode(3);
    binarySearchTree.addNode(7);
    binarySearchTree.addNode(4);
    binarySearchTree.addNode(2);

    const result1 = binarySearchTree.findIfNodeExists(8);
    const result2 = binarySearchTree.findIfNodeExists(6);
    const result3 = binarySearchTree.findIfNodeExists(1);

    expect(result1).to.equal(false);
    expect(result2).to.equal(false);
    expect(result3).to.equal(false);
  });
});
