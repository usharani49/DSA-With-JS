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
| `||`     | OR      | At least one condition must be true |
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

let x = 10;
x = 20;
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

for (let i = 1; i <= 4; i++) {
  console.log(i);
}

3

4

5

Infinite

**Question 6. What does return do in a function?**

function add(a, b) {
  return a + b;
}

Prints the result

Stops the entire program

Sends a value back to the caller

Declares a variable

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



# **Day 1: Knowledge check**

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
