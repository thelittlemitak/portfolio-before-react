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

let tableCheckbox = document.querySelectorAll('.table-checkbox');

let i;
function assignement() {
  for (i = 0; i < tableCheckbox.length; i++) {
    tableCheckbox[i].addEventListener('change', function (e) {
      this.parentElement.parentElement.parentElement.remove();
    });
    tableCheckbox = document.querySelectorAll('.table-checkbox');
  }
}

tgAdd.addEventListener('click', function () {
  tgtb.insertAdjacentHTML(
    'beforeend',
    '<tr><th class="table-goal"><input class="profile-input profile-input-goal" type="text" placeholder="New Goal"></th><td><input class="profile-input profile-input-text" type="text" placeholder="What has to happen to accomplish it?"></td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox" data-test="new"/></div></td></tr>'
  );
  assignement();
});

cgtAdd.addEventListener('click', function () {
  cgttb.insertAdjacentHTML(
    'beforeend',
    '<tr><th class="table-goal"><input class="profile-input profile-input-goal" type="text" placeholder="New Goal"></th><td><input class="profile-input profile-input-text" type="text" placeholder="Daily"></td><td><input class="profile-input profile-input-text-2" type="text" placeholder="15 min"></td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox" /></div></td></tr>'
  );
  assignement();
});
cgaAdd.addEventListener('click', function () {
  cgatb.insertAdjacentHTML(
    'beforeend',
    '<tr><th class="table-goal"><input class="profile-input profile-input-goal" type="text" placeholder="New Goal"></th><td><input class="profile-input profile-input-text" type="text" placeholder="Daily"></td><td><input class="profile-input profile-input-text-2" type="text" placeholder="Action to accomplish the goal"></td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox" /></div></td></tr>'
  );
  assignement();
});
laAdd.addEventListener('click', function () {
  latb.insertAdjacentHTML(
    'beforeend',
    '<tr><th class="table-goal"><input class="profile-input profile-input-goal" type="text" placeholder="Activity"></th><td><input class="profile-input profile-input-text" type="text" placeholder="Daily"></td><td><input class="profile-input profile-input-text-2" type="text" placeholder="15 min"></td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox" /></div></td></tr>'
  );
  assignement();
});
faAdd.addEventListener('click', function () {
  fatb.insertAdjacentHTML(
    'beforeend',
    '<tr><th class="table-goal"><input class="profile-input profile-input-goal" type="text" placeholder="Activity"></th><td><input class="profile-input profile-input-text" type="text" placeholder="01/03/2023"></td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox" /></div></td></tr>'
  );
  assignement();
});
sgAdd.addEventListener('click', function () {
  sgtb.insertAdjacentHTML(
    'beforeend',
    '<tr><th class="table-goal"><input class="profile-input profile-input-goal" type="text" placeholder="Event"></th><td><input class="profile-input profile-input-text" type="text" placeholder="01/03/2023"></td><td><input class="profile-input profile-input-text-2" type="text" placeholder="Anything I should bring?"></td><td><div class="checkbox-container"><input type="checkbox" class="table-checkbox" /></div></td></tr>'
  );
  assignement();
});

// THE INPUT FUNCTIONALITY

document.addEventListener('keypress', function (e) {
  if (
    e.key === 'Enter' &&
    document.querySelector('.profile-input-text').value === ''
  ) {
    alert('Please fill the text field next to the goal');
  }
  // * no need for this so you can have empty notes/actions too. What's important is the goal and first field
  // else if (
  //   e.key === 'Enter' &&
  //   document.querySelector('.profile-input-text-2').value === ''
  // ) {
  //   alert('Please fill the text field on the right side too');
  // }
  else if (
    e.key === 'Enter' &&
    document.querySelector('.profile-input-goal').value === ''
  ) {
    alert('Please fill the goal field on the left');
  } else if (
    e.key === 'Enter' &&
    document.querySelector('.profile-input-text').value !== ''
  ) {
    let inputGoalEl = document.querySelector('.profile-input-goal');
    let inputGoalParent = inputGoalEl.parentElement;
    let inputGoalValue = document.querySelector('.profile-input-goal').value;

    inputGoalParent.removeChild(inputGoalEl);
    inputGoalParent.insertAdjacentHTML('afterbegin', '<div></div>');
    inputGoalParent.firstChild.textContent = inputGoalValue;

    let inputText1El = document.querySelector('.profile-input-text');
    let inputText1Parent = inputText1El.parentElement;
    let inputText1Value = document.querySelector('.profile-input-text').value;

    inputText1Parent.removeChild(inputText1El);
    inputText1Parent.insertAdjacentHTML('afterbegin', '<div></div>');
    inputText1Parent.firstChild.textContent = inputText1Value;

    let inputText2El = document.querySelector('.profile-input-text-2');
    let inputText2Parent = inputText2El.parentElement;
    let inputText2Value = document.querySelector('.profile-input-text-2').value;

    inputText2Parent.removeChild(inputText2El);
    inputText2Parent.insertAdjacentHTML('afterbegin', '<div></div>');
    inputText2Parent.firstChild.textContent = inputText2Value;
  }
});

// THE WRAPPER FUNCTIONALITY
const wrapper = document.querySelector('.wrapper');
new Sortable(wrapper, {
  animation: 350
})

// & PROBLEM 1 add event listener doesn't work after using innerHTML

// * TEST 3 i will try with empty string => so the problem is that when I change the inner HTML,
// tgAdd.addEventListener('click', function () {
//   console.log(
//     "this is a test removing some data from the string to see if that's the problem"
//   );
// });

// * TEST 2 i will try to remove all the classes => same as below
// tgAdd.addEventListener('click', function () {
//   console.log("this is a test removing some data from the string to see if that's the problem")
//   tgtb.innerHTML +=
//     '<tr><th>Code</th><td>Get a coding job</td><td><div><input type="checkbox"/></div></td></tr>';
// });

// * TEST 1 => the problem is created by changing the HTML
// tgAdd.addEventListener('click', function () {
//   console.log("this is a test to see if the innterHTML is the problem")
// });

// * SOLUTION HERE https://stackoverflow.com/questions/37448622/why-can-event-listeners-stop-working-after-using-element-innerhtml

// & PROBLEM 2 add event listener doesn't work after using remove
// * the index works correctly and the new stuff is added correctly. Also after removal.
// * so the problem seems to be similar to the above.
