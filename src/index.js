// var --> function
// let --> block
// const --> block
/* 
const person = {
  name: "Jesus",
  walk() {
    console.log(this);
  }
};
person.walk();

const walk = person.walk.bind(person);
walk(); */

/*
person.talk();
person.name = "Gerardo";
const targetMember = "name";
person[targetMember.value] = "John";*/
/* 
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: true }
];
const activeJobs = jobs.filter(function(job) {
  return job.activeJobs;
});
const activeJobs = jobs.filter(job => job.isActivex); */

/* const person = {
  talk() {
    var self = this;
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};

person.talk(); */

/* const colors = ["red", "green", "blue"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items); */

/* const addres = {
  street: "",
  city: "",
  country: ""
};

const { street, city, country } = address;

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined = [...first, "a", ...second, "b"];

const clone = [...first];

console.log(combined); */

/* const first = { name: "Jesus" };
const second = { job: "Developer" };

const combined = { ...first, ...second, location: "Mexico" };
console.log(combined); */

/* const person = new Person("Jesus");
console.log(person);
person.walk();
 */
//Classes
/* 

const teacher = new Teacher("Professor", "College");
console.log(teacher); */

// Modules
import Teacher, { promote } from "./teacher";

const teacher = new Teacher("Jesus", "Computer Science");
teacher.teach();
promote();
import React from "react";
