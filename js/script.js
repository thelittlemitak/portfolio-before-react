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

  console.log(flex);

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

const cta = document.querySelector(".login-form-cont");
const ctaB = document.querySelector(".signup-form-cont");

const loginBtn = document.querySelector("#login-button");
const signUpBtn = document.querySelector("#sign-up-button");
const readyBtn = document.querySelector(".ready-button");

const btnArea = document.querySelector(".button-area");
const body = document.querySelector("body");
const mainEL = document.querySelector("main")
const footer = document.querySelector(".footer-test");




loginBtn.addEventListener("click", function () {
  cta.classList.toggle("form-open");
  
  btnArea.classList.toggle("hide");
  mainEL.classList.toggle("hide")
  footer.classList.toggle("hide")
  
  body.classList.toggle("hide-overflow-y");
});

signUpBtn.addEventListener("click", function () {
  ctaB.classList.toggle("form-open");
  
  btnArea.classList.toggle("hide");
  mainEL.classList.toggle("hide")
  footer.classList.toggle("hide")
  
  body.classList.toggle("hide-overflow-y");

});

readyBtn.addEventListener("click", function () {
  ctaB.classList.toggle("form-open");
  
  btnArea.classList.toggle("hide");
  mainEL.classList.toggle("hide")
  footer.classList.toggle("hide")
  
  body.classList.toggle("hide-overflow-y");
});

// ! SMOOTH SCROLLING SAFARI FIX

const contactBtn = document.querySelector("#contact-button");

contactBtn.addEventListener("click", function () {
  footer.scrollIntoView({ behavior: "smooth" });
});
