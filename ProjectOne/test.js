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

let user = {
    name: 'John',
    surname: 'Smith',
    age: 23,
    work: true,
    salary: 500,
};

let admin = {
    name: 'France',
    role: 'admin',
};

let userRole = Object.assign( admin, user);
let clone = Object.assign({}, userRole);
console.log(userRole);
console.log(clone);