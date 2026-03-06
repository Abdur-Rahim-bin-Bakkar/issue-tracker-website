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
### spread operator us for unpacking element. like array and object
```
let array = [1,2,4,5,6]
let array2 = [...array]
```

3️⃣ What is the difference between map(), filter(), and forEach()?
4️⃣ What is an arrow function?
5️⃣ What are template literals?
