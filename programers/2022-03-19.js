function solution(priorities, location) {
  //     배열을 객체로 만들어줍니다.
  //     만들어준 객체의 첫번째 인자를 선택합니다.
  //     첫번째 인자보다 더큰 수가 있다면
  let max
  let cnt = 0

  while (true) {
    max = Math.max.apply(null, priorities) // 배열에서의 최대값
    let n = priorities.shift() // 배열의 맨앞

    if (n === max) {
      cnt++ // pop하므로 cnt 1증가
      if (location === 0) {
        //만약 location이 0이되면
        return cnt //cnt를 return
      }
    } else {
      // 꺼낸 요소가 max와 다르면
      priorities.push(n) //배열 맨 끝에 꺼낸 요소를 추가
    }
    location--

    if (location == -1) {
      //만약 -1이 되어버리면 다시 배열의 맨끝으로 보낸다
      location = priorities.length - 1
    }
  }
}
