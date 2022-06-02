var maxAreaOfIsland = function (grid) {
  let maxArea = 0
  const M = grid.length
  const N = grid[0].length
  const array = Array.from(Array(grid.length), () =>
    new Array(grid[0].length).fill(false)
  )

  let compass = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ]
  const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 1) {
        flood([[i, j]])
      }
    }
  }

  return maxArea

  function flood(stack) {
    let currentArea = 0

    while (stack.length) {
      let [row, col] = stack.pop()
      if (!isValid(row, col) || array[row][col] || grid[row][col] === 0) {
        continue
      }

      currentArea++
      array[row][col] = true

      for (const direction of compass) {
        stack.push([row + direction[0], col + direction[1]])
      }
    }

    maxArea = Math.max(maxArea, currentArea)
  }
}
