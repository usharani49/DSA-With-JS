function reverseNumber(n) {
    let rev = 0

    while(n > 0){
        let dig = n%10
        rev = rev * 10 + dig 
        n = (n - dig)/ 10
    }

    return rev
}

console.log(reverseNumber(3442))
console.log(reverseNumber(3421))