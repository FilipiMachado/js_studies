let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required!";
    return false;
  }

  if (name.length <= 4) {
    nameError.innerHTML = "Name needs more than 4 characters!";
    return false;
  }

  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatePhoneNumber() {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required!";
    return false;
  }

  if (phone.length !== 12) {
    phoneError.innerHTML = "Phone number must be 11 characters!";
    return false;
  }

  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;
  
  if (email.length == 0) {
    emailError.innerHTML = "Email is required!";
    return false;
  }

  if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    emailError.innerHTML = "Email invalid!";
    return false;
  }

  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let required = 30;
  let charsLimit = 100;
  let charsLeft = required - message.length

  if (charsLeft > 0) {
    messageError.innerHTML = charsLeft + ' more characters required!'
    return false;
  }

  if (message.length >= charsLimit) {
    messageError.innerHTML = 'No more than 100 characters are allowed!'
    return false;
  }

  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm(e) {
  if (!validateName() || !validatePhoneNumber() || !validateEmail() || !validateMessage()) {
    submitError.style.display = 'block'
    submitError.innerHTML = 'Form is incorrect!'
    setTimeout(function() {
      submitError.style.display = 'none'
    }, 2500);
    return false
  }

  e.preventeDefault()
  return true
}