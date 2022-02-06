"use strict"
// let user = {
//   name: "Ilya",
//   age: 30,
//   weight: 70,
//   height: 1.81,
//   work: true,
//   bmi() {
//     let calc = this.weight / this.height ** 2; 
//     if (calc <= 18.5) {
//       return (calc = "Underweight");
//     } else if (calc <= 25.0) {
//       return (calc = "Normal");
//     } else if (calc <= 30.0) {
//       return (calc = "Overweight");
//     } else {
//       return (calc = "Obese");
//     }
//   },
// };

// // пример использования методово и this 

// let calculator = { 
//     mult() {
//         return this.y * this.x
//     },
//     sum(){
//         return this.y + this.x
//     },
//     read(){
//         this.x = +prompt('Enter the x', 0) 
//         this.y = +prompt('Enter the y', 0) 
//    },
// };


// // Пример проверки наличия свойств в объекте и прогон цикла по свойствам объекта.  

// let user = new Object();
// user.name = "John";
// user.surname = 'Smith';
// user.name ='Pete';
// delete user.name;

// for (let i in user) {
//     i != 0 ? console.log('Full') : console.log('Empty')
// };

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// };

// console.log(sum)

// // Пример использования object.assign 

// let user = {
//     name: 'John',
//     surname: 'Smith',
//     age: 23,
//     work: true,
//     salary: 500,
// };

// let admin = {
//     name: 'France',5
//     role: 'admin',
// };

// let userRole = Object.assign( admin, user); // Составляем новый объект из свойств 2-х других объектов
// let clone = Object.assign({}, userRole); // Делаем клон объекта 
// console.log(userRole);
// console.log(clone);

// // функция конструктор для создания однотипных объектов 

// function addUser(name) {  
//     this.name = name;
//     this.prof = prompt('Enter the proffession: ')
//     this.rank = +prompt('Enter the rank: ');
//     this.salary = 0;
//     this.setSalary = function method(){
//         if (this.rank <= 2) {
//             this.salary = 200;
//         } else if (this.rank >= 3 && this.rank != 10) {
//             this.salary = 1000;
//         };
//     };
// } 

// let user = new addUser(prompt('Enter your name '));

// user.setSalary(this.name);
// console.log(user);
// console.log(user.salary);

let a = +prompt('Ente the  1st number: ');
let b = +prompt('Enter the second number: ');
let sum = Math.round(a+b);
alert(sum);

function makeUpperCase(str) {
    return str.toUpperCase()
  }

