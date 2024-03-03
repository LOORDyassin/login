const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup-section header');
const loginButton = document.querySelector('.login-section header');
loginButton.addEventListener('click', () => {
    container.classList.add('active');
});
signupButton.addEventListener('click', () => {
    container.classList.remove('active');
});
const scriptURL = 'https://script.google.com/macros/s/AKfycby8CYShJWVq3IYweI-AaUpvxIVrFw5nJU21xox_f7UQVv2rLakW1UYCZzGA29hr7KgORA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})