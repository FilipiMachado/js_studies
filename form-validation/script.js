const userName = document.getElementById('name')
const userPassword = document.getElementById('password')
const userForm = document.getElementById('form')
const errorEl = document.getElementById('error')

const userNameEl = document.getElementById('username-data')
const passwordEl = document.getElementById('password-data')

userForm.addEventListener('submit', (e) => {
  let messages = []

  if (userName.value === '' || userName.value == null) {
    messages.push('Name is required!')
  }

  if (userPassword.value === '' || userPassword.value == null) {
    messages.push('Password is required!')
  }

  if (userPassword.value.length < 6) {
    messages.push('Password is lower than 6 characters!')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorEl.innerHTML = messages.join(', ')
  }
})