// Given an integer N, print the following pattern.
// *
// * *
// * * *
// * * * *
// * * * * *

const printPattern = (N) => {
    for (let row = 0; row < N; row++) {
        let patternStr = ""
        for (let col = 0; col <= row; col++) {
            patternStr += "* "
        }
        console.log(patternStr)
    }
}
printPattern(5)