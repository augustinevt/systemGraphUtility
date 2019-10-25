import Graph from './index'

const graph = new Graph()

graph.createTree({numOfNodes: 14, numOfChildren: 3})
graph.modifyConnectivity(0.9)
graph.print()
