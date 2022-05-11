/* let person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['dance', 'music'],
  bio: function() {
    console.log(`${this.name[0]} ${this.name[1]} have ${this.age} years old. He likes to ${this.interests[0]} and listen to ${this.interests[1]}.`)
  }
}
 */

let isRow = false;
let myContainer = document.getElementById("flex-container");

let btnClick = document.getElementsByClassName("change-flex-btn").addEventListener("click", "LOCALFUNCTION");

if (isRow) {
    myContainer.style.flexDirection = "row";
  } else {
    myContainer.style.flexDirection = "column";
}

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