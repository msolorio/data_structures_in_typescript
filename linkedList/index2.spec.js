const { expect } = require('chai');
const {
  ListNode,
  LinkedList
} = require('./index2.js')

describe('linkedList/index2 - ListNode', () => {
  it('0 - should create a list node', () => {
    const newNode = new ListNode('A')

    expect(newNode.value).to.equal('A')
    expect(newNode.next).to.equal(null)
    expect(newNode.id).to.be.a('string')
  });
});

describe('linkedList/index2 - LinkedList', () => {
  it('0 - should create a linkedList', () => {
    const linkedList = new LinkedList()

    expect(linkedList).to.deep.equal({
      head: null,
      tail: null
    })
  })
});

describe('linkedList/index2 - LinkedList.addNodeToEnd()', () => {
  it('0 - should add a new node as the tail', () => {
    const linkedList = new LinkedList()

    linkedList.addNodeToEnd('A')

    expect(linkedList.tail.value).to.equal('A')
    expect(linkedList.head.value).to.equal('A')
  })

  it('0 - should add a new node as the tail', () => {
    const linkedList = new LinkedList()

    linkedList.addNodeToEnd('A')
    linkedList.addNodeToEnd('B')


    expect(linkedList.tail.value).to.equal('B')
    expect(linkedList.head.value).to.equal('A')
  })
});

describe('linkedList/index2 - LinkedList.addNodeToFront()', () => {
  it('0 - should add a new node as head', () => {
    const linkedList = new LinkedList()

    linkedList.addNodeToFront('A')

    expect(linkedList.tail.value).to.equal('A')
    expect(linkedList.head.value).to.equal('A')
  })

  it('0 - should add a new node as head', () => {
    const linkedList = new LinkedList()

    linkedList.addNodeToFront('A')
    linkedList.addNodeToFront('B')

    expect(linkedList.tail.value).to.equal('A')
    expect(linkedList.head.value).to.equal('B')
  })
});


describe('linkedList/index2 - LinkedList.insertNode()', () => {
  it('0 - should add a new node in the middle', () => {
    const linkedList = new LinkedList()

    linkedList.addNodeToEnd('A')
    linkedList.addNodeToEnd('C')

    linkedList.insertNode('B', 'A')

    expect(linkedList.head.value).to.equal('A')
    expect(linkedList.head.next.value).to.equal('B')
    expect(linkedList.head.next.next.value).to.equal('C')
  })
});


describe('linkedList/index2 - LinkedList.getNodeById()', () => {
  it('0 - should return value for node by id', () => {
    const linkedList = new LinkedList()

    linkedList.addNodeToEnd('A')
    const nodeB = linkedList.addNodeToEnd('B')
    linkedList.addNodeToEnd('C')

    expect(linkedList.getNodeById(nodeB.id).value).to.equal('B')
  })
});