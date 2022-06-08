var eventualSafeNodes = function (graph) {
  const visited = {}
  const ans = []
  const M = graph.length

  for (let i = 0; i < M; i++) {
    if (DFS(graph, i, visited) === 'safe') ans.push(i)
  }
  return ans
}

function DFS(graph, node, visited) {
  if (visited[node] === 'safe') return 'safe'
  if (visited[node]) return false
  if (graph[node].length === 0) {
    visited[node] = 'safe'
    return 'safe'
  }
  visited[node] = true

  let res
  for (let i = 0; i < graph[node].length; i++) {
    res = DFS(graph, graph[node][i], visited)
    if (!res) return false
  }
  if (res === 'safe') {
    visited[node] = 'safe'
    return 'safe'
  }
}
