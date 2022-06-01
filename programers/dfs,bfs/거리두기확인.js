function solution(places) {
  const move = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ]
  const SIZE = 5

  const isValid = (x, y) => x >= 0 && y >= 0 && x < SIZE && y < SIZE
  const isAvailableSeat = (x, y, checked) =>
    isValid(x, y) && checked[x][y] === 0

  // bfs
  const checkAround = (start, room, checked) => {
    let queue = [start]

    while (queue.length > 0) {
      const [x, y, n] = queue.shift()

      if (n !== 0 && room[x][y] === 'P') return false

      move.forEach(([mx, my]) => {
        const _x = x + mx
        const _y = y + my

        if (isAvailableSeat(_x, _y, checked) && room[_x][_y] != 'X') {
          if (n < 2) {
            checked[_x][_y] = 1
            queue.push([_x, _y, n + 1])
          }
        }
      })
    }

    return true
  }
  const checkDistancing = room => {
    let checked = Array.from({ length: SIZE }, () => Array(SIZE).fill(0))

    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (room[i][j] !== 'P') continue

        checked[i][j] = 1
        if (!checkAround([i, j, 0], room, checked)) return 0
      }
    }
    return 1
  }
  return places.map(checkDistancing)
}
