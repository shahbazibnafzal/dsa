// Given an integer N, print the following pattern.
// * * * *
// * * * *
// * * * *
// * * * *

const printPattern = (N) => {
  for (let row = 0; row < N; row++) {
    let patternString = ''
    for (let col = 0; col < N; col++) {
      patternString += '* '
    }
    console.log(patternString)
  }
}

printPattern(5)
