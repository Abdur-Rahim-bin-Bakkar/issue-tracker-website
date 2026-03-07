# 1️⃣ What is the difference between var, let, and const?
### if we set a value in const variable then we can not change the value. if we set a value in let variable the we can change the value but can not re decleare. if we set a value using var then we can change the value and can redeclear.   const and let mantain TDZ thats why we can not access before declear the variable. 

```
 var name = 'rahim'
console.log(name)
var name = 'alfi'
console.log(name)

let age = 19;
console.log(age)
age = 20;
console.log(age)

const id = 768924
console.log(id)

 ```






# 2️⃣ What is the spread operator (...)?
### spread operator us for unpacking element. spread operator is very useful for array and object
```
let array = [1,2,4,5,6]
let array2 = [...array]
```

# 3️⃣ What is the difference between map(), filter(), and forEach()?
### map() use for create a loop in array and change or modify every iteration value.  we can create a nwe array use filter().  filter() return a new array based a condition.  forEach() use for create a loop but forEach() can not return a new array

```
let numbers = [1,2,3,4,5,6,7,8]
let doubleNumbers = numbers.map(i => i*2)
console.log(doubleNumbers)

output:
[
   2,  4,  6,  8,
  10, 12, 14, 16
]


let lower  = numbers.filter(num => num < 6)
console.log(lower)

output:
[ 1, 2, 3, 4, 5 ]


numbers.forEach(num => console.log(num))

output:
1
2
3
4
5
6
7
8

```


# 4️⃣ What is an arrow function?
### arrow function is easy way to decleare a function. arrow function is updated version ES6. arrow function is not hoisted

```
const arrow = ()=>{
    console.log('hi i am arrow function')
}
arrow()

output:
hi i am a arrow function
```
# 5️⃣ What are template literals?
### template literals is a way to write strings in JavaScript using backticks ( ) instead of quotes.  we can conditional randaring use template literals.


```
const name = 'rahim'
const message = `my name is md ${name} sikdar'
console.log(message)

output:
my name is md rahim sikdar
```
