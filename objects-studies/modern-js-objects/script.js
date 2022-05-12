// object literals

const newBlogs = [
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

user.showBlogs()

/* let helloMessage = () => {
  console.log('message')
}

helloMessage()
 */
/* let newUserName = 'Vitrola'
newUserName.toUpperCase()

user.login(newUserName) */
