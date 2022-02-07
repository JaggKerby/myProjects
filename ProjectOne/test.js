"use strict"
let user = {
  name: "Ilya",
  age: 30,
  weight: 70,
  height: 1.81,
  work: true,
  bmi() {
    let calc = this.weight / this.height ** 2; 
    if (calc <= 18.5) {
      return (calc = "Underweight");
    } else if (calc <= 25.0) {
      return (calc = "Normal");
    } else if (calc <= 30.0) {
      return (calc = "Overweight");
    } else {
      return (calc = "Obese");
    }
  },
};

// пример использования методов и this 

let calculator = { 
    mult() {
        return this.y * this.x
    },
    sum(){
        return this.y + this.x
    },
    read(){
        this.x = +prompt('Enter the x', 0) 
        this.y = +prompt('Enter the y', 0) 
   },
};


// Пример проверки наличия свойств в объекте и прогон цикла по свойствам объекта.  

let user = new Object();
user.name = "John";
user.surname = 'Smith';
user.name ='Pete';
delete user.name;

for (let i in user) {
    i != 0 ? console.log('Full') : console.log('Empty')
};

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
};

console.log(sum)

// Пример использования object.assign 

let user = {
    name: 'John',
    surname: 'Smith',
    age: 23,
    work: true,
    salary: 500,
};

let admin = {
    name: 'France',5
    role: 'admin',
};

let userRole = Object.assign( admin, user); // Составляем новый объект из свойств 2-х других объектов
let clone = Object.assign({}, userRole); // Делаем клон объекта 
console.log(userRole);
console.log(clone);

// функция конструктор для создания однотипных объектов 

function addUser(name) {  
    this.name = name;
    this.prof = prompt('Enter the proffession: ')
    this.rank = +prompt('Enter the rank: ');
    this.salary = 0;
    this.setSalary = function method(){
        if (this.rank <= 2) {
            this.salary = 200;
        } else if (this.rank >= 3 && this.rank != 10) {
            this.salary = 1000;
        };
    };
} 

let user = new addUser(prompt('Enter your name '));

user.setSalary(this.name);
console.log(user);
console.log(user.salary);

// 

let a = +prompt('Ente the  1st number: ');
let b = +prompt('Enter the second number: ');
let sum = Math.round(a+b);
alert(sum);

function makeUpperCase(str) {
    return str.toUpperCase()
  }

function upFirst (str){
  return str[0].toUpperCase()+str.slice(1);
};

console.log(upFirst('anastasiya'));
console.log(upFirst('ilya'));

// Массивы. Создание

let arr = ['Some', function(){alert('Hello!')}, 3];

// arr[1]();
// alert(arr[2]);

alert(arr.pop(2));
console.log(arr);
alert(arr.push(3));
console.log(arr);

// Массивы добавление удаление из массива

let arr2 = [1,2,4,5,6,7,8];

arr2.unshift(3);

for (let index = 0; index < arr2.length; index++) {
  console.log(arr2[index]);
};

for ( let item of arr2) {
  console.log(item);
}

let styles = ['Rock', 'Bluz',];

styles.push('HardRock');
console.log(styles);

// Поиск среднего элемента и добавление его в массив

function addMiddleElem(elem){
  let a = (styles.length-1)/2;
  Math.floor(a);
  console.log(a);
  return styles[a] = elem;
}

addMiddleElem('progRock');
console.log(styles);

// Функция для создания массива из чисел с проверкой на число и последующего сумирования 

function sumInput() {
  let sumArr = [];
  let elem = +prompt('Enter the number: ');
  while (Number.isInteger(elem)) {
    sumArr.push(elem);
    elem = +prompt('Enter the number: ');
  };
  let sum = 0;
  for (let number of sumArr) {
    sum += number;
  }
  return sum;
};

sumInput();

// 