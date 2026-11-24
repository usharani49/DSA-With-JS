# DSA-With-JS

# **JavaScript Fundamentals**

## **What is programming?**

A computer doesn't understand human instructions directly. It needs instructions written in a programming language.

Programming means giving a computer a set of instructions to perform a task.

For example, suppose you want a computer to add two numbers.

Your instruction:

1. Take the first number.
2. Take the second number.
3. Add both numbers.
4. Display the result.

JavaScript code:

```
let a = 10;
let b = 20;

let result = a + b;

console.log(result);
```

Output:

```
30
```

You just instructed the computer to perform an operation.

This is the foundation of programming.

## **Variables**

A variable is a named storage location for a value.

Think of it as a labelled container.

## **How a variable works**

**age**

# **25**

Variable name and value

**name**

# **Alex**

Variable name and value

```
let age = 25;
let name = "Alex";
```

In JavaScript, we mainly use three ways to declare variables.

### **A. var**

```
var age = 25;
```

- Older way of declaring variables.
- Function-scoped.
- Allows redeclaration.
- Avoid using it in modern JavaScript unless you have a specific reason.

### **B. let**

```
let age = 25;

age = 26;

console.log(age);
```

Output:

```
26
```

- Allows reassignment.
- Does not allow redeclaration in the same scope.
- Block-scoped.

### **C. const**

```
const name = "Alex";

console.log(name);
```

- Does not allow reassignment.
- Does not allow redeclaration in the same scope.
- Block-scoped.

Important interview concept:

```
const age = 25;

age = 26;
```

This produces a TypeError because you cannot reassign a `const` variable.

One important exception:

```
const person = {
    name: "Alex"
};

person.name = "John";

console.log(person.name);
```

Output:

```
John
```

Why?

Because `const` prevents reassignment of the variable itself. It does not freeze the object stored in it.

## **Data types in JavaScript**

A data type tells us what kind of value a variable contains.

JavaScript has seven primitive types and one non-primitive category, objects.

### **Primitive data types**

| Data type | Example         | Meaning             |
| --------- | --------------- | ------------------- |
| String    | `"Hello"`       | Text                |
| Number    | `100`, `10.5`   | Numeric values      |
| Boolean   | `true`, `false` | True or false       |
| Undefined | `undefined`     | Value not assigned  |
| Null      | `null`          | Intentionally empty |
| BigInt    | `123n`          | Large integers      |
| Symbol    | `Symbol("id")`  | Unique identifier   |

Examples:

```
let name = "Alex";
let age = 25;
let isEmployed = true;
let salary;
let address = null;
let bigNumber = 12345678901234567890n;
let id = Symbol("userId");
```

### **Non-primitive data type**

Objects store collections of information.

```
let employee = {
    name: "Alex",
    age: 25,
    department: "IT"
};
```

Here, `employee` is an object.

Arrays are also objects in JavaScript.

```
let numbers = [10, 20, 30, 40];
```

We will study arrays in detail in a later module.

## **How do you check a data type?**

JavaScript provides the `typeof` operator.

```
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof {});
```

Output:

```
string
number
boolean
undefined
object
```

Important interview trap:

```
console.log(typeof null);
```

Output:

```
object
```

This is a historical JavaScript behaviour. `null` is a primitive value, even though `typeof null` returns `"object"`.

Another important example:

```
console.log(typeof []);
```

Output:

```
object
```

To check whether something is an array, use:

```
Array.isArray([]);
```

Output:

```
true
```

## **Type conversion and type coercion**

### **Type conversion**

You explicitly convert one data type into another.

Example:

```
let value = "100";

let result = Number(value);

console.log(result);
console.log(typeof result);
```

Output:

```
100
number
```

Other common conversions:

```
String(100);       // "100"
Number("25");      // 25
Boolean(1);        // true
parseInt("25px");  // 25
parseFloat("10.5");// 10.5
```

### **Type coercion**

JavaScript automatically converts values during certain operations.

Example:

```
console.log("10" + 5);
```

Output:

```
105
```

Why?

The `+` operator performs string concatenation when one operand is a string.

Another example:

```
console.log("10" - 5);
```

Output:

```
5
```

Why?

The subtraction operator converts `"10"` into a number.

Look at these interview examples:

```
console.log(10 + "20");
console.log(10 - "20");
console.log(true + 1);
console.log("5" * 2);
console.log(5 == "5");
console.log(5 === "5");
```

Output:

```
1020
-10
2
10
true
false
```

Understand the last two:

- `==` checks equality after allowing type conversion.
- `===` checks equality without type conversion.

In modern JavaScript, prefer `===` unless you have a specific reason to use loose equality.

## **Conditional statements**

Conditional statements allow a program to make decisions.

Suppose you want to check whether someone is eligible to vote based on an age of 18 or above.

```
let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}
```

Output:

```
Eligible to vote
```

The program checks the condition.

- If true, the `if` block executes.
- If false, the `else` block executes.

### **else if**

Use `else if` when you have multiple conditions.

```
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

Output:

```
Grade B
```

### **Logical operators**

| Operator | Meaning | Example                             |
| -------- | ------- | ----------------------------------- |
| `&&`     | AND     | Both conditions must be true        |
| `\|\|`   | OR      | At least one condition must be true |
| `!`      | NOT     | Reverses a boolean value            |

Example:

```
let age = 25;
let hasID = true;

if (age >= 18 && hasID === true) {
    console.log("Entry allowed");
}
```

Output:

```
Entry allowed
```

## **7. Loops**

Loops allow you to execute the same instructions repeatedly.

Suppose you want to print numbers from 1 to 5.

Without a loop:

```
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

With a loop:

```
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```
1
2
3
4
5
```

Understand the three parts:

```
for (let i = 1; i <= 5; i++)
```

- `let i = 1`: Starting point.
- `i <= 5`: Condition to continue.
- `i++`: Increase the value by one after each iteration.

### **while loop**

```
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

It produces the same output.

### **Difference**

- `for`: Useful when you know how many iterations you need.
- `while`: Useful when repetition depends on a condition.

## **Functions**

A function is a reusable block of code designed to perform a particular task.

Without a function:

```
let a = 10;
let b = 20;

console.log(a + b);
```

With a function:

```
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:

```
30
```

Understand these terms:

- `function`: Declares a function.
- `add`: Function name.
- `a, b`: Parameters.
- `10, 20`: Arguments passed during the function call.
- `return`: Sends the result back to the caller.

Another example:

```
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));
```

Output:

```
true
false
```

The `%` operator returns the remainder.

10 divided by 2 leaves remainder 0, so 10 is even.

# **Knowledge check**

**Question 1. What is the output?**

let x = 10;\
x = 20;\
console.log(x);

10

20

undefined

Error

**Question 2. What is the output?**

console.log(typeof null);

null

undefined

object

boolean

**Question 3. What is the output?**

console.log("5" + 2);

7

52

Error

NaN

**Question 4. What is the output?**

console.log(5 === "5");

true

false

5

Error

**Question 5. How many times does this loop execute?**

for (let i = 1; i <= 4; i++) {\
    &#x20; console.log(i);\
}

3

4

5

Infinite

**Question 6. What does return do in a function?**

function add(a, b) {\
    &#x20; return a + b;\
}

Prints the result

Stops the entire program

Sends a value back to the caller

Declares a variable


# **Knowledge check answers**

| Question | Correct answer                      | Explanation                                         |
| -------- | ----------------------------------- | --------------------------------------------------- |
| 1        | B. 20                               | `let` allows reassignment.                          |
| 2        | C. object                           | `typeof null` returns `"object"`.                   |
| 3        | B. 52                               | String concatenation happens with `+`.              |
| 4        | B. false                            | `===` checks both value and data type.              |
| 5        | B. 4                                | The loop runs for 1, 2, 3 and 4.                    |
| 6        | C. Sends a value back to the caller | `return` gives the result back to the calling code. |


# **Practical coding assignment**

Open your JavaScript environment, preferably your existing VS Code setup.

Create a file named:

`day1-practice.js`

Complete these five tasks yourself.

1. Declare variables for your name, age and whether you are currently employed. Print all three.
2. Write a program to check whether a number is positive, negative or zero.
3. Print all even numbers between 1 and 20 using a loop.
4. Write a function that accepts two numbers and returns their multiplication.
5. Write a function that accepts an age and returns `true` if the person is eligible to vote, otherwise `false`.

# **Practical coding answers**

## **Declare variables and print them**

```
let name = "Alex";
let age = 25;
let isEmployed = true;

console.log(name);
console.log(age);
console.log(isEmployed);
```

Output:

```
Alex
25
true
```

Explanation:

- `name` stores a string.
- `age` stores a number.
- `isEmployed` stores a boolean.

## **Check whether a number is positive, negative or zero**

```
let number = -10;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
```

Output:

```
Negative
```

Explanation:

There are three possible conditions:

- Greater than zero: Positive.
- Less than zero: Negative.
- Equal to zero: Zero.

## **Print even numbers between 1 and 20**

```
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

Output:

```
2
4
6
8
10
12
14
16
18
20
```

Explanation:

- The loop starts at 1.
- It continues until 20.
- `%` calculates the remainder.
- Even numbers have a remainder of zero when divided by 2.

An alternative approach:

```
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
```

This is more efficient because it skips odd numbers entirely.

## **Function that multiplies two numbers**

```
function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log(result);
```

Output:

```
20
```

Explanation:

- `a` and `b` are parameters.
- `5` and `4` are arguments.
- `return` sends the multiplication result back.
- `result` stores the returned value.

## **Check voting eligibility**

```
function checkVotingEligibility(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(checkVotingEligibility(25));
console.log(checkVotingEligibility(16));
```

Output:

```
true
false
```

A shorter version:

```
function checkVotingEligibility(age) {
    return age >= 18;
}
```

Why does this work?

The expression `age >= 18` itself evaluates to either `true` or `false`. The function returns that result directly.

# **Interviewer review**

| Concept       | Important point          |
| ------------- | ------------------------ |
| `let`         | Reassignment allowed     |
| `const`       | Reassignment not allowed |
| `typeof null` | Returns object           |
| `==`          | Allows type coercion     |
| `===`         | Strict equality          |
| `%`           | Remainder operator       |
| `return`      | Sends a value back       |
| `for`         | Repeated execution       |
| `if/else`     | Decision making          |

## **One additional challenge**

Try answering this without executing the code.

```
function calculate(a, b) {
    let result = a + b;

    if (result > 10) {
        return result * 2;
    }

    return result;
}

console.log(calculate(4, 3));
console.log(calculate(6, 5));
```

What are the two outputs?

# **Previous challenge: Predict the output**

Given:

```
function calculate(a, b) {
    let result = a + b;

    if (result > 10) {
        return result * 2;
    }

    return result;
}

console.log(calculate(4, 3));
console.log(calculate(6, 5));
```

**First execution:**

```
calculate(4, 3);
```

Step by step:

1. `a = 4`, `b = 3`.
2. `result = 4 + 3`, which gives 7.
3. Is `7 > 10`? No.
4. The first return is skipped.
5. `return result` returns 7.

**Second execution:**

```
calculate(6, 5);
```

Step by step:

1. `a = 6`, `b = 5`.
2. `result = 6 + 5`, which gives 11.
3. Is `11 > 10`? Yes.
4. `return result * 2` returns 22.
5. The function stops immediately. The final return is not executed.

**Final output**

# **7**

# **22**

Important concept: Once JavaScript executes `return`, the function immediately terminates.

# **Interview preparation**

## **Question 1: Variable behaviour**

What will this code print?

```
let x = 10;

function test() {
    let x = 20;
    console.log(x);
}

test();

console.log(x);
```

Answer:

```
20
10
```

Why?

The function creates its own local variable named `x`.

The global `x` remains 10.

This introduces an important concept called scope.

- Global scope: Accessible from the surrounding global context.
- Local scope: A variable declared inside a function is accessible within that function.

## **Question 2: Predict the output**

```
console.log(1 + "2" + 3);
console.log(1 + 2 + "3");
console.log("10" - 5 + 2);
```

Answer:

```
123
33
7
```

Explanation:

First:

```
1 + "2" + 3
```

- `1 + "2"` becomes `"12"`.
- `"12" + 3` becomes `"123"`.

Second:

```
1 + 2 + "3"
```

- `1 + 2` becomes `3`.
- `3 + "3"` becomes `"33"`.

Third:

```
"10" - 5 + 2
```

- `"10" - 5` becomes 5.
- `5 + 2` becomes 7.

The order of evaluation matters.

## **Question 3: Understand truthy and falsy values**

JavaScript converts values into booleans when they appear in conditions.

Falsy values include:

```
false
0
-0
0n
""
null
undefined
NaN
```

Most other values are truthy.

For example:

```
if ("hello") {
    console.log("Executed");
}

if (0) {
    console.log("Not executed");
}

if ([]) {
    console.log("Array executed");
}
```

Output:

```
Executed
Array executed
```

Important: An empty array `[]` and an empty object `{}` are truthy in JavaScript.

# **Interview coding problems**

## **Problem 1: Find the largest of three numbers**

Write a function that accepts three numbers and returns the largest.

Example:

```
findLargest(10, 25, 15);
```

Expected output:

```
25
```

Solution:

```
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findLargest(10, 25, 15));
```

## **Problem 2: Reverse a number**

Input:

```
1234
```

Expected output:

```
4321
```

Solution:

```
function reverseNumber(num) {
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;

        reversed = reversed * 10 + digit;

        num = Math.floor(num / 10);
    }

    return reversed;
}

console.log(reverseNumber(1234));
```

Output:

```
4321
```

Understand the process:

| Iteration | Digit | Reversed |
| --------- | ----- | -------- |
| 1         | 4     | 4        |
| 2         | 3     | 43       |
| 3         | 2     | 432      |
| 4         | 1     | 4321     |

This is a good introduction to mathematical problem solving.

Note: This basic version assumes a non-negative integer input.

## **Problem 3: Check whether a number is prime**

A prime number is a number greater than 1 that has exactly two factors: 1 and itself.

Examples:

- 2 is prime.
- 3 is prime.
- 4 is not prime.
- 7 is prime.
- 9 is not prime.

Solution:

```
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(9));
```

Output:

```
true
false
```

Why do we check only up to the square root?

If a number has a factor larger than its square root, it must also have a corresponding factor smaller than its square root.

This reduces unnecessary iterations.

For example, checking whether 49 is prime requires testing divisors only up to 7.

# **Additional interview concepts**

Consider these two programs.

**Approach A**

```
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

**Approach B**

```
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Both perform five print operations.

But what if you need to print 1,000 numbers?

The second approach scales more naturally.

This leads us to Big O notation, which measures how an algorithm's resource requirements grow as input size increases.

We'll study it properly later.

For now, remember:

| Complexity | Meaning     | Example                          |
| ---------- | ----------- | -------------------------------- |
| O(1)       | Constant    | Accessing an array element       |
| O(n)       | Linear      | Visiting every element           |
| O(n²)      | Quadratic   | Nested loops over the same input |
| O(log n)   | Logarithmic | Binary search                    |

# **Practical assessment**

1. Write a function to find the smallest of three numbers.
2. Write a function to check whether a number is even or odd.
3. Write a program to calculate the sum of numbers from 1 to N using a loop.
4. Write a function to count the digits in a positive integer.
5. Write a function to check whether a number is a palindrome. Example: 121 returns true, 123 returns false.
6. Write a function to calculate the factorial of a number. Example: 5 returns 120.

Here are the solutions to all six Day 1 coding assignments. I'll explain the logic behind each one, including how to approach similar problems in interviews.

# **Coding assignment solutions**

## **1. Find the smallest of three numbers**

**Problem:** Given three numbers, return the smallest number.

Example:

```
findSmallest(10, 25, 5);
```

Expected output: `5`

**Solution:**

```
function findSmallest(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findSmallest(10, 25, 5));
```

Output:

```
5
```

**Explanation:**

- First, check whether `a` is smaller than or equal to both other numbers.
- If not, check whether `b` is the smallest.
- Otherwise, return `c`.

The `<=` operator also handles cases where two or more numbers are equal.

## **2. Check whether a number is even or odd**

**Problem:** Return whether a number is even or odd.

**Solution:**

```
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));
```

Output:

```
Even
Odd
```

**Explanation:**

The `%` operator returns the remainder.

- 10 % 2 = 0, so 10 is even.
- 7 % 2 = 1, so 7 is odd.

Interview tip: You can also write this in one line:

```
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
```

This uses the ternary operator.

## **3. Calculate the sum of numbers from 1 to N**

**Problem:** Calculate the sum of all integers from 1 to N.

Example:

```
sumNumbers(5);
```

Expected calculation:

`1 + 2 + 3 + 4 + 5 = 15`

**Solution using a loop:**

```
function sumNumbers(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}

console.log(sumNumbers(5));
```

Output:

```
15
```

**Explanation:**

| Iteration | i | sum |
| --------- | - | --- |
| 1         | 1 | 1   |
| 2         | 2 | 3   |
| 3         | 3 | 6   |
| 4         | 4 | 10  |
| 5         | 5 | 15  |

At every iteration, we add the current number to `sum`.

**Interview improvement:**

There is a mathematical formula:

Sum = (N *( N + 1)) / 2

```
function sumNumbers(n) {
    return n * (n + 1) / 2;
}

console.log(sumNumbers(5));
```

Output: `15`

The loop takes O(n) time. The formula takes O(1) time.

This is an early example of algorithm optimisation.

## **4. Count the digits in a positive integer**

**Problem:** Count how many digits a number contains.

Example:

```
countDigits(12345);
```

Expected output: `5`

**Solution:**

```
function countDigits(num) {
    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}

console.log(countDigits(12345));
```

Output:

```
5
```

**Explanation:**

Every division by 10 removes the last digit.

| Iteration | Number after division | Count |
| --------- | --------------------- | ----- |
| 1         | 1234                  | 1     |
| 2         | 123                   | 2     |
| 3         | 12                    | 3     |
| 4         | 1                     | 4     |
| 5         | 0                     | 5     |

The loop stops when the number becomes zero.

Note: This version assumes a positive integer. For a more robust interview solution that also handles zero and negative numbers:

```
function countDigits(num) {
    num = Math.abs(num);

    if (num === 0) {
        return 1;
    }

    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}
```

## **5. Check whether a number is a palindrome**

**Problem:** A palindrome number reads the same forwards and backwards.

Examples:

- 121 → true
- 123 → false
- 1221 → true
- 12321 → true

**Solution:**

```
function isPalindrome(num) {
    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;

        reversed = reversed * 10 + digit;

        num = Math.floor(num / 10);
    }

    return original === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(123));
```

Output:

```
true
false
```

**Explanation:**

For input 121:

| Iteration | Extracted digit | Reversed number |
| --------- | --------------- | --------------- |
| 1         | 1               | 1               |
| 2         | 2               | 12              |
| 3         | 1               | 121             |

Finally:

- Original number = 121
- Reversed number = 121
- Both are equal, so return `true`.

Important: We preserve the original number because the `while` loop changes `num`.

## **6. Calculate factorial of a number**

**Problem:** Factorial means multiplying a number by all positive integers below it.

For example:

5! = 5 * 4 * 3 * 2 * 1 = 120

Remember:

0! = 1

**Solution:**

```
function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(5));
console.log(factorial(0));
```

Output:

```
120
1
```

**Explanation:**

| Iteration | i | result |
| --------- | - | ------ |
| 1         | 1 | 1      |
| 2         | 2 | 2      |
| 3         | 3 | 6      |
| 4         | 4 | 24     |
| 5         | 5 | 120    |

We initialise `result` to 1 because multiplying by 1 does not change the value.

For a production-quality interview answer, validate the input as a non-negative integer. Also note that JavaScript's regular `Number` type has precision limits for large factorials.

# **Interviewer's evaluation: What you should learn**

These six problems introduce several important programming concepts.

| Problem           | Main concept                 | Time complexity |
| ----------------- | ---------------------------- | --------------- |
| Smallest of three | Conditions                   | O(1)            |
| Even or odd       | Modulo                       | O(1)            |
| Sum of N numbers  | Loops and optimisation       | O(n) or O(1)    |
| Count digits      | While loop and division      | O(log n)        |
| Palindrome        | Digit extraction             | O(log n)        |
| Factorial         | Iteration and multiplication | O(n)            |

These complexities assume ordinary fixed-width number operations.

# **Additional interview questions**

**Question 1: What is the difference between&#x20;**`break`**&#x20;and&#x20;**`continue`**?**

```
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}
```

Output:

```
1
2
```

`break` terminates the loop entirely.

Now:

```
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```
1
2
4
5
```

`continue` skips the current iteration and proceeds to the next one.

**Question 2: What is the difference between a parameter and an argument?**

```
function add(a, b) {
    return a + b;
}

add(10, 20);
```

- `a` and `b` are parameters.
- `10` and `20` are arguments.

**Question 3: What is the difference between&#x20;**`return`**&#x20;and&#x20;**`console.log()`**?**

```
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

- `return` sends a value back from the function.
- `console.log()` displays a value in the console.
- They serve different purposes.
