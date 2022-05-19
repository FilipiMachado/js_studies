let nameError = document.getElementById('name-error')
let phoneError = document.getElementById('phone-error')
let emailError = document.getElementById('email-error')
let messageError = document.getElementById('message-error')
let submitError = document.getElementById('submit-error')

function validateName() {
  let name = document.getElementById('contact-name').value

  if (name.length == 0) {
    nameError.innerHTML = 'Name is required!'
    return false
  }

  if (name.length <= 4) {
    nameError.innerHTML = 'Name needs more than 4 characters!'
    return false
  }

  nameError.innerHTML = '<i class="fas fa-check-circle"></i>'
  return true
}

function validatePhoneNumber() {
    let phone = document.getElementById('contact-phone').value

    console.log(phone)
  
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required!'
      return false
    }
  
    if (phone.length < 11 || phone.length > 12) {
        phoneError.innerHTML = 'Phone number must be 11 characters!'
      return false
    }
  
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true
  }