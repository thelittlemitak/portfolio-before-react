console.log("k paza");

// ! HAVE THE CORRECT YEAR ON THE FOOTER

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// ! FIX THE OLD-SAFARI GAP ISSUE

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  console.log(flex)

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// ! CTA APPAREANCE

const cta = document.querySelector(".cta-closed");
const ctaB = document.querySelector(".cta-closed-b");
const loginBtn = document.querySelector("#login-button");
const signUpBtn = document.querySelector("#sign-up-button");
const hero = document.querySelector(".hero");
const hero2 = document.querySelector(".hero2");
const body = document.querySelector('body');
const btnArea = document.querySelector('.button-area');


loginBtn.addEventListener('click', function () {
  cta.classList.toggle('cta-open');
  hero.classList.toggle('hide');
  hero2.classList.toggle('hide');
  loginBtn.classList.toggle('hide');
  signUpBtn.classList.toggle('hide');
  body.classList.toggle('hide-overflow-y')
  btnArea.classList.toggle('hide');
})

signUpBtn.addEventListener('click', function () {
  ctaB.classList.toggle('cta-open');
  hero.classList.toggle('hide');
  hero2.classList.toggle('hide');
  loginBtn.classList.toggle('hide');
  signUpBtn.classList.toggle('hide');
  body.classList.toggle('hide-overflow-y')
  btnArea.classList.toggle('hide');
})

// ! SMOOTH SCROLLING SAFARI FIX

const contactBtn = document.querySelector('#contact-button');
const footer = document.querySelector('.footer-test');


contactBtn.addEventListener('click', function () {
  footer.scrollIntoView({behavior: "smooth"})
})



/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/