('use strict');

// CHAT TO WRAP

const forumLine = document.querySelectorAll('.forum-line');
const chatWindow = document.querySelectorAll('.chat-window');

console.log(forumLine);
console.log(chatWindow);

for (let i = 0; i < forumLine.length; i++) {
  forumLine[i].addEventListener('click', function () {
    chatWindow[i].classList.toggle('visible');
  });
}