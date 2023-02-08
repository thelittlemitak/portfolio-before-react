('use strict');

// ! SMOOTH SCROLLING SAFARI FIX

const contactBtn = document.querySelector('.contact-button');

contactBtn.addEventListener('click', function () {
  footer.scrollIntoView({ behavior: 'smooth' });
});

// ! OPEN/CLOSE QUESTIONS FUNCTIONALITY

const question = document.querySelectorAll('.faq-question-container');
const answer = document.querySelectorAll('.faq-answer');

console.log(question);
console.log(answer);

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function () {
    answer[i].classList.toggle('visible');
    question[i].classList.toggle('open-question');
  });
}
