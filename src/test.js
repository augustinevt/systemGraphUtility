import Graph from './index'

const graph = new Graph()

graph.createTree({numOfNodes: 14, numOfChildren: 3})
console.log(graph.modifyConnectivity(0.9))
console.log(graph.print())

// const bread = graph.addNode({text: 'bread'})
// const cheese = graph.addNode({text: 'cheese'})
// const meat = graph.addNode({text: 'meat'})
// const hummus = graph.addNode({text: 'hummus'})
// const olive = graph.addNode({text: 'olive'})
//
// const link1 = graph.addEdge(bread, cheese)
// const link2 = graph.addEdge(bread, meat)
// const link3 = graph.addEdge(bread, hummus)
// const link4 = graph.addEdge(hummus, olive)
// const link5 = graph.addEdge(meat, olive)
//
//
// console.log(graph.searchByAttribute('text', 'bread'))
//
