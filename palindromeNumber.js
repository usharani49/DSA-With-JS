// Write a function to check whether a number is a palindrome. Example: 121 returns true, 123 returns false.
function palindromeNumber(n) {
    let rev = 0
    let num = n
    while(n>0) {
        let dig = n%10
        rev = rev * 10 + dig 
        n = Math.floor(n/10)
    }

    if(num == rev) {
        return "Palindrome"
    }
    else {
        return "Not a Palindrome"
    }
}

console.log(palindromeNumber(121))
console.log(palindromeNumber(123))