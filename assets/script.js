/* typing */
var typed = new Typed('.typing',{
  strings: ['Front-end Developer', 'Web', 'Mobile'],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})

function scrollToElement(divId) {
  var section = document.querySelector(divId);
  if (section) {
      section.scrollIntoView({ behavior: "smooth" });
  }
}

/*** Back to top */
var btnToTop = document.querySelector(".back-to-top");
btnToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/** Age */
let birthdayYear = 1991;
let currentYear = new Date().getFullYear();
let ageValue = currentYear - birthdayYear;

document.querySelector('#age').innerHTML = ageValue;
