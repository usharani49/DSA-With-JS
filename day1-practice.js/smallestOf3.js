// Write a function to find the smallest of three numbers.
function smallestof3(a,b,c){
    if(a<=b && a<=c) {
        return a
    }
    else if(b<=a, b<=c){
        return b
    }
    else {
        return c
    }
}

console.log(smallestof3(10,20,30))
console.log(smallestof3(23,3,35))
console.log(smallestof3(31,42,30))