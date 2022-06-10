var numEnclaves = function (grid) {
  let result = 0
  const M = grid.length
  const N = grid[0].length

  for (let row = 0; row < M; row++) {
    for (let col = 0; col < N; col++) {
      if (grid[row][col] === 1) {
        let localResult = dfs(row, col, 0)
        if (localResult != -Infinity) result += localResult
      }
    }
  }

  return result

  function dfs(row, col, area) {
    if (row < 0 || col < 0 || row >= M || col >= N || grid[row][col] === 0)
      return area

    if (
      (row === 0 || col === 0 || row === M - 1 || col === N - 1) &&
      grid[row][col] == 1
    ) {
      area = -Infinity
    }

    area++
    grid[row][col] = 0
    area = dfs(row - 1, col, area) // top
    area = dfs(row + 1, col, area) // bottom
    area = dfs(row, col - 1, area) // left
    area = dfs(row, col + 1, area) // right

    return area
  }
}
