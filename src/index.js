import uuid from 'uuid'

export default class Graph {

  constructor() {
    this.adjacencyList = {}
    this.root = null
  }

  addNode(node) {
    const id = uuid();
    if (!this.root) this.root = id
    this.adjacencyList[id] = {...node, id, edges: []}
    return id
  }

  addEdge(from, to) {
    const origin = this.adjacencyList[from]
    const destination = this.adjacencyList[to]

    let isDuplicate = false

    origin.edges.forEach((edge) => {
      if (edge === to) isDuplicate = true
    })

    if (!isDuplicate) {
      origin.edges.push(destination.id)
      destination.edges.push(origin.id)
    }
  }

  removeEdge(from, to) {
    const origin = this.adjacencyList[from]
    const destination = this.adjacencyList[to]

    origin.edges = origin.edges.filter(item => destination.id === item )
    destination.edges = destination.edges.filter(item => origin.id === item )
  }

  removeNode(id) {
    const node = this.adjacencyList[id]

    node.edges.forEach((edgeId) => this.removeEdge(id, edgeId))

    delete this.adjacencyList[id]

    return node
  }

  searchByAttribute(key, val) {
    const queue = [this.adjacencyList[this.root]]
    const visited = []
    const results = []

    const addToQueue = (id) => {
      let wasVisited = false
      let alreadyQueued = false

      visited.forEach(visitedId => {
        if (id === visitedId) wasVisited = true
      })

      queue.forEach(queueId => {
        if (id === queueId.id) alreadyQueued = true
      })

      if (!wasVisited && !alreadyQueued) {
        queue.push(this.adjacencyList[id])
      }
    }

    while(queue.length > 0) {
      const node = queue.pop();

      visited.push(node.id)
      node.edges.forEach(id => addToQueue(id))

      if ( node.node[key] === val ) results.push(node)
    }

    return results.length > 0 ? results : false
  }


  createExponential({numOfNodes}) {
    const adjacencyList = {}
    const root = {id: root, node: {name: 'root'}, edges: []}
    const queue = [root]

    let nodesCreated = 1;
    let i = 0

    adjacencyList[root.id] = root;

    while (true) {
      for(let j = 0; j < (2**i); j++) {
        const parent = queue.shift()
        for(let k = 0; k < (2**(i+1)); k++) {
          if (nodesCreated <= numOfNodes) {
            const id = uuid()
            const childNode = {id, node: {name: nodesCreated}, edges: [parent.id]}

            queue.push(childNode)
            parent.edges.push(id)
            adjacencyList[id] = childNode
            nodesCreated++

          } else {
            return adjacencyList;
          }
        }
      }
      i++
    }
  }


  createTree({numOfNodes, numOfChildren}) {
    const root = {id: 'root', node: {name: 'root'}, edges: []}
    const queue = [root]

    let nodesCreated = 1;
    let i = 0

    this.adjacencyList.root = root;

    while (true) {
      for(let j = 0; j < (numOfChildren**i); j++) {
        const parent = queue.shift()
        for(let k = 0; k < numOfChildren; k++) {
          if (nodesCreated <= numOfNodes) {
            const id = uuid()
            const childNode = {id, node: {name: nodesCreated}, edges: [parent.id]}

            queue.push(childNode)
            parent.edges.push(id)
            this.adjacencyList[id] = childNode
            nodesCreated++

          } else {
            return
          }
        }
      }
      i++
    }
  }


  modifyConnectivity(connectivity) {
    const idRegistry = {
      root: true,
    }
    const gens = [[...this.adjacencyList.root.edges]]
    const totalNodes = Object.keys(this.adjacencyList).length

    let nodesAdded = this.adjacencyList.root.edges.length
    let genIndex = 0;

    while(nodesAdded < totalNodes) {
      const tmpGen = []

      gens[genIndex].forEach(nodeID => this.adjacencyList[nodeID].edges.forEach( edge => {
        if (!idRegistry[edge]) {
          idRegistry[edge] = true
          tmpGen.push(edge)
          nodesAdded++
        }
      }))

      gens.push(tmpGen)

      genIndex++
    }

    gens.forEach((gen) => gen.forEach((fromID, i) => {
      gen.forEach((toID) => {
        if (connectivity > Math.random() && gen[i+1]) {
          this.addEdge(fromID, gen[i+1])
        }
      })
    }))
  }


  print() {
    Object.keys(this.adjacencyList).forEach((id) => {
      this.printNode(id)
    })
  }

  printNode(id) {
    console.log(this.adjacencyList[id])
  }
}

