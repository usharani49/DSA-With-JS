// Write a function to calculate the factorial of a number. Example: 5 returns 120.

function factorial(n){
    result = 1

    for(let i=1; i<=n; i++) {
        result *= i
    }
    return result
}


console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(0))