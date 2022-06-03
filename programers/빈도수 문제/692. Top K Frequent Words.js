var topKFrequent = function (words, k) {
  const frequency = {}
  const sortable = []
  const result = []

  words.sort()

  for (let word of words) {
    frequency[word] ? (frequency[word] += 1) : (frequency[word] = 1)
  }

  for (let name in frequency) {
    sortable.push([name, frequency[name]])
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1]
  })

  for (let i = 0; i < k; i++) {
    result.push(sortable[i][0])
  }
  return result
}
