('use strict');

// ! FORMS APPAREANCE

const loginForm = document.querySelector('.login-form-cont');
const signupForm = document.querySelector('.signup-form-cont');

const loginBtn = document.getElementById('login-button');
const signUpBtn = document.querySelector('#sign-up-button');
const readyBtn = document.querySelector('.ready-button');

const btnArea = document.querySelector('.button-area');
const body = document.querySelector('body');
const mainEL = document.querySelector('main');
const footer = document.querySelector('.footer-test');

loginBtn.addEventListener('click', function () {
  loginForm.classList.toggle('form-open');

  btnArea.classList.toggle('hide');
  mainEL.classList.toggle('hide');
  footer.classList.toggle('hide');

  body.classList.toggle('hide-overflow-y');
});

signUpBtn.addEventListener('click', function () {
  signupForm.classList.toggle('form-open');

  btnArea.classList.toggle('hide');
  mainEL.classList.toggle('hide');
  footer.classList.toggle('hide');

  body.classList.toggle('hide-overflow-y');
});

readyBtn.addEventListener('click', function () {
  signupForm.classList.toggle('form-open');

  btnArea.classList.toggle('hide');
  mainEL.classList.toggle('hide');
  footer.classList.toggle('hide');

  body.classList.toggle('hide-overflow-y');
});

// ! CAROUSEL MOVEMENT

const btnLeft = document.querySelector('.carousel-button-left');
const btnRight = document.querySelector('.carousel-button-right');