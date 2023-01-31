('use strict');

// ! SMOOTH SCROLLING SAFARI FIX

const contactBtn = document.querySelector('.contact-button');

contactBtn.addEventListener('click', function () {
  footer.scrollIntoView({ behavior: 'smooth' });
});