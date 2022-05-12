/* 1. Write a JavaScript program to list the properties of a JavaScript object.

  Sample object:
  var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 };

Sample Output: name,sclass,rollno 


let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

for (data in student) {
  console.log(data)
} */

//-------------------------------------------------------------------------------------------------------------------

/* 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }; */

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(student)

delete student.rollno

console.log(student)