const emailForm = document.querySelector('form[name="email"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const button = document.querySelector('.form-button');
const slash = document.querySelector('.slash');
const eyeButton = document.querySelector('.eye-button');

const emailInfo = {
  email,
  password,
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(password.value);
  emailInfo.email = email.value;
  emailInfo.password = password.value;

  console.log(emailInfo);
};

const handleEye = (event) => {
  event.preventDefault();
  if (password.type === 'password') {
    password.type = 'text';
    slash.src = './assets/eye.svg';
  } else {
    password.type = 'password';
    slash.src = './assets/not-slashed.svg';
  }
};

button.addEventListener('click', handleSubmit);
eyeButton.addEventListener('click', handleEye);
