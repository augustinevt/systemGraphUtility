import Graph from '.'

const testAdjacencyList = {
  root: {id: 'root', edges: ["B"]},
  B: {id: 'B', edges: ["C"]},
  C: {id: 'C', edges: ["D"]},
  D: {id: 'D', edges: []}
}

const desiredArrayForm = {
  nodes: [
    {id: 'A', edges: ["B"]},
    {id: 'B', edges: ["C"]},
    {id: 'C', edges: ["D"]},
    {id: 'D', edges: ["A"]}
  ],
  links: [
    { source: 'A', target: 'B'},
    { source: 'B', target: 'C'},
    { source: 'C', target: 'D'},
    { source: 'D', target: 'A'},
  ]
}

test('converts to two arrays', () => {

  const graph = new Graph(testAdjacencyList)
  const arrayForm = graph.convertToArrays()

  expect(arrayForm).toEqual(desiredArrayForm)
})
