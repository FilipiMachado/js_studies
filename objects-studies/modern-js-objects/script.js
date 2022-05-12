// object literals

let user = {
  name: 'Fil',
  age: 25,
  email: 'filbr@myemail.com',
  blogs: ['amazing movies to watch', 'new things to discover', 'some variety of food'],
  login: function (info) {
    console.log(`The user: ${info} is logged in!`)
  },
  showBlogs: function () {
    
  }
}

let newUserName = 'Vitrola'
newUserName.toUpperCase()

user.login(newUserName)
