const sudoku = function (board) {
  // 메모이제이션하기 위해 행과 열을
  // 보드를 돌면서 그 값이 0일 경우
  // 값을 푸시한다.
  const N = board.length
  const boxes = [
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
  ]
  // 스도쿠판의 숫자를 가져옵니다.
  const getBoxNum = (row, col) => boxes[row][col]

  const blanks = []
  const rowUsed = []
  const colUsed = []
  const boxUsed = []
  // 메모이제이션하기 위한 배열 초기화
  for (let row = 0; row < N; row++) {
    rowUsed.push(Array(N + 1).fill(false))
    colUsed.push(Array(N + 1).fill(false))
    boxUsed.push(Array(N + 1).fill(false))
  }

  //
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (board[row][col] === 0) {
        blanks.push([row, col])
      } else {
        const num = board[row][col]
        const box = getBoxNum(row, col)
        rowUsed[row][num] = true
        colUsed[col][num] = true
        boxUsed[box][num] = true
      }
    }
  }

  const isValid = (row, col, num) => {
    const box = getBoxNum(row, col)
    return (
      rowUsed[row][num] === false &&
      colUsed[col][num] === false &&
      boxUsed[box][num] === false
    )
  }

  const toggleNum = (row, col, num) => {
    const box = getBoxNum(row, col)
    board[row][col] = num
    rowUsed[row][num] = !rowUsed[row][num]
    colUsed[col][num] = !colUsed[col][num]
    boxUsed[box][num] = !boxUsed[box][num]
  }

  const aux = (idx, blanks, board) => {
    if (idx === blanks.length) {
      return true
    }

    const [row, col] = blanks[idx]
    for (let num = 1; num <= 9; num++) {
      if (isValid(row, col, num) === true) {
        toggleNum(row, col, num)
        if (aux(idx + 1, blanks, board) === true) {
          return true
        }
        toggleNum(row, col, num)
      }
    }
    return false
  }

  aux(0, blanks, board)
  return board
}
