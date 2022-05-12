function Person(first, last, age, gender, interests) {
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    // First define a string, and make it equal to the part of
    // the bio that we know will always be the same.
    var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
    // define a variable that will contain the pronoun part of
    // the second sentence
    var pronoun;

    // check what the value of gender is, and set pronoun
    // to an appropriate value in each case
    if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      pronoun = 'He likes ';
    } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      pronoun = 'She likes ';
    } else {
      pronoun = 'They like ';
    }

    // add the pronoun string on to the end of the main string
    string += pronoun;

    // use another conditional to structure the last part of the
    // second sentence depending on whether the number of interests
    // is 1, 2, or 3
    if(this.interests.length === 1) {
      string += this.interests[0] + '.';
    } else if(this.interests.length === 2) {
      string += this.interests[0] + ' and ' + this.interests[1] + '.';
    } else {
      // if there are more than 2 interests, we loop through them
      // all, adding each one to the main string followed by a comma,
      // except for the last one, which needs an and & a full stop
      for(var i = 0; i < this.interests.length; i++) {
        if(i === this.interests.length - 1) {
          string += 'and ' + this.interests[i] + '.';
        } else {
          string += this.interests[i] + ', ';
        }
      }
    }

    // finally, with the string built, we alert() it
    alert(string);
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
};

let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

person1.bio()
person1.greeting()











/* function Person(first, last, age, interests) {
  this.name = {
    'first': first,
    'last': last
  }
  this.age = age
  this.interests = interests
  this.bio = function() {console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`)}
}

let firstName = window.prompt("Enter your first name: ");
let lastName = window.prompt("Enter your last name: ");
let personAge = window.prompt("Enter your age: ");
let personInterests = []
personInterests.push(window.prompt("Enter your first interest: "))
personInterests.push(window.prompt("Enter your second interest: "))

let person1 = new Person(firstName, lastName, personAge, personInterests)

person1.bio()
console.log(person1)

 */

/* function Person(name, age) {
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
person2.greeting() */

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