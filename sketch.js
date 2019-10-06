const topography = new GraphUtils({
  internalNodeStructure,
  connectivity,
  directed,
  numOfNodes,
  mode: ["centralized","decentralized","distributed"],
})

  {
    id: {node: {}, links: []},
    id: {node: {}, links: []},
  }

topography.addNode(node = {}, links = [])
topography.removeNode(node = {}, links = [])

topography.removeEdge(id, id)
topography.addEdge(id, id)

/// visualize

///


root

  // decentralized
    gen rand num connection (influenced by connectivity)
    give num ids
    add num of nodes to curr (!) connectivity dropping as you go out (!)

    run connectivity on curr only for other nodes in this connectivity ring (genRing)

      if connectivity is less than 1
        - gen ran num of (influ by connectivity)
        - choose nodes from graph and create connection

  // centralized

    set expansion ring (ex: 3) => 1 => 3 => 28 => ect...
    for each gen expansion num and connect to parent


  // distributed

    gen rand num connection (influenced by connectivity)
    give num ids
    add num of nodes

    run connectivity
      if connectivity is less than 1
        - gen ran num of (influ by connectivity)
        - choose nodes from graph and create connection
