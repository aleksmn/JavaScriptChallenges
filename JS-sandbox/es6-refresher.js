// var -> function scoped
// let -> block scoped
// const -> block scoped

// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// sayHello();

// const x = 1;
// x = 2;

// const person = {
//   name: "Mosh",
//   walk() {}, // method in the object
//   talk() {}
// };

// person.talk();

// const targetMember = "name";
// person[targetMember] = "John";

// const person = {
//   name: "Mosh",
//   walk() {
//     console.log(this);
//   }
// };

// person.walk();

// const walk = person.walk;
// walk(); // return window object, if strict mode - undefined

// const walk = person.walk.bind(person);
// bind(person) sets this keyword permanently to the 'person' object
// walk(); // object

//

// Arrow Functions

// const square = function(number) {
//   return number * number;
// };

// const square = number => number * number;
// console.log(square(6));

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false }
// ];

// // const activeJobs = jobs.filter(function(job) {
// //   return job.isActive;
// // });

// const activeJobs = jobs.filter(job => job.isActive);
// // 'filter jobs where jobs is active'
// console.log(activeJobs);

// const person = {
//   talk() {
//     // Arrow functions do not rebind this keyword
//     setTimeout(() => {
//       console.log("this", this);
//     }, 1000);
//   }
// };

// person.talk();

//

// Map Method

// const colors = ["red", "green", "blue"];
// const items = colors.map(color => `<li>${color}</li>`); // template literal
// console.log(items);

//

// Object Destructuring

// const address = {
//   street: "Baker",
//   city: "",
//   country: ""
// };

// // extracting street property to street const
// const { street } = address;
// // extracting street property to st const
// const { street: st } = address;

// // extracting all properties
// const { street, city, country } = address;

// console.log(st);

//

// Spread Operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// // const combined = [...first, "a", ...second, "b"];

// const clone = [...first];
// console.log(first);
// console.log(clone);

// const first = { name: "Mosh" };
// const second = { job: "Instructor" };

// const combined = { ...first, ...second };

//

// Classes

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log("walk");
//   }
// }

// const person = new Person("Mike");

// console.log(person.name);
// person.walk();

//

// Inheritance

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log("walk");
//   }
// }

// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }
//   teach() {
//     console.log("teach");
//   }
// }

// const teacher = new Teacher("Mosh", "MSc");

// console.log(teacher);

//

// Modules

// Sep. files:

// person.js
// export class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log("walk");
//   }
// }

// // teacher.js
// import { Person } from "./person";

// export class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }
//   teach() {
//     console.log("teach");
//   }
// }

// // index.js
// import { Teacher } from "./teacher";
// const teacher = new Teacher("Mosh", "MSc");

//

// Named and Default Exports

// teacher.js
import { Person } from "./person";

export function promote() {}

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

// Default -> import ... from '';
// Named -> import {...} from '';
