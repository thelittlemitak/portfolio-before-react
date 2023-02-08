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

const testImg1 = document.querySelector('#testimonial-img-1');
const testImg2 = document.querySelector('#testimonial-img-2');
const testImg3 = document.querySelector('#testimonial-img-3');
const testImg4 = document.querySelector('#testimonial-img-4');

const testBox1 = document.querySelector('#testimonial-box-1');
const testBox2 = document.querySelector('#testimonial-box-2');
const testBox3 = document.querySelector('#testimonial-box-3');
const testBox4 = document.querySelector('#testimonial-box-4');

const testDot1 = document.querySelector('#dot1');
const testDot2 = document.querySelector('#dot2');
const testDot3 = document.querySelector('#dot3');
const testDot4 = document.querySelector('#dot4');

function hideLeftBtn() {
  if (!testImg1.classList.contains('hide-carousel')) {
    btnLeft.classList.add('hide-carousel');
  }
}
hideLeftBtn();

btnRight.addEventListener('click', function () {
  if (
    testImg2.classList.contains('hide-carousel') &&
    testImg3.classList.contains('hide-carousel') &&
    testImg4.classList.contains('hide-carousel')
  ) {
    testImg1.classList.add('hide-carousel');
    testImg2.classList.remove('hide-carousel');
    testBox1.classList.add('hide-carousel');
    testBox2.classList.remove('hide-carousel');
    testDot1.classList.remove('selected-dot');
    testDot2.classList.add('selected-dot');
    btnLeft.classList.toggle('hide-carousel');
  } else if (
    testImg3.classList.contains('hide-carousel') &&
    testImg4.classList.contains('hide-carousel')
  ) {
    testImg2.classList.add('hide-carousel');
    testImg3.classList.remove('hide-carousel');
    testBox2.classList.add('hide-carousel');
    testBox3.classList.remove('hide-carousel');
    testDot2.classList.remove('selected-dot');
    testDot3.classList.add('selected-dot');
  } else if (testImg4.classList.contains('hide-carousel')) {
    testImg3.classList.add('hide-carousel');
    testImg4.classList.remove('hide-carousel');
    testBox3.classList.add('hide-carousel');
    testBox4.classList.remove('hide-carousel');
    testDot3.classList.remove('selected-dot');
    testDot4.classList.add('selected-dot');
    btnRight.classList.toggle('hide-carousel');
  }
});

btnLeft.addEventListener('click', function () {
  if (
    testImg1.classList.contains('hide-carousel') &&
    testImg2.classList.contains('hide-carousel') &&
    testImg3.classList.contains('hide-carousel')
  ) {
    testImg4.classList.add('hide-carousel');
    testImg3.classList.remove('hide-carousel');
    testBox4.classList.add('hide-carousel');
    testBox3.classList.remove('hide-carousel');
    testDot4.classList.remove('selected-dot');
    testDot3.classList.add('selected-dot');
    btnRight.classList.toggle('hide-carousel');
  } else if (
    testImg2.classList.contains('hide-carousel') &&
    testImg1.classList.contains('hide-carousel')
  ) {
    testImg3.classList.add('hide-carousel');
    testImg2.classList.remove('hide-carousel');
    testBox3.classList.add('hide-carousel');
    testBox2.classList.remove('hide-carousel');
    testDot3.classList.remove('selected-dot');
    testDot2.classList.add('selected-dot');
  } else if (testImg1.classList.contains('hide-carousel')) {
    testImg2.classList.add('hide-carousel');
    testImg1.classList.remove('hide-carousel');
    testBox2.classList.add('hide-carousel');
    testBox1.classList.remove('hide-carousel');
    testDot2.classList.remove('selected-dot');
    testDot1.classList.add('selected-dot');
    btnLeft.classList.toggle('hide-carousel');
  }
});

testDot1.addEventListener('click', function () {
  testImg1.classList.remove('hide-carousel');
  testImg2.classList.add('hide-carousel');
  testImg3.classList.add('hide-carousel');
  testImg4.classList.add('hide-carousel');
  testBox1.classList.remove('hide-carousel');
  testBox2.classList.add('hide-carousel');
  testBox3.classList.add('hide-carousel');
  testBox4.classList.add('hide-carousel');
  testDot1.classList.add('selected-dot');
  testDot2.classList.remove('selected-dot');
  testDot3.classList.remove('selected-dot');
  testDot4.classList.remove('selected-dot');
  btnLeft.classList.add('hide-carousel');
  btnRight.classList.remove('hide-carousel');
});

testDot2.addEventListener('click', function () {
  testImg1.classList.add('hide-carousel');
  testImg2.classList.remove('hide-carousel');
  testImg3.classList.add('hide-carousel');
  testImg4.classList.add('hide-carousel');
  testBox1.classList.add('hide-carousel');
  testBox2.classList.remove('hide-carousel');
  testBox3.classList.add('hide-carousel');
  testBox4.classList.add('hide-carousel');
  testDot1.classList.remove('selected-dot');
  testDot2.classList.add('selected-dot');
  testDot3.classList.remove('selected-dot');
  testDot4.classList.remove('selected-dot');
  btnLeft.classList.remove('hide-carousel');
  btnRight.classList.remove('hide-carousel');
});

testDot3.addEventListener('click', function () {
  testImg1.classList.add('hide-carousel');
  testImg2.classList.add('hide-carousel');
  testImg3.classList.remove('hide-carousel');
  testImg4.classList.add('hide-carousel');
  testBox1.classList.add('hide-carousel');
  testBox2.classList.add('hide-carousel');
  testBox3.classList.remove('hide-carousel');
  testBox4.classList.add('hide-carousel');
  testDot1.classList.remove('selected-dot');
  testDot2.classList.remove('selected-dot');
  testDot3.classList.add('selected-dot');
  testDot4.classList.remove('selected-dot');
  btnLeft.classList.remove('hide-carousel');
  btnRight.classList.remove('hide-carousel');
});

testDot4.addEventListener('click', function () {
  testImg1.classList.add('hide-carousel');
  testImg2.classList.add('hide-carousel');
  testImg3.classList.add('hide-carousel');
  testImg4.classList.remove('hide-carousel');
  testBox1.classList.add('hide-carousel');
  testBox2.classList.add('hide-carousel');
  testBox3.classList.add('hide-carousel');
  testBox4.classList.remove('hide-carousel');
  testDot1.classList.remove('selected-dot');
  testDot2.classList.remove('selected-dot');
  testDot3.classList.remove('selected-dot');
  testDot4.classList.add('selected-dot');
  btnLeft.classList.remove('hide-carousel');
  btnRight.classList.add('hide-carousel');
});