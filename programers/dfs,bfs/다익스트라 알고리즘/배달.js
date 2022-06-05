class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }
  dequeue() {
    return this.values.shift()
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    this.adjacencyList[vertex2].push({ node: vertex1, weight })
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let path = [] //to return at end
    let smallest
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
    return {
      distances,
      path: path.concat(smallest).reverse(),
    }
  }
}

function solution(N, road, K) {
  const graph = new WeightedGraph()
  let cnt = 0
  for (let node of road) {
    const [start, end, priority] = node
    graph.addVertex(start)
    graph.addVertex(end)
    graph.addEdge(start, end, priority)
  }

  for (let key in graph.Dijkstra('1', '5').distances) {
    if (graph.Dijkstra('1', '5').distances[key] <= K) {
      cnt++
    }
  }
  return cnt
}
