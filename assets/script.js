/* typing */
var typed = new Typed('.typing',{
  strings: ['Front-end Developer'],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})


/** Age */
let birthdayYear = 1991;
let currentYear = new Date().getFullYear();
let ageValue = currentYear - birthdayYear;

document.querySelector('#age').innerHTML = ageValue;