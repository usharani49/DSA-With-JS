// Write a function that accepts a number and returns the sum of its digits.
function sumOfDigits(n){
    let sum = 0,dig

    while(n > 0){
        dig = n%10
        n = Math.floor(n/10)
        sum += dig
    }
    return sum
}

console.log(sumOfDigits(1234))
console.log(sumOfDigits(0))