// Write a function to print numbers from 5 to 1 using recursion.

function print(n){
    if(n==0) return 1

    console.log(n)
    print(n-1)
}

print(5)