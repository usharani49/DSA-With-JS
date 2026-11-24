// Write a function that accepts three numbers and returns the largest. 
function largestof3(a,b,c) {
    if(a>=b && a>=c) {
        return a
    }
    else if(b>=a && b>=c) {
        return b
    }
    else{
        return c
    }
}

console.log(largestof3(10,20,30))
console.log(largestof3(11,0,2))
console.log(largestof3(223,1245,24))