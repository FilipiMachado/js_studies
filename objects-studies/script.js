function Person(name, age) {
  this.name = name
  this.age = age
  this.greeting = function () {
    console.log(`Hi! I'm ${this.name}. I have ${this.age} years old!`)
  }
}

let person1 = new Person('Fil', 35)
let person2 = new Person('Vitrola', 21)

console.log(person1)
person1.greeting()
console.log(person2)
person2.greeting()

/* let fil = createNewPerson('Fil', 35)
let vitrola = createNewPerson('Vitrola', 21)

console.log(fil)
console.log(vitrola)

fil.greeting()
vitrola.greeting()
 */

/* let person = {
  name: {
    first: 'Bob',
    last: 'Smith'
  },
  age: 32,
  gender: 'male',
  interests: ['dance', 'music'],
  bio: function() {
    console.log(`${this.name.first} ${this.name.last} have ${this.age} years old. He likes to ${this.interests[0]} and listen to ${this.interests[1]}.`)
  }
}

person.bio() */

/* let myDataName = 'tall';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;

console.log(myDataName) */

/* person.eyes = 'brown'
person.congrats = function () {console.log('Congratulations to you ' + person.name[0] + "!")}

console.log(person.eyes)
person.congrats() */

/* let isRow = false;
let myContainer = document.getElementById("flex-container");

document.getElementById("change-flex-btn").addEventListener("click", changeFlexDirection);


function changeFlexDirection() {
  if (isRow) {
    myContainer.style.flexDirection = "row";
    isRow = false
  } else {
    myContainer.style.flexDirection = "column";
    isRow = true
}
} */

/* let text = ""
const fruits = ['orange', 'apple', 'strawberry']

fruits.forEach(getFruits)

document.getElementById('list').innerHTML = text

function getFruits(item, index) {
  text += `${index + 1}: ${item}`
} */

/* person.name = person.name.concat('Smithson')

console.log(person)

person.name.pop()
person.interests.pop()

console.log(person) */

/* let firstName = person.name[0]
let lastName = person.name[1]

let fullName = firstName.concat(lastName)

console.log(fullName)
console.log(person.name) */

//console.log(person)

/* let names = ['Bob', 'Smith','Bob', 'Smith','Bob', 'Smith']

for (let i = 0; i < names.length; i++) {
  if (names[i] == 'Smith') {
    let newNames = []
    newNames = new Array(names[i])
    console.log(newNames)
  }
} */

/* person.bio()
console.log(person.age)

console.log(person)

person.hello = function() { alert('Goodbye to you all!') }

console.log(person)

person.hello() */