function solution(s) {
  //     문자열을 순환하는 도중 숫자가 나오면 result라는 문자열 변수에 넣어주고
  //     문자열을 순환하는 도중 영어가 나오면 en이라는 문자열 변수에 넣어주고
  //     en라는 문자열이 영단어 배열에 포함된 문자를 가지면 그에 해당하는 인덱스를 반환
  //     반환된 인덱스를 result에 더해준다.
  const arr = s.split('')

  let result = ''
  let en = ''
  let numberOfEnglish = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  const onlyNum = Number(s)
  if (onlyNum) return onlyNum

  arr.map(elem => {
    if (Number(elem)) {
      result += elem
    } else {
      en += elem
      if (numberOfEnglish.includes(en)) {
        result += String(numberOfEnglish.indexOf(en))
        en = ''
      }
    }
  })
  return Number(result)
}
