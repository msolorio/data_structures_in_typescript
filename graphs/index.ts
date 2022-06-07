

class Graph {
  numberOfVertices: number
  adjList: Map<number, number[]>

  constructor() {
    this.numberOfVertices = 0
    this.adjList = new Map()
  }

  addVertex(vertex: number) {
    this.adjList.set(vertex, [])
    this.numberOfVertices++
  }

  addEdge(vertex1: number, vertex2: number) {
    this.adjList.get(vertex1).push(vertex2)
    this.adjList.get(vertex2).push(vertex1)
  }

  print() {
    const entries = this.adjList.entries()

    for (let [key, values] of entries) {

      let valsList = ''

      values.forEach((v) => {
        valsList += `${v} `
      })

      console.log(`${key} => ${valsList}`)
    }
  }
}

const graph = new Graph()

graph.addVertex(3)
graph.addVertex(5)
graph.addVertex(6)
graph.addEdge(3, 5)
graph.addEdge(3, 6)
graph.print()

console.log('graph ==>', graph)
