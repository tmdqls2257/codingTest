function solution(board, moves) {
  // 이차원 배열을 돌면서 moves의 i번째의 인형을 바구니에 넣습니다.
  const buket = []
  let count = 0
  moves.forEach(order => {
    const doll = pickUp(board, order - 1)
    if (doll) {
      if (buket[buket.length - 1] === doll) {
        buket.pop()
        count += 2
      } else {
        buket.push(doll)
      }
    }
  })
  return count
}
const pickUp = (board, order) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][order] !== 0) {
      const doll = board[i][order]
      board[i][order] = 0
      return doll
    }
  }
}
