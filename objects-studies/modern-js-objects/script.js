// object literals

const blogs = [
  {
    title: 'amazing movies to watch',
  },
  {
    title: 'new things to discover',
  },
  {
    title: 'some variety of food',
  },
];

console.log(blogs)

let user = {
  name: 'Fil',
  age: 25,
  email: 'filbr@myemail.com',
  blogs: ['amazing movies to watch', 'new things to discover', 'some variety of food'],
  login(info) {
    console.log(`The user: ${info} is logged in!`)
  },
  showBlogs() {
    
    //console.log(this)
    /* console.log(`The user has written the following blogs: `)
    this.blogs.forEach(blogs => {
      console.log('- ' + blogs)
    }) */
  }
}


/* let helloMessage = () => {
  console.log('message')
}

helloMessage()
 */
/* let newUserName = 'Vitrola'
newUserName.toUpperCase()

user.login(newUserName) */
