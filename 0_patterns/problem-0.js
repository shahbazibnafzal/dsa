// Given an integer N, print the following pattern.
// ****
// ****
// ****
// ****

const printPattern = (N) => {
  let patternString = ''
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      patternString += '*'
    }
    patternString += '\n'
  }
  console.log(patternString)
}

printPattern(5)
