# DSA With JS

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

## **Scope in JavaScript**

First, what is scope?

Scope determines where you can access a variable or function in your code.

JavaScript has three main types of scope:

- Global scope
- Function scope
- Block scope
### **A. Global scope**

A variable declared outside functions and blocks is generally accessible throughout its containing global scope.

```
let name = "Alex";

function greet() {
    console.log(name);
}

greet();

console.log(name);
```

Output:

```
Alex
Alex
```

Why?

`name` is declared outside the function. The function can access it.

### **B. Function scope**

Variables declared inside a function are accessible only inside that function.

```
function greet() {
    let message = "Hello";

    console.log(message);
}

greet();

console.log(message);
```

Output:

```
Hello
ReferenceError
```

Why?

`message` belongs to the `greet()` function.

The code outside the function cannot access it.

### **C. Block scope**

A block is a section of code enclosed within curly braces `{ }`.

For example:

```
{
    let age = 25;
    const name = "Alex";

    console.log(age);
    console.log(name);
}

console.log(age);
```

Output:

```
25
Alex
ReferenceError
```

Why?

`let` and `const` are block-scoped.

They are accessible inside the block but not outside it.

### **Important interview comparison**

| Declaration | Scope    | Redeclaration  | Reassignment |
| ----------- | -------- | -------------- | ------------ |
| var         | Function | Yes            | Yes          |
| let         | Block    | No, same scope | Yes          |
| const       | Block    | No, same scope | No           |

### **Special case: var**

Unlike `let` and `const`, `var` is not block-scoped.

```
if (true) {
    var a = 10;
    let b = 20;
}

console.log(a);
console.log(b);
```

Output:

```
10
ReferenceError
```

Why?

- `a` is declared using `var`, so it remains accessible outside the `if` block within the same function or global scope.
- `b` is block-scoped, so it is unavailable outside the block.

## **Hoisting in JavaScript**

What is hoisting?

Hoisting describes how JavaScript processes declarations before executing code within a scope.

Let's understand it through examples.

### **A. Hoisting with var**

```
console.log(a);

var a = 10;
```

Output:

```
undefined
```

Why?

JavaScript processes the `var` declaration before executing the code.

Conceptually, it behaves like this:

```
var a;

console.log(a);

a = 10;
```

The variable exists, but its value is initially `undefined`.

### **B. Hoisting with let**

```
console.log(a);

let a = 10;
```

Output:

```
ReferenceError
```

Why?

`let` declarations are also processed before execution, but they remain uninitialised until their declaration is evaluated.

The period between entering the scope and initialising the variable is called the Temporal Dead Zone (TDZ).

### **C. Hoisting with const**

```
console.log(a);

const a = 10;
```

Output:

```
ReferenceError
```

`const` also has a Temporal Dead Zone.

### **Interview comparison**

| Declaration | Hoisted? | Access before declaration |
| ----------- | -------- | ------------------------- |
| var         | Yes      | Returns undefined         |
| let         | Yes      | ReferenceError            |
| const       | Yes      | ReferenceError            |

Important: Don't say `let` and `const` are not hoisted. They are hoisted, but remain inaccessible in the TDZ before initialisation.

### **D. Function hoisting**

Consider this:

```
greet();

function greet() {
    console.log("Hello Google!");
}
```

Output:

```
Hello Google!
```

Why?

A function declaration is available before its position in the code.

But look at this:

```
greet();

var greet = function() {
    console.log("Hello");
};
```

Output:

```
TypeError
```

Why?

The variable `greet` is hoisted and initially set to `undefined`. The function assignment happens later.

Calling `undefined()` produces a TypeError.

Remember the difference between function declarations and function expressions.

## **JavaScript Execution Context**

Now let's understand what happens when JavaScript runs your code.

An execution context is the environment in which JavaScript executes code.

JavaScript creates two important kinds of execution contexts:

1. Global Execution Context.
2. Function Execution Context.

Let's use an example.

```
let a = 10;
let b = 20;

function add(x, y) {
    let result = x + y;
    return result;
}

let answer = add(a, b);

console.log(answer);
```

Output:

```
30
```

What happens internally?

**Step 1: Global execution context**

JavaScript creates the global environment and prepares declarations.

**Global variables**

- `a` = 10
- `b` = 20
- `add` = function
- `answer` = initially uninitialised

**Step 2: Function execution context**

When `add(a, b)` runs, JavaScript creates a new function execution context.

**Function: add**

- `x` = 10
- `y` = 20
- `result` = 30

**Step 3: Return**

The function returns 30.

Its execution context is removed from the call stack.

**Step 4: Global execution continues**

`answer` receives 30 and `console.log(answer)` prints it.

### **What is the Call Stack?**

The call stack tracks which function is currently executing.

Example:

```
function first() {
    second();
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
```

Output:

```
Second
First
```

Why?

1. `first()` is called.
2. `first()` calls `second()`.
3. `second()` executes first.
4. `second()` finishes.
5. Execution returns to `first()`.
6. `first()` prints its message.

This is called Last In, First Out (LIFO).

**Call stack illustration**

**first()**

**second()**

Currently executing

second() finishes first, then first() resumes.

# **4. Interview questions**

### **Question 1: Scope**

What is the output?

```
let x = 10;

function test() {
    let x = 20;

    if (true) {
        let x = 30;
        console.log(x);
    }

    console.log(x);
}

test();

console.log(x);
```

Answer:

```
30
20
10
```

Explanation:

There are three separate variables named `x`, each belonging to a different scope.

### **Question 2: Hoisting**

Predict the output.

```
console.log(a);

var a = 10;

function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}

test();

console.log(a);
```

Answer:

```
undefined
undefined
20
10
```

Explanation:

Inside `test()`, the local `var a` is hoisted.

It shadows the global `a` throughout the function.

So the first `console.log(a)` inside the function accesses the local variable, which is initially `undefined`.

### **Question 3: Function hoisting**

```
sayHello();

function sayHello() {
    console.log("Hello");
}

sayHello();
```

Answer:

```
Hello
Hello
```

Both calls work because the function declaration is available throughout its scope.

### **Question 4: Call stack**

Predict the output.

```
function one() {
    console.log("One");
    two();
    console.log("Four");
}

function two() {
    console.log("Two");
    three();
}

function three() {
    console.log("Three");
}

one();
```

Answer:

```
One
Two
Three
Four
```

The call stack executes the innermost function first and returns to the previous function.

# **Practical coding exercises**

### **Exercise 1: Scope debugging**

Find the error and explain why it happens.

```
function calculate() {
    let total = 100;
}

calculate();

console.log(total);
```

### **Exercise 2: Hoisting prediction**

Without running the code, predict the output.

```
console.log(a);

var a = 5;

function test() {
    console.log(a);
    var a = 15;
}

test();
```

### **Exercise 3: Call stack**

Write down the exact output.

```
function a() {
    console.log("A");
    b();
    console.log("B");
}

function b() {
    console.log("C");
    c();
}

function c() {
    console.log("D");
}

a();
```

### **Exercise 4: Coding challenge**

Write a function that accepts a number and returns the sum of its digits.

Example:

```
sumOfDigits(1234);
```

Expected output:

```
10
```

Hint:

- Use `% 10` to extract the last digit.
- Use `Math.floor(num / 10)` to remove the last digit.
- Use a loop until the number becomes zero.

# **Practical exercise answers**

## **1. Scope debugging**

**Given code:**

```
function calculate() {
    let total = 100;
}

calculate();

console.log(total);
```

Correct answer

Output:

```
ReferenceError: total is not defined
```

**Why?**

1. The function `calculate()` is called.
2. Inside the function, `total` is declared using `let`.
3. The variable exists only inside the function.
4. Outside the function, JavaScript cannot access `total`.

**How to fix it?**

Use `return` to send the value outside the function.

```
function calculate() {
    let total = 100;
    return total;
}

let result = calculate();

console.log(result);
```

Output:

```
100
```

Interview takeaway: Understand the difference between local variables and returned values.

## **2. Hoisting prediction**

**Given code:**

```
console.log(a);

var a = 5;

function test() {
    console.log(a);
    var a = 15;
}

test();
```

Correct answer

Output:

```
undefined
undefined
```

Let's understand why.

**First console.log:**

```
console.log(a);
var a = 5;
```

Because `var` is hoisted, JavaScript processes it conceptually as:

```
var a;

console.log(a);

a = 5;
```

So the output is `undefined`.

**Inside the function:**

```
function test() {
    console.log(a);
    var a = 15;
}
```

The local `var a` is hoisted within the function.

Conceptually:

```
function test() {
    var a;

    console.log(a);

    a = 15;
}
```

Therefore, the second output is also `undefined`.

Important interview concept: The local variable shadows the global variable throughout the function, even before its assignment.

## **3. Call stack**

**Given code:**

```
function a() {
    console.log("A");
    b();
    console.log("B");
}

function b() {
    console.log("C");
    c();
}

function c() {
    console.log("D");
}

a();
```

Correct answer

Output:

```
A
C
D
B
```

**Execution step by step:**

| Step | Execution         | Output |
| ---- | ----------------- | ------ |
| 1    | `a()` starts      | A      |
| 2    | `a()` calls `b()` |        |
| 3    | `b()` starts      | C      |
| 4    | `b()` calls `c()` |        |
| 5    | `c()` starts      | D      |
| 6    | `c()` finishes    |        |
| 7    | `b()` finishes    |        |
| 8    | `a()` resumes     | B      |

The call stack follows LIFO, Last In, First Out.

**Call stack execution**

a()

b()

c()&#x20;

Executes first to finish



When c() finishes, control returns to b(), then a().

Interview takeaway: When one function calls another, the calling function pauses until the called function finishes.

## **4. Coding challenge: Sum of digits**

**Problem:** Write a function that accepts a number and returns the sum of its digits.

Example:

```
sumOfDigits(1234);
```

Expected output:

```
10
```

**Solution:**

```
function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;

        sum = sum + digit;

        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumOfDigits(1234));
```

Output:

```
10
```

**Step-by-step execution:**

| Iteration | Number | Extracted digit | Sum |
| --------- | ------ | --------------- | --- |
| 1         | 1234   | 4               | 4   |
| 2         | 123    | 3               | 7   |
| 3         | 12     | 2               | 9   |
| 4         | 1      | 1               | 10  |

Let's understand the two important operations.

`num % 10`

Extracts the last digit.

Example: `1234 % 10 = 4`

`Math.floor(num / 10)`

Removes the last digit.

Example: `Math.floor(1234 / 10) = 123`

We repeat until the number becomes zero.

**Improved version that handles zero and negative inputs:**

```
function sumOfDigits(num) {
    num = Math.abs(num);

    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumOfDigits(1234));  // 10
console.log(sumOfDigits(-1234)); // 10
console.log(sumOfDigits(0));     // 0
```

## **Important concepts and definitions**

| Concept                  | Definition                                                                                                                                            |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scope                    | The region of a program where a variable or function is accessible.                                                                                   |
| Global scope             | A variable declared outside functions and blocks. It is accessible throughout the relevant program scope.                                             |
| Function scope           | Variables declared inside a function are accessible within that function.                                                                             |
| Block scope              | Variables declared with `let` or `const` inside `{ }` are accessible only within that block.                                                          |
| Hoisting                 | JavaScript processes declarations before executing the code. This affects when variables and functions are accessible.                                |
| Temporal Dead Zone (TDZ) | The period between entering a scope and reaching a `let` or `const` declaration. Accessing the variable during this period causes a `ReferenceError`. |
| Shadowing                | Declaring a variable inside a scope with the same name as a variable in an outer scope. The inner variable takes precedence within its scope.         |
| Execution context        | The environment JavaScript creates to execute code. It tracks variables, functions and the current execution.                                         |
| Call stack               | A structure JavaScript uses to track function calls. It follows Last In, First Out (LIFO).                                                            |
| Parameter                | A variable listed in a function definition that receives an input value.                                                                              |
| Argument                 | The actual value passed to a function when calling it.                                                                                                |
| Return                   | The statement that sends a result back from a function and ends that function's current execution.                                                    |
| `console.log()`          | A method used to display information in the console. It does not return the displayed value.                                                          |
| Modulo (`%`)             | An operator that returns the remainder after division.                                                                                                |
| `Math.floor()`           | A JavaScript method that rounds a number down to the nearest integer.                                                                                 |
| Recursion                | A technique where a function calls itself to solve a smaller version of a problem.                                                                    |
| Base case                | The condition that stops a recursive function from calling itself.                                                                                    |
| Recursive case           | The part of a recursive function that calls itself with a smaller or simpler input.                                                                   |
| Time complexity          | A measure of how an algorithm's running time grows as its input size increases.                                                                       |
| Space complexity         | A measure of how an algorithm's memory usage grows as its input size increases.                                                                       |
| Big O notation           | A way to describe the growth rate of an algorithm's time or space requirements.                                                                       |

## **Recursion**

### **What is recursion?**

Recursion is a programming technique in which a function calls itself to solve a problem.

Instead of solving the entire problem at once, the function breaks it into smaller versions of the same problem.

Consider this task:

Print numbers from 5 down to 1.

You can solve it using a loop:

```
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
```

You can also solve it using recursion:

```
function countDown(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  countDown(n - 1);
}

countDown(5);
```

Output:

```
5
4
3
2
1
```

### **Two essential parts of recursion**

Every properly designed recursive function needs two parts.

**Base case**

The condition that stops the function from calling itself.

```
if (n === 0) {
  return;
}
```

Without a base case, the function keeps calling itself until JavaScript runs out of call stack space.

**Recursive case**

The part where the function calls itself with a smaller or simpler input.

```
countDown(n - 1);
```

Here, `n` decreases by one each time. This moves the function towards the base case.

### **Understand how recursion executes**

For this call:

```
countDown(3);
```

The execution happens like this:

## **Function calls**

1. `countDown(3)` prints 3 and calls `countDown(2)`.
2. `countDown(2)` prints 2 and calls `countDown(1)`.
3. `countDown(1)` prints 1 and calls `countDown(0)`.
4. `countDown(0)` reaches the base case and returns.

Output: 3, 2, 1

Each function call gets its own execution context. The call stack tracks these calls until they return.

### **Recursion example: Factorial**

First, understand factorial.

The factorial of a positive integer is the product of all positive integers from 1 up to that number.

For example:

4! = 4 * 3 * 2 * 1 = 24

Special rule:

0! = 1

Now let's write a recursive function.

```
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(4));
```

Output:

```
24
```

**How does&#x20;**`factorial(4)`**&#x20;work?**

The function keeps calling itself:

```
factorial(4)
4 * factorial(3)

factorial(3)
3 * factorial(2)

factorial(2)
2 * factorial(1)

factorial(1)
Returns 1
```

Now the calls return in reverse order:

```
factorial(1) = 1
factorial(2) = 2 * 1 = 2
factorial(3) = 3 * 2 = 6
factorial(4) = 4 * 6 = 24
```

**Remember the two directions**

Going down

`4 → 3 → 2 → 1`

Returning

`1 → 2 → 6 → 24`

### **Recursion versus iteration**

Iteration means repeating instructions using loops.

Recursion means repeating work through function calls.

| Factor             | Iteration      | Recursion       |
| ------------------ | -------------- | --------------- |
| Repetition         | Loops          | Function calls  |
| Stopping condition | Loop condition | Base case       |
| Memory             | Usually less   | Uses call stack |
| Common risk        | Infinite loop  | Stack overflow  |

Both approaches solve many of the same problems. Recursion is especially useful for trees, graphs and divide-and-conquer algorithms.

### **Common recursion mistakes**

**Mistake 1: Missing base case**

```
function test(n) {
  console.log(n);
  test(n - 1);
}
```

This function never stops on its own. It eventually causes a stack overflow.

**Mistake 2: Not moving towards the base case**

```
function test(n) {
  if (n === 0) return;

  test(n);
}
```

The value never changes. The base case is never reached.

**Mistake 3: Forgetting to return the recursive result**

```
function factorial(n) {
  if (n === 1) return 1;

  n * factorial(n - 1);
}
```

This function calculates the multiplication but does not return the result to its caller. The correct statement is:

```
return n * factorial(n - 1);
```

### **Another interview example: Sum of numbers using recursion**

Task: Find the sum of numbers from 1 to 5.

Expected result:

1+2+3+4+5=15

Code:

```
function sum(n) {
  if (n === 0) {
    return 0;
  }

  return n + sum(n - 1);
}

console.log(sum(5));
```

Output:

```
15
```

Execution:

```
sum(5) = 5 + sum(4)
sum(4) = 4 + sum(3)
sum(3) = 3 + sum(2)
sum(2) = 2 + sum(1)
sum(1) = 1 + sum(0)
sum(0) = 0
```

Returning:

```
1 + 0  = 1
2 + 1  = 3
3 + 3  = 6
4 + 6  = 10
5 + 10 = 15
```

### **Recursion practice questions**

These are useful for checking your understanding.

**Question 1. Predict the output.**

```
function print(n) {
  if (n === 0) return;

  console.log(n);
  print(n - 1);
}

print(4);
```

Answer:

```
4
3
2
1
```

**Question 2. Predict the output.**

```
function calculate(n) {
  if (n === 1) return 1;

  return n + calculate(n - 1);
}

console.log(calculate(4));
```

Answer:

```
10
```

Because 4+3+2+1=10.

**Question 3. What is the base case?**

```
function powerOfTwo(n) {
  if (n === 0) return 1;

  return 2 * powerOfTwo(n - 1);
}
```

Answer: `n === 0`. It stops further function calls.

**Question 4. What happens if a recursive function has no valid stopping condition?**

Answer: It keeps making function calls until the call stack limit is reached, resulting in a stack overflow error.

# **Complete Big O and complexity analysis**

## **First understand what we are measuring**

Suppose you have an array containing 10 numbers.

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

Now suppose you have 10,000 numbers.

An algorithm that performs 10 operations on the first input might perform 10,000 operations on the second.

We use `n` to represent the input size.

Complexity analysis answers two questions:

1. Time complexity: How does the amount of work grow as `n` increases?
2. Space complexity: How does the additional memory required grow as `n` increases?

Important: Big O does not measure exact seconds. It describes growth as input size increases.

## **The complexity classes you must know**

From slower growth to faster growth, for sufficiently large n.

| Complexity | Name                      | Typical pattern              |
| ---------- | ------------------------- | ---------------------------- |
| O(1)       | Constant                  | Direct access                |
| O(log n)   | Logarithmic               | Repeated halving             |
| O(√n)      | Square root               | Checking up to square root   |
| O(n)       | Linear                    | One full traversal           |
| O(n log n) | Linearithmic              | Efficient comparison sorting |
| O(n + k)   | Linear in two input sizes | Processing two collections   |
| O(n²)      | Quadratic                 | Two nested loops             |
| O(n³)      | Cubic                     | Three nested loops           |
| O(2ⁿ)      | Exponential               | Some recursive branching     |
| O(n!)      | Factorial                 | Generating all permutations  |

There is no single universal ranking for every expression involving multiple variables. For example, compare `n + k` and `n²` only after understanding how `n` and `k` relate.

## **Learn each complexity with code**

### **A. O(1), Constant time**

The number of operations does not grow with input size.

```
function getElement(arr) {
  return arr[0];
}
```

Whether the array contains 10 or 10 lakh elements, accessing the first element takes a constant number of operations.

Another example:

```
function add(a, b) {
  return a + b;
}
```

Time: O(1).

### **B. O(log n), Logarithmic time**

The input size gets divided by a fixed factor in each iteration.

```
function example(n) {
  while (n > 1) {
    n = Math.floor(n / 2);
  }
}
```

Suppose `n = 32`.

```
32 → 16 → 8 → 4 → 2 → 1
```

There are 5 iterations.

If `n = 1024`, there are only 10 iterations.

Why? Because:

2^5=32, 2^10=1024

This gives O(log n).

Common examples:

- Binary search.
- Repeatedly dividing a number by 2.
- Searching in a balanced binary search tree.

**Interview trick:** Look for `i = i * 2`, `i = i / 2`, or repeatedly halving the search space.

### **C. O(√n), Square-root time**

Consider checking whether a number is prime.

A simple method checks every number from 2 to `n - 1`.

But you only need to check divisors up to the square root of `n`.

Why?

If a number has a divisor greater than its square root, it must also have a corresponding divisor smaller than its square root.

```
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
```

The loop runs approximately (√n) times.

Time: O(√n).

**Interview trick:** Look for a loop condition like:

```
i * i <= n
```

or:

```
i <= Math.sqrt(n)
```

### **D. O(n), Linear time**

One operation for each input element.

```
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

For `n` elements, the loop runs `n` times.

Time: O(n).

### **E. O(n log n), Linearithmic time**

It often occurs when:

- You divide the input into smaller parts.
- Each level processes approximately `n` elements.
- The number of levels is approximately `log n`.

Example: Merge Sort.

Merge Sort divides an array into halves until individual elements remain. It then merges those parts in sorted order.

```
[8, 4, 2, 6]

Divide:
[8, 4] [2, 6]

Divide:
[8] [4] [2] [6]

Merge:
[4, 8] [2, 6]

Final merge:
[2, 4, 6, 8]
```

Why O(n log n)?

- Number of levels: O(log n).
- Work at each level: O(n).

Therefore:

O(n)* O(\log n)=O(n\log n)

Time: O(n log n).

Auxiliary space for a typical array-based Merge Sort: O(n).

Other examples include Heap Sort and average-case Quick Sort.

### **F. O(n + k), Linear time in two input sizes**

You specifically asked about this.

Here, `n` and `k` represent two separate input sizes.

Consider this code:

```
function printTwoArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    console.log(arr2[j]);
  }
}
```

Let:

- `n` = number of elements in `arr1`.
- `k` = number of elements in `arr2`.

The first loop runs `n` times.

The second loop runs `k` times.

Total work:

n+k

Time complexity: O(n + k).

**Important interview trick:** Do not automatically convert O(n + k) into O(n).

You only simplify it to O(n) if you know that `k` is bounded by or grows proportionally with `n`.

For example, if both arrays always have the same length, then:

O(n+n)=O(2n)=O(n)

But if their sizes are independent, preserve O(n + k).

### **G. O(nk), Product of two independent input sizes**

Consider:

```
function compareArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr1[i], arr2[j]);
    }
  }
}
```

Let:

- `n` = size of the first array.
- `k` = size of the second array.

The outer loop runs `n` times.

For every outer iteration, the inner loop runs `k` times.

Total operations:

n * k

Time complexity: O(nk).

If both arrays have the same size, this becomes O(n²).

### **H. O(n²), Quadratic time**

Two nested loops that each run `n` times.

```
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

Total operations:

n * n = n^2

Time: O(n²).

### **I. O(n³), Cubic time**

Three nested loops, each running `n` times.

```
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      console.log(i, j, k);
    }
  }
}
```

Total operations:

n * n *n = n^3

Time: O(n³).

### **J. O(2ⁿ), Exponential time**

This occurs in some recursive algorithms where each call creates two more calls.

Example: naive recursive Fibonacci.

```
function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

The function repeatedly recalculates the same Fibonacci values.

Time: O(2ⁿ) as a common upper-bound description.

### **K. O(n!), Factorial time**

This often appears when generating every possible arrangement of `n` distinct elements.

For example, the permutations of `[1, 2, 3]` are:

```
123
132
213
231
312
321
```

There are:

3!= 3 * 2 = 6

For `n` distinct elements, there are `n!` permutations.

A common algorithm that generates all permutations takes O(n × n!) time if it also copies or outputs each length-`n` permutation. The recursive search overhead alone is often described as O(n!).

## **Big O, Big Omega and Big Theta**

These three notations describe bounds on how an algorithm's resource usage grows.

**Big O: O**

Upper bound

Describes an asymptotic upper bound on growth.

Example: An algorithm with O(n²) time does not grow faster than a constant multiple of n² for sufficiently large inputs.

**Big Omega: Ω**

Lower bound

Describes an asymptotic lower bound on growth.

Example: Ω(n) means the growth is at least a constant multiple of n for sufficiently large inputs.

**Big Theta: Θ**

Tight bound

Describes an asymptotically tight bound. The growth is bounded both above and below by constant multiples of the same function.

Example: Θ(n) means the growth rate is linear.

### **Understand with one code example**

```
function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
```

Assume the array has `n` elements.

| Case         | Situation                                                                 | Time |
| ------------ | ------------------------------------------------------------------------- | ---- |
| Best case    | Target is at the first position                                           | Θ(1) |
| Average case | Target is somewhere in the middle on average, assuming a uniform position | Θ(n) |
| Worst case   | Target is at the end or absent                                            | Θ(n) |

For this algorithm:

- Worst-case time: O(n).
- Best-case time: Ω(1).
- Worst-case growth is also Θ(n), because it takes linear time in the worst case.

**Important distinction:** O, Ω and Θ describe mathematical bounds. Best case, average case and worst case describe which input situation you are analysing. They are related, but they are not interchangeable.

For example, saying "Big O always means worst case" is an oversimplification. In interviews, people often ask for worst-case Big O, so state the case you are analysing.

## **Time complexity tricks for coding interviews**

### **Pattern 1: One loop**

```
for (let i = 0; i < n; i++) {
  // work
}
```

Answer: O(n).

### **Pattern 2: Two separate loops**

```
for (let i = 0; i < n; i++) {
  // work
}

for (let j = 0; j < n; j++) {
  // work
}
```

Answer:

O(n+n)=O(2n)=O(n)

Remember: Add sequential loops.

### **Pattern 3: Nested loops**

```
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // work
  }
}
```

Answer: O(n²).

Remember: Multiply nested loops.

### **Pattern 4: Different input sizes**

```
for (let i = 0; i < n; i++) {
  // work
}

for (let j = 0; j < k; j++) {
  // work
}
```

Answer: O(n + k).

Do not assume `n` and `k` are equal.

### **Pattern 5: Nested loops with different sizes**

```
for (let i = 0; i < n; i++) {
  for (let j = 0; j < k; j++) {
    // work
  }
}
```

Answer: O(nk).

### **Pattern 6: Loop that doubles**

```
for (let i = 1; i < n; i *= 2) {
  // work
}
```

Answer: O(log n).

The values are:

```
1 → 2 → 4 → 8 → 16 → 32
```

### **Pattern 7: Loop that halves**

```
for (let i = n; i > 1; i = Math.floor(i / 2)) {
  // work
}
```

Answer: O(log n).

### **Pattern 8: Nested loops with a changing inner limit**

```
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    // work
  }
}
```

This is a common interview trap.

The inner loop does not run `n` times on every iteration.

It runs:

```
0 + 1 + 2 + 3 + ... + (n - 1)
```

Using the arithmetic series formula:

(n(n-1))/2

Remove constants and lower-order terms.

Answer: O(n²).

### **Pattern 9: A loop containing a logarithmic loop**

```
for (let i = 0; i < n; i++) {
  for (let j = 1; j < n; j *= 2) {
    // work
  }
}
```

- Outer loop: O(n).
- Inner loop: O(log n).

Multiply them:

O(n log n)

### **Pattern 10: A loop followed by a nested loop**

```
for (let i = 0; i < n; i++) {
  // work
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // work
  }
}
```

Total:

O(n+n^2)

Keep the dominant term.

Answer: O(n²).

## **Time and space complexity together**

Interviewers often ask for both. Practise stating them separately.

| Algorithm                      | Time              | Auxiliary space |
| ------------------------------ | ----------------- | --------------- |
| Access first array element     | O(1)              | O(1)            |
| Find maximum in an array       | O(n)              | O(1)            |
| Create a copy of an array      | O(n)              | O(n)            |
| Compare every pair in an array | O(n²)             | O(1)            |
| Binary search, iterative       | O(log n)          | O(1)            |
| Binary search, recursive       | O(log n)          | O(log n)        |
| Merge Sort on an array         | O(n log n)        | O(n)            |
| Naive recursive Fibonacci      | O(2ⁿ) upper bound | O(n)            |

The key lesson: An algorithm with good time complexity might still consume more memory. You need to evaluate both.

## **Simplification rules you must memorise**

These rules appear frequently in interview questions.

| Expression     | Simplified result | Reason                         |
| -------------- | ----------------- | ------------------------------ |
| O(5n)          | O(n)              | Ignore constants               |
| O(10n + 20)    | O(n)              | Keep dominant growth           |
| O(n² + n)      | O(n²)             | n² grows faster                |
| O(n³ + n² + n) | O(n³)             | Keep highest-order term        |
| O(n + n)       | O(n)              | Combine terms                  |
| O(n × n)       | O(n²)             | Multiply nested work           |
| O(n + k)       | O(n + k)          | Independent input sizes        |
| O(n × k)       | O(nk)             | Independent nested input sizes |

## **Big O revision sheet**

**Time complexity patterns**

| Code pattern                                | Complexity  |
| ------------------------------------------- | ----------- |
| Direct access                               | O(1)        |
| Loop through n elements                     | O(n)        |
| Repeatedly halve n                          | O(log n)    |
| Check divisors up to √n                     | O(√n)       |
| Divide and process all n elements per level | O(n log n)  |
| Two independent sequential loops            | O(n + k)    |
| Nested loops over n and k                   | O(nk)       |
| Two full nested n loops                     | O(n²)       |
| Three full nested n loops                   | O(n³)       |
| Two recursive branches                      | Often O(2ⁿ) |
| Generate all permutations                   | Often O(n!) |

**Asymptotic notation**

- O: Upper bound.
- Ω: Lower bound.
- Θ: Tight bound.

## **Big O practice**

### **Level 1: Basic**

**Question 1. Find the time complexity.**

```
function example(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

Answer: O(n).

Reason: The loop executes `n` times.

**Question 2. Find the time complexity.**

```
function example(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}
```

Answer: O(n).

Reason:

O(n+n)=O(2n)=O(n)

**Question 3. Find the time complexity.**

```
function example(n) {
  for (let i = 1; i < n; i *= 2) {
    console.log(i);
  }
}
```

Answer: O(log n).

Reason: The value doubles each time.

### **Level 2: Intermediate**

**Question 4. Find the time complexity.**

```
function example(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

Answer: O(n²).

Reason: `n` iterations multiplied by `n` iterations.

**Question 5. Find the time complexity.**

```
function example(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      console.log(i, j);
    }
  }
}
```

Answer: O(n log n).

Reason:

- Outer loop: O(n).
- Inner loop: O(log n).
- Combined: O(n log n).

**Question 6. Find the time complexity.**

```
function example(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    console.log(arr2[j]);
  }
}
```

Answer: O(n + k).

Reason: The two arrays have independent sizes. The loops execute sequentially.

### **Level 3: Interview-style traps**

**Question 7. Find the time complexity.**

```
function example(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      console.log(i, j);
    }
  }
}
```

Answer: O(n²).

Reason:

The inner loop runs:

0+1+2+...+(n-1)

Using the sum formula:

(n(n-1))/2

After simplification, O(n²).

**Question 8. Find the time complexity.**

```
function example(n) {
  for (let i = 1; i < n; i *= 2) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

Answer: O(n log n).

Reason:

- Outer loop: O(log n).
- Inner loop: O(n).
- Combined: O(n log n).

**Question 9. Find the time complexity.**

```
function example(n) {
  for (let i = n; i > 0; i--) {
    for (let j = 1; j < n; j *= 2) {
      console.log(i, j);
    }
  }
}
```

Answer: O(n log n).

Reason: The outer loop runs `n` times. The inner loop runs log n times.

**Question 10. Find the time complexity.**

```
function example(n) {
  if (n <= 1) return;

  example(n / 2);
  example(n / 2);
}
```

Answer: O(n).

Reason: Each call creates two calls, but the input size halves. The recurrence is:

T(n)=2T(n/2)+O(1)

This produces O(n) total work.

## **Level 4: Space complexity**

| Code                       | Auxiliary space | Reason                   |
| -------------------------- | --------------- | ------------------------ |
| `let total = 0`            | O(1)            | Fixed variable           |
| `new Array(n)`             | O(n)            | Array grows with n       |
| `new Array(n * n)`         | O(n²)           | Stores n² elements       |
| Recursive call depth n     | O(n)            | n active calls           |
| Recursive call depth log n | O(log n)        | Logarithmic active calls |

## **Space complexity**

First, understand two terms.

**Input space:** Memory occupied by the input provided to the algorithm.

**Auxiliary space:** Additional memory used by the algorithm while processing the input.

In many coding interviews, when someone asks for space complexity, they expect auxiliary space. State your convention clearly.

### **Pattern 1: Constant auxiliary space, O(1)**

```
function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}
```

Variables used:

- `total`
- `i`

The function uses a fixed number of additional variables.

Even if the array grows to one million elements, the number of extra variables stays the same.

Auxiliary space: O(1).

### **Pattern 2: Linear auxiliary space, O(n)**

```
function doubleValues(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }

  return result;
}
```

The new array grows with the input.

If the input contains 100 elements, the result contains 100 elements.

Auxiliary space: O(n).

### **Pattern 3: Two additional arrays, O(n + k)**

```
function createResults(n, k) {
  const first = new Array(n);
  const second = new Array(k);

  return [first, second];
}
```

The function creates:

- An array of size `n`.
- An array of size `k`.

Total auxiliary space: O(n + k).

### **Pattern 4: Two-dimensional array, O(n²)**

```
function createMatrix(n) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }

  return matrix;
}
```

The matrix contains `n × n` elements.

Auxiliary space: O(n²).

### **Pattern 5: Recursive call stack, O(n)**

```
function countDown(n) {
  if (n === 0) return;

  countDown(n - 1);
}
```

For `countDown(5)`, the function creates a chain of calls.

For input `n`, the maximum active call depth is proportional to `n`.

Auxiliary space: O(n).

### **Pattern 6: Recursive call stack, O(log n)**

```
function divide(n) {
  if (n <= 1) return;

  divide(Math.floor(n / 2));
}
```

Each call halves the input.

The maximum call depth is proportional to log n.

Auxiliary space: O(log n).

## **Time and space complexity together**

Interviewers often ask for both. Practise stating them separately.

| Algorithm                      | Time              | Auxiliary space |
| ------------------------------ | ----------------- | --------------- |
| Access first array element     | O(1)              | O(1)            |
| Find maximum in an array       | O(n)              | O(1)            |
| Create a copy of an array      | O(n)              | O(n)            |
| Compare every pair in an array | O(n²)             | O(1)            |
| Binary search, iterative       | O(log n)          | O(1)            |
| Binary search, recursive       | O(log n)          | O(log n)        |
| Merge Sort on an array         | O(n log n)        | O(n)            |
| Naive recursive Fibonacci      | O(2ⁿ) upper bound | O(n)            |

The key lesson: An algorithm with good time complexity might still consume more memory. You need to evaluate both.

# **How to calculate space complexity**

## **What exactly is space complexity?**

Space complexity measures how much memory an algorithm requires as its input size increases.

Consider this function:

```
function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}
```

Suppose the array contains 5 elements.

The function uses:

- The input array.
- One variable called `total`.
- One loop variable called `i`.

Now suppose the array contains 10,000 elements.

The function still uses only two additional variables.

Its additional memory does not grow with the input size.

Therefore, its auxiliary space complexity is O(1).

## **Understand input space versus auxiliary space**

These are two important terms.

| Term            | Meaning                                                                  |
| --------------- | ------------------------------------------------------------------------ |
| Input space     | Memory occupied by the input provided to the algorithm                   |
| Auxiliary space | Extra memory used by the algorithm while processing the input            |
| Total space     | Input space plus auxiliary space, under the chosen accounting convention |

Consider:

```
function findMaximum(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
```

Assume the input array has `n` elements.

- Input array: O(n).
- Extra variables: O(1).
- Auxiliary space: O(1).
- Total space: O(n), counting the input array.

Interview answer

If an interviewer asks for auxiliary space, answer O(1). If they ask for total space including the input, state O(n).

This distinction matters.

## **A step-by-step method to calculate space complexity**

Follow these five steps for every coding question.

1. **Identify the input size**

   Find the variable representing input size, usually `n`.
2. **Identify additional variables**

   Count variables and fixed-size objects. A fixed number of variables takes O(1) space.
3. **Look for additional data structures**

   Check whether the code creates arrays, objects, maps, sets, matrices or other collections.
4. **Check recursive function calls**

   Count the maximum number of simultaneously active function calls.
5. **Combine the memory requirements**

   Add the space used by independent allocations. Keep the dominant growth term.

Let's apply this method.

## **Space complexity examples**

### **Example A: O(1), Constant space**

```
function calculate(arr) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    count++;
  }

  return total / count;
}
```

Analysis:

| Variable | Space |
| -------- | ----- |
| `total`  | O(1)  |
| `count`  | O(1)  |
| `i`      | O(1)  |

There are three variables. Their number does not increase with `n`.

O(1+1+1)=O(1)

Answer: O(1) auxiliary space.

Important: A loop does not automatically increase space complexity. It increases time complexity when it performs more iterations. The loop variables still occupy constant space.

### **Example B: O(n), Linear space**

```
function createArray(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(i);
  }

  return result;
}
```

Analysis:

- `result` stores `n` elements.
- `i` occupies constant space.

O(n+1)=O(n)

Answer: O(n) auxiliary space.

### **Example C: O(n²), Quadratic space**

```
function createMatrix(n) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }

  return matrix;
}
```

Suppose `n = 3`.

The matrix contains:

```
0 0 0
0 0 0
0 0 0
```

Number of elements:

3 * 3=9

For general input size:

n * n=n^2

Answer: O(n²) auxiliary space.

### **Example D: O(n + k), Space with two input sizes**

```
function createCollections(n, k) {
  const first = new Array(n);
  const second = new Array(k);

  return [first, second];
}
```

Analysis:

- First array stores `n` elements.
- Second array stores `k` elements.

Total:

O(n+k)

Answer: O(n + k).

Do not convert this into O(n) unless the relationship between `n` and `k` allows it.

### **Example E: O(n²), But not because of nested loops**

```
function createPairs(arr) {
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }

  return pairs;
}
```

This is an important interview example.

The loops generate every unique pair.

For an array of 4 elements:

```
(1,2)
(1,3)
(1,4)
(2,3)
(2,4)
(3,4)
```

Number of pairs:

(n(n-1))/2

The function stores all those pairs.

Answer:

- Time: O(n²).
- Auxiliary space: O(n²).

Compare that with nested loops that only print the pairs. Those would use O(1) auxiliary space.

The difference is whether the algorithm stores the results.

## **5. How to calculate recursive space complexity**

This is especially important for coding interviews.

Remember our recursive function:

```
function countDown(n) {
  if (n === 0) return;

  countDown(n - 1);
}
```

Call:

```
countDown(4);
```

The calls look like this before returning:

**Call stack**

`countDown(0)`

Top of stack

`countDown(1)`

`countDown(2)`

`countDown(3)`

`countDown(4)`

Each active function call occupies stack memory.

There are approximately `n + 1` active calls.

Therefore:

- Time: O(n).
- Auxiliary space: O(n).

Now compare this function:

```
function divide(n) {
  if (n <= 1) return;

  divide(Math.floor(n / 2));
}
```

For `n = 16`:

```
16 → 8 → 4 → 2 → 1
```

The maximum number of active calls grows logarithmically.

- Time: O(log n).
- Auxiliary space: O(log n).

### **Important distinction**

Consider two ways to calculate factorial.

Recursive:

```
function factorial(n) {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}
```

Iterative:

```
function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
```

| Approach  | Time | Auxiliary space |
| --------- | ---- | --------------- |
| Recursive | O(n) | O(n)            |
| Iterative | O(n) | O(1)            |

Both take linear time. But recursion uses additional call stack memory.

# **Big O, Big Omega and Big Theta**

Now let's understand what these three mathematical notations really mean.

## **Why do we need three notations?**

Suppose an algorithm processes an array of `n` elements.

Depending on the input, it might:

- Finish after checking one element.
- Check several elements.
- Check every element.

We need a way to describe the upper, lower and tight growth bounds.

That is where these notations come in.

# **O(g(n))**

**Big O, Upper bound**

The algorithm's growth does not exceed a constant multiple of `g(n)` for sufficiently large input sizes.

# **Ω(g(n))**

**Big Omega, Lower bound**

The algorithm's growth is at least a constant multiple of `g(n)` for sufficiently large input sizes.

# **Θ(g(n))**

**Big Theta, Tight bound**

The algorithm's growth is bounded both above and below by constant multiples of `g(n)`.

## **Understand using a mathematical example**

Suppose an algorithm performs this many operations:

f(n)=3n^2+5n+2

For large values of `n`, the `n²` term dominates.

So its tight growth rate is:

Theta(n^2)

It also belongs to these bounds:

- O(n²), because n² is an upper bound.
- Ω(n²), because n² is a lower bound.
- Θ(n²), because both bounds match.

It is also true that this function is O(n³) and Ω(n). Those are valid but less tight bounds.

This is why Θ is useful. It gives the tightest growth category when the upper and lower bounds match.

## **Understand using a real coding example**

Consider linear search.

```
function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
```

Assume the array has `n` elements.

### **Best case**

The target is the first element.

```
const arr = [10, 20, 30, 40, 50];
search(arr, 10);
```

Only one comparison is needed.

Time:

Theta(1)

### **Worst case**

The target is the last element or is absent.

```
search(arr, 50);
```

or

```
search(arr, 100);
```

The algorithm checks all `n` elements.

Time:

Theta(n)

### **Average case**

Assume the target is equally likely to be at any position in the array.

On average, the algorithm checks approximately half the elements.

(n+1)/2

Ignoring constants, the average-case time is:

Theta(n)

### **Summary**

| Case    | Comparisons       | Tight complexity |
| ------- | ----------------- | ---------------- |
| Best    | 1                 | Θ(1)             |
| Average | Approximately n/2 | Θ(n)             |
| Worst   | n                 | Θ(n)             |

This example is important because it connects the three notations to actual algorithm behaviour.

## **Are Big O and worst case the same?**

No. This is a common interview misunderstanding.

There are two separate ideas:

| Idea         | What it describes                              |
| ------------ | ---------------------------------------------- |
| Best case    | The most favourable input                      |
| Average case | Expected behaviour under an input distribution |
| Worst case   | The least favourable input                     |
| Big O        | An asymptotic upper bound                      |
| Big Omega    | An asymptotic lower bound                      |
| Big Theta    | An asymptotically tight bound                  |

You can apply Big O, Ω or Θ to a best-case, average-case or worst-case function.

For example:

- Linear search best-case time: Θ(1).
- Linear search worst-case time: Θ(n).

In interviews, when someone asks "What is the Big O?", they often expect worst-case time complexity. But you should identify the case instead of assuming the notation itself means worst case.

## **One more example to test the distinction**

```
function findNumber(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }

  return false;
}
```

Suppose `n = 100`.

- If the first element matches, one comparison.
- If the last element matches, 100 comparisons.
- If the target is missing, 100 comparisons.

Now answer these:

| Question               | Answer |
| ---------------------- | ------ |
| Best-case tight bound  | Θ(1)   |
| Worst-case tight bound | Θ(n)   |
| Worst-case upper bound | O(n)   |
| Worst-case lower bound | Ω(n)   |

Notice that the worst-case function is Θ(n), because it grows linearly from both sides.

# **Interview rules to remember**

| If you see...                            | Think about...          |
| ---------------------------------------- | ----------------------- |
| Fixed number of variables                | O(1) auxiliary space    |
| New array containing n elements          | O(n) auxiliary space    |
| Matrix with n rows and n columns         | O(n²) auxiliary space   |
| Recursive calls decreasing by 1          | O(n) stack space        |
| Recursive calls halving the input        | O(log n) stack space    |
| Algorithm always scans all n elements    | Θ(n) time               |
| Algorithm might stop after first element | Best case might be Θ(1) |
| Upper growth bound                       | Big O                   |
| Lower growth bound                       | Big Omega               |
| Matching upper and lower bounds          | Big Theta               |

# **Check your understanding**

**Space and asymptotic notation test**

**1. A function creates a new array containing n elements. What is its auxiliary space complexity?**

O(1)

O(log n)

O(n)

O(n²)

**2. A function uses three variables and one loop. The loop runs n times. What is its auxiliary space complexity?**

O(1)

O(n)

O(n²)

O(log n)

**3. A recursive function calls itself with n - 1 until it reaches zero. What is its maximum call-stack space?**

O(1)

O(log n)

O(n)

O(n²)

**4. For f(n) = 4n² + 3n + 10, what is its tight asymptotic bound?**

O(n)

Θ(n²)

Ω(n³)

Θ(n)

**5. What does Big Omega describe?**

An upper bound

A lower bound

A tight bound only

Exact execution time

**6. An algorithm's worst-case running time is 7n + 4. Which is its tight bound?**

Θ(1)

Θ(log n)

Θ(n)

Θ(n²)

**7. Two separate arrays have sizes n and k. The algorithm creates a copy of each. What is auxiliary space?**

O(nk)

O(n + k)

O(n²)

O(1)


## **Answers to the previous assessment**

| Question | Correct answer | Explanation                                                   |
| -------- | -------------- | ------------------------------------------------------------- |
| 1        | O(n)           | A new array stores n elements.                                |
| 2        | O(1)           | Three fixed variables use constant extra memory.              |
| 3        | O(n)           | Recursive calls decrease by one, creating linear stack depth. |
| 4        | Θ(n²)          | The n² term dominates.                                        |
| 5        | Ω              | Big Omega describes an asymptotic lower bound.                |
| 6        | Θ(n)           | The function grows linearly.                                  |
| 7        | O(n + k)       | Two arrays store n and k elements.                            |

## **Big O vs Big Omega vs Big Theta**

Let's use one mathematical function:

f(n)=5n^2+3n+10

Its complexity is:

| Notation | Result | Why         |
| -------- | ------ | ----------- |
| O        | O(n²)  | Upper bound |
| Ω        | Ω(n²)  | Lower bound |
| Θ        | Θ(n²)  | Tight bound |

Remember:

- O gives an upper bound.
- Ω gives a lower bound.
- Θ gives a tight bound.

A tight bound means both the upper and lower bounds have the same growth rate.

## **Big O, Omega and Theta practice**

These are additional problems specifically for these three notations.

### **Mathematical expressions**

**Question 1**

f(n)=4n+10

Find:

- Big O
- Big Omega
- Big Theta

Answer:

- O(n)
- Ω(n)
- Θ(n)

Reason: The linear term dominates.

**Question 2**

f(n)=3n^2+5n+7

Answer:

- O(n²)
- Ω(n²)
- Θ(n²)

Reason: The quadratic term dominates.

**Question 3**

f(n)=8n^3+4n^2+2n+1

Answer:

- O(n³)
- Ω(n³)
- Θ(n³)

Reason: The cubic term dominates.

**Question 4**

f(n)=6\log n+20

Answer:

- O(log n)
- Ω(log n)
- Θ(log n)

Reason: The logarithmic term dominates the constant.

### **Code-based questions**

**Question 5. Linear search**

```
function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }

  return false;
}
```

Find the best-case and worst-case tight complexities.

Answer:

| Case  | Complexity | Explanation                               |
| ----- | ---------- | ----------------------------------------- |
| Best  | Θ(1)       | First element matches.                    |
| Worst | Θ(n)       | Last element matches or target is absent. |

For the worst-case function, O(n) and Ω(n) are both valid bounds, so Θ(n) is the tight bound.

**Question 6. Binary search**

```
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

Answer:

| Case  | Complexity |
| ----- | ---------- |
| Best  | Θ(1)       |
| Worst | Θ(log n)   |

The search space gets divided in half each time.

**Question 7. Nested loops**

```
function example(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

Answer:

- Best: Θ(n²).
- Worst: Θ(n²).
- Upper bound: O(n²).
- Lower bound: Ω(n²).

Both loops always run their full iterations.

### **Understand valid bounds versus tight bounds**

This is where many candidates get confused.

Consider:

f(n)=5n^2+3n+10

All these statements are mathematically valid:

- O(n²)
- O(n³)
- O(n⁴)
- Ω(n²)
- Ω(n)
- Ω(1)
- Θ(n²)

But these are not tight:

- O(n³) is a valid but loose upper bound.
- Ω(n) is a valid but loose lower bound.

Θ(n²) gives the tight growth rate.

**Question 8**

For:

f(n)=7n+12

Which of these are valid?

1. O(n)
2. O(n²)
3. Ω(n)
4. Ω(1)
5. Θ(n²)
6. Θ(n)

Answer:

| Statement | Valid? | Explanation                     |
| --------- | ------ | ------------------------------- |
| O(n)      | Yes    | Tight upper bound               |
| O(n²)     | Yes    | Loose upper bound               |
| Ω(n)      | Yes    | Tight lower bound               |
| Ω(1)      | Yes    | Loose lower bound               |
| Θ(n²)     | No     | Growth is linear, not quadratic |
| Θ(n)      | Yes    | Tight bound                     |

## **More challenging questions**

**O, Ω and Θ assessment**

**1. f(n) = 9n⁴ + 3n² + 100. What is its tight bound?**

Θ(n²)

Θ(n³)

Θ(n⁴)

Θ(n⁵)

**2. A function always executes a loop exactly n times. What is its tight time complexity?**

Θ(1)

Θ(log n)

Θ(n)

Θ(n²)

**3. A search algorithm checks the first element and returns immediately if it matches. What is its best-case tight bound?**

Θ(1)

Θ(log n)

Θ(n)

Θ(n²)

**4. Which is a valid upper bound for f(n) = 3n² + 2n?**

O(n)

O(n²)

O(log n)

O(1)

**5. Which notation expresses matching upper and lower bounds?**

O

Ω

Θ

None

**6. A loop runs from 1 to n, and its body always executes. What is the lower bound of its running time?**

Ω(1) only

Ω(log n) only

Ω(n)

Ω(n²)

**7. For f(n) = 4n³ + n, which statement is false?**

O(n³)

Ω(n³)

Θ(n³)

Θ(n²)

Here are the answers to all the questions from the previous practice set, with explanations.

## **Answers to the 7-question assessment**

1. An array contains `n` elements. A loop visits every element once.

   Answer: O(n)

   Reason: The number of operations grows linearly with the input size.
2. A function uses three variables and no additional data structure.

   Answer: O(1) auxiliary space.

   Reason: The function uses a fixed amount of extra memory, regardless of input size.
3. A function creates a new array containing `n` elements.

   Answer: O(n) auxiliary space.

   Reason: The additional array grows with the input size.
4. Two nested loops each run `n` times.

   Answer: Θ(n²), assuming both loops always complete all iterations.

   Reason: The total iterations are \\(n \times n = n^2\\).
5. What does Ω represent?

   Answer: Asymptotic lower bound.

   Reason: It describes a function's growth from below for sufficiently large input sizes.
6. A loop runs exactly `n` times.

   Answer: Θ(n).

   Reason: Its growth has both an upper and a lower bound proportional to `n`.
7. One array has `n` elements and another has `k` elements. Both are stored.

   Answer: O(n + k) space.

   Reason: The memory required by both arrays adds up.

## **Big O, Omega and Theta questions**

### **Question 1**

f(n)=4n+10

Answer:

- O(n)
- Ω(n)
- Θ(n)

Reason: The linear term dominates as `n` grows.

### **Question 2**

f(n)=3n^2+5n+7

Answer:

- O(n²)
- Ω(n²)
- Θ(n²)

Reason: The quadratic term dominates the remaining terms.

### **Question 3**

f(n)=8n^3+4n^2+2n+1

Answer:

- O(n³)
- Ω(n³)
- Θ(n³)

Reason: The cubic term dominates.

### **Question 4**

f(n)=6 log n+20

Answer:

- O(log n)
- Ω(log n)
- Θ(log n)

Reason: The logarithmic term dominates the constant as `n` grows.

### **Question 5: Linear search**

You search for a value in an array of `n` elements.

Best case:

- The value is at the first position.
- One comparison.
- Θ(1).

Worst case:

- The value is at the last position or absent.
- Up to `n` comparisons.
- Θ(n).

Average case:

- Assuming the target is equally likely to be at any position, the expected number of comparisons grows proportionally to `n`.
- Θ(n).

### **Question 6: Binary search**

You search for a value in a sorted array.

Best case:

- The middle element is the target.
- Θ(1).

Worst case:

- The search space is repeatedly divided by two.
- Θ(log n).

Average case:

\- Θ(log n), under the usual assumption of a target position distributed across the array.

### **Question 7: Nested loops**

```
function example(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
```

Answer:

- Best case: Θ(n²)
- Worst case: Θ(n²)
- Overall: Θ(n²)

Reason: Neither loop exits early. Both execute all their iterations.

### **Question 8: Valid and invalid bounds**

Given:

f(n)=7n+12

Check each statement.

| Bound | Valid? | Reason                  |
| ----- | ------ | ----------------------- |
| O(n)  | Yes    | Linear upper bound      |
| O(n²) | Yes    | Loose upper bound       |
| Ω(n)  | Yes    | Linear lower bound      |
| Ω(1)  | Yes    | Constant lower bound    |
| Θ(n²) | No     | Function grows linearly |
| Θ(n)  | Yes    | Tight linear bound      |

Important: A function can have several valid Big O and Omega bounds. Theta identifies its tight asymptotic growth.

## **Space complexity practice answers**

### **Question 1: Fixed variables**

```
function calculate(n) {
    let sum = 0;
    let count = 0;
    let result = 1;

    return sum + count + result + n;
}
```

Answer: O(1) auxiliary space.

Reason: Only a fixed number of variables are created.

### **Question 2: New array**

```
function copyArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}
```

Answer: O(n) auxiliary space.

Reason: The new array stores `n` elements.

### **Question 3: Nested loops without storage**

```
function printPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
```

Answer:

- Time: Θ(n²)
- Auxiliary space: O(1)

Reason: The loops take quadratic time, but they create no data structure that grows with `n`.

### **Question 4: Matrix**

```
function createMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        let row = [];

        for (let j = 0; j < n; j++) {
            row.push(0);
        }

        matrix.push(row);
    }

    return matrix;
}
```

Answer:

- Time: Θ(n²)
- Auxiliary space: O(n²)

Reason: The matrix contains `n × n` elements.

### **Question 5: Two arrays**

```
function combine(n, k) {
    let first = new Array(n);
    let second = new Array(k);

    return [first, second];
}
```

Answer: O(n + k) auxiliary space.

Reason: The first array uses `n` spaces and the second uses `k` spaces.

### **Question 6: Recursive countdown**

```
function countdown(n) {
    if (n <= 0) {
        return;
    }

    countdown(n - 1);
}
```

Answer:

- Time: Θ(n)
- Auxiliary space: O(n)

Reason: The function makes `n` recursive calls. Each call occupies a stack frame until the recursion reaches the base case.

### **Question 7: Recursive binary search**

Answer:

- Time: O(log n) worst case.
- Auxiliary space: O(log n) for a recursive implementation.

Reason: Each recursive call reduces the search space by half. The maximum recursion depth grows logarithmically.

## **Important rules to remember**

| Concept         | Meaning                               |
| --------------- | ------------------------------------- |
| O(1)            | Constant growth                       |
| O(log n)        | Logarithmic growth                    |
| O(n)            | Linear growth                         |
| O(n log n)      | Linearithmic growth                   |
| O(n²)           | Quadratic growth                      |
| O(2ⁿ)           | Exponential growth                    |
| O(n!)           | Factorial growth                      |
| Big O           | Upper bound                           |
| Omega (Ω)       | Lower bound                           |
| Theta (Θ)       | Tight bound                           |
| Auxiliary space | Extra memory used by the algorithm    |
| Input space     | Memory occupied by the input          |
| Recursion stack | Memory used by active recursive calls |

## **The calculation method you should follow**

For every coding problem, use this sequence:

1. Identify the input size. Is it `n`, `m`, `n × m`, or something else?
2. Count how many times each loop executes.
3. Add the costs of sequential operations.
4. Multiply the costs of nested loops when their iteration counts are independent.
5. Check whether loops stop early or divide the input.
6. Identify every new array, object, map, set, or other data structure.
7. Count recursive calls and maximum recursion depth.
8. Separate auxiliary space from returned output space.
9. Find the tight growth rate using Θ.
10. State the required upper or lower bound using O or Ω.

# **Time and space complexity, practical calculations**

## **First understand the difference**

Consider this function:

```
function doubleArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }

    return result;
}
```

Assume the input array contains `n` elements.

Time complexity:

- The loop executes `n` times.
- Each iteration performs constant-time work.
- Total work grows proportionally to `n`.
- Time complexity: Θ(n).

Space complexity:

- `result` stores `n` elements.
- The loop variables use constant space.
- The new array dominates memory usage.
- Auxiliary space: O(n).

Notice the difference:

| Complexity      | Answer | Why                   |
| --------------- | ------ | --------------------- |
| Time            | Θ(n)   | Visits every element  |
| Auxiliary space | O(n)   | Creates another array |

A function might take O(n) time but O(1) extra space. Time and space must be calculated separately.

## **In-place algorithms**

An in-place algorithm modifies the original input instead of creating another data structure proportional to its size.

Example:

```
function doubleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }

    return arr;
}
```

Assume `n` elements.

Time complexity:

- One loop.
- `n` iterations.
- Θ(n).

Auxiliary space:

- Only the loop variable `i` is added.
- No new array is created.
- O(1).

Key interview point

Both functions take Θ(n) time, but their auxiliary space differs.

- First function: O(n) space.
- Second function: O(1) space.

Do not assume an array operation always needs O(n) extra space. Check whether it creates a new array or modifies the existing one.

## **Nested loops with different limits**

Consider this code:

```
function example(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            console.log(i, j);
        }
    }
}
```

Many beginners see two loops and immediately answer O(n²). The answer happens to be right, but you should know how to calculate it.

Let's count the iterations.

| Outer loop `i` | Inner loop iterations |
| -------------- | --------------------- |
| 0              | 0                     |
| 1              | 1                     |
| 2              | 2                     |
| 3              | 3                     |
| 4              | 4                     |
| ...            | ...                   |
| n-1            | n-1                   |

Total iterations:

0+1+2+...+(n-1)

Using the sum formula:

n(n-1)/2

Expand:

(n^2-n)/2

Ignore constants and lower-order terms:

Theta(n^2)

Space complexity:

- Only `i` and `j` are used.
- No additional data structure grows with `n`.

Answer: O(1) auxiliary space.

**Trick:** When the inner loop runs up to `i`, count the total iterations using a summation. Do not multiply the maximum iteration counts blindly.

## **A logarithmic loop inside a linear loop**

```
function example(n) {
    for (let i = 0; i < n; i++) {
        let j = 1;

        while (j < n) {
            j = j * 2;
        }
    }
}
```

Let's calculate it.

Outer loop:

- Executes `n` times.
- Complexity: Θ(n).

Inner loop:

- Starts at 1.
- Then 2, 4, 8, 16, 32...
- Doubles every iteration.

Suppose `n = 16`.

The values of `j` are:

`1 → 2 → 4 → 8 → 16`

It takes approximately log_2 n iterations.

Inner complexity: Θ(log n).

Total complexity:

n * log n

Answer

- Time: Θ(n log n).
- Auxiliary space: O(1).

**Trick:** An outer loop running `n` times and an inner loop doubling or halving its variable usually gives O(n log n).

## **Two independent input sizes**

```
function compareArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            console.log(arr1[i], arr2[j]);
        }
    }
}
```

Let:

- First array size = `n`.
- Second array size = `k`.

Outer loop: `n` iterations.

Inner loop: `k` iterations.

Total:

n * k = nk

Answer:

- Time: Θ(nk).
- Auxiliary space: O(1).

Do not write O(n²) unless you know both input sizes are equal or have an appropriate relationship.

## **Recursion and space complexity**

Consider:

```
function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
```

Let's trace `factorial(4)`.

## **Recursive calls**

1. `factorial(4)`

   Waits for factorial(3)
2. `factorial(3)`

   Waits for factorial(2)
3. `factorial(2)`

   Waits for factorial(1)
4. `factorial(1)`

   Returns 1, the base case

**Return sequence**

- factorial(1) = 1
- factorial(2) = 2 × 1 = 2
- factorial(3) = 3 × 2 = 6
- factorial(4) = 4 × 6 = 24

Time complexity:

- There are `n` recursive calls.
- Each call performs constant work.
- Θ(n).

Space complexity:

- Each active call occupies a stack frame.
- Maximum active calls: `n`.
- O(n) auxiliary space.

Compare it with the iterative version:

```
function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}
```

- Time: Θ(n).
- Auxiliary space: O(1).

Both calculate factorial. Their time complexity is the same, but their auxiliary space differs.

# **Practice questions**

Try these five problems. For each one, calculate:

1. Time complexity.
2. Auxiliary space complexity.
3. The reason for your answer.

**Question 1**

function test(n) {\
&#x20;   for (let i = 1; i <= n; i++) {\
&#x20;       console.log(i);\
&#x20;   }\
}

**Question 2**

function test(n) {\
&#x20;   let arr = [];\
&#x20;   for (let i = 0; i < n; i++) {\
&#x20;       arr.push(i);\
&#x20;   }\
&#x20;   return arr;\
}

**Question 3**

function test(n) {\
&#x20;   for (let i = 1; i < n; i \*= 2) {\
&#x20;       console.log(i);\
&#x20;   }\
}

**Question 4**

function test(n) {\
&#x20;   for (let i = 0; i < n; i++) {\
&#x20;       for (let j = 0; j < n; j++) {\
&#x20;           for (let k = 0; k < 5; k++) {\
&#x20;               console.log(i, j, k);\
&#x20;           }\
&#x20;       }\
&#x20;   }\
}

**Question 5**

function test(n) {\
&#x20;   if (n <= 1) return;\
&#x20;   test(Math.floor(n / 2));\
}
