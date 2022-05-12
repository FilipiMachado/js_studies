// Built-in Object Methods
//  -- Math Object

console.log(Math)
console.log(Math.PI)

const area = 7.8;

console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))

// random numbers

const randomNumber = Math.random()

console.log(randomNumber);
console.log(Math.round(randomNumber * 100));
































// object literals

/* const newBlogs = [
  {
    title: 'Amazing movies to watch',
    author: 'Fil',
  },
  {
    title: 'New things to discover',
    author: 'Vitrola',
  },
  {
    title: 'Some variety of food',
    author: 'Fil',
  },
];

let user = {
  name: 'Fil',
  age: 25,
  email: 'filbr@myemail.com',
  blogs: newBlogs,
  login(info) {
    console.log(`The user: ${info} is logged in!`)
  },
  showBlogs() {
    //console.log(this)
    console.log(`The user has written the following blogs: `)
    this.blogs.forEach(blogs => {
      console.log('- ' + blogs.title)
      console.log('   author: ' + blogs.author)
    })
  }
}

user.showBlogs() */

/* let helloMessage = () => {
  console.log('message')
}

helloMessage()
 */
/* let newUserName = 'Vitrola'
newUserName.toUpperCase()

user.login(newUserName) */
