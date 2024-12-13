function ageSort(users) {
  return users.sort((a, b) => a.age - b.age)
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return 1
    } else if (a % 2 !== 0 && b % 2 === 0) {
      return -1
    } else {
      return a - b
    }
  })
}

function validAnagrams(s, t) {
  if (s.length !== t.length) return false
  const sortString = (str) => str.split('').sort().join('')
  return sortString(s) === sortString(t)
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    const aLength = a.toString().length
    const bLength = b.toString().length
    if (aLength === bLength) return a - b // Ascending within group
    return bLength - aLength // Descending by digit count
  })
}

function frequencySort(arr) {
  const freqMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1
    return acc
  }, {})

  return arr.sort((a, b) => {
    if (freqMap[a] === freqMap[b]) return b - a // Descending for same frequency
    return freqMap[a] - freqMap[b] // Ascending by frequency
  })
}
module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
]
