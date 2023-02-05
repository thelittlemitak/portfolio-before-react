('use strict');

const tgtb = document.querySelector('#tgtb');
const cgttb = document.querySelector('#cgttb');
const cgatb = document.querySelector('#cgatb');
const latb = document.querySelector('#latb');
const fatb = document.querySelector('#fatb');
const sgtb = document.querySelector('#sgtb');

const tgAdd = document.querySelector('#tgAdd');
const cgtAdd = document.querySelector('#cgtAdd');
const cgaAdd = document.querySelector('#cgaAdd');
const laAdd = document.querySelector('#laAdd');
const faAdd = document.querySelector('#faAdd');
const sgAdd = document.querySelector('#sgAdd');

const tgtr = document.querySelector('#tgtr');
const tableCheckbox = document.querySelectorAll('.table-checkbox');

for (i = 0; i < tableCheckbox.length; i++) {
  tableCheckbox[i].addEventListener('change', function () {
    console.log(this)
    this.parentElement.parentElement.parentElement.remove();
  });
}

// this is working, what's insid the function, if you put a number, but not i.

tgAdd.addEventListener('click', function () {
  tgtb.innerHTML +=
    '<tr><th class="table-goal">Code</th><td>Get a coding job</td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox"/></div></td></tr>';
});
cgtAdd.addEventListener('click', function () {
  cgttb.innerHTML +=
    '<tr><th class="table-goal">Code</th><td>Get a coding job</td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox"/></div></td></tr>';
});
cgaAdd.addEventListener('click', function () {
  cgatb.innerHTML +=
    '<tr><th class="table-goal">Code</th><td>Get a coding job</td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox"/></div></td></tr>';
});
laAdd.addEventListener('click', function () {
  latb.innerHTML +=
    '<tr><th class="table-goal">Code</th><td>Get a coding job</td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox"/></div></td></tr>';
});
faAdd.addEventListener('click', function () {
  fatb.innerHTML +=
    '<tr><th class="table-goal">Code</th><td>Get a coding job</td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox"/></div></td></tr>';
});
sgAdd.addEventListener('click', function () {
  sgtb.innerHTML +=
    '<tr><th class="table-goal">Code</th><td>Get a coding job</td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox"/></div></td></tr>';
});
