// Write a function to count the digits in a positive integer.
function countDigits(n) {
    if(n == 0) return 1
    let c=0

    while(n > 0){
        n = Math.floor(n/10)
        c++
    }
    return c
}

console.log(countDigits(12345))
console.log(countDigits(1235))
console.log(countDigits(0))
console.log(countDigits(0))
console.log(countDigits())
console.log(countDigits(123))