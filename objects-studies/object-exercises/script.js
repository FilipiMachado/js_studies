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

/* const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(student)

delete student.rollno

console.log(student) */

//-------------------------------------------------------------------------------------------------------------------

/* 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }; */

/* const student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};

const objectSize = Object.keys(student).length

console.log('Size of the student object: ' + objectSize) */

//-------------------------------------------------------------------------------------------------------------------

/* 4. Write a JavaScript program to display the reading status (i.e. display book name,
      author name and reading status) of the following books.

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }]; */

/* const library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

for (let i = 0; i < library.length; i++) {
  library[i].readingStatus

  if (library[i].readingStatus) {
    console.log('The book ' + library[i].title + ' are already read')
  }
  if (!library[i].readingStatus) {
    console.log('The book ' + library[i].title + ' still need to be read')
  }
} */

//-------------------------------------------------------------------------------------------------------------------

/* 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.
 */

/* const cylinder = {
  radius: 2,
  height: 100,
  getVolume() {
    const cylinderVolume = Math.sqrt(this.radius) + this.height
    console.log(cylinderVolume)
  },
}

cylinder.getVolume() */

//-------------------------------------------------------------------------------------------------------------------

/* 6. Write a Bubble Sort algorithm in JavaScript.
Note : Bubble sort is a simple sorting algorithm that works by repeatedly 
       stepping through the list to be sorted.

Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6] */

/* const originalData = [6,4,0, 3,-2,1]

console.log(originalData)

const newData = originalData.sort()

console.log(newData) */

//-------------------------------------------------------------------------------------------------------------------
