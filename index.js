const emailForm = document.querySelector('form[name="email"]');
const email = document.querySelector('input[name="email"]');
const button = document.querySelector('.form-button');

const emailInfo = {
  email,
};

const handleSubmit = (event) => {
  event.preventDefault();
  if (email.value === '') {
    alert('Please enter your email');
    return;
  }
  console.log(email.value);
  emailInfo.email = email.value;

  console.log(emailInfo);
};

button.addEventListener('click', handleSubmit);
