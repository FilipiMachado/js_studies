let person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['dance', 'music'],
  bio: function() {
    console.log(`${this.name[0]} ${this.name[1]} have ${this.age} years old. He likes to ${this.interests[0]} and listen to ${this.interests[1]}.`)
  }
}

let firstName = person.name[0]
let lastName = person.name[1]

let fullName = firstName.concat(lastName)

console.log(fullName)
console.log(person.name)

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