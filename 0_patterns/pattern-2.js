// Given an integer N, print the following pattern.
// 1
// 12
// 123
// 1234
// 12345

const printPattern = (N) => {
    for (let row = 1; row <= N; row++) {
        let patternStr = "";
        for (let col = 1; col <= row; col++) {
            patternStr += col
        }
        console.log(patternStr)
    }
}

printPattern(5)


