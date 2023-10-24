/* typing */
var typed = new Typed('.typing',{
  strings: ['Front-end Developer', 'Web', 'Mobile'],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})
var typed = new Typed('.typing-load',{
  strings: ['Bruno Sobral. . .'],
  typeSpeed: 80,
  BackSpeed: 60,
  loop: true
})

var i = setInterval(function () {
  clearInterval(i);
  
  document.querySelector("#loading-screen").classList.add("loaded");

  document.querySelector(".main-container").style.display = "inline";
  setInterval(()=>{
  document.querySelector("#loading-screen").style.opacity = 0;

},500)
  document.querySelector(".style-switcher").style.display='blcok'
  document.querySelector(".aside").style.display='flex'
  document.body.style.overflow='visible'
}, 3000);
// }, 575011);

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

window.addEventListener('scroll', function () {
  var menuItems = document.querySelectorAll('.menu-item');
  var sections = document.querySelectorAll('section');

  var currentSection = null;

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop - 1;
    var sectionBottom = sectionTop + section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSection = section;
    }
  });

  menuItems.forEach(function (menuItem) {
    menuItem.classList.remove('active');
  });

  if (currentSection) {
    var targetId = currentSection.getAttribute('id');
    var currentMenuItem = document.querySelector('#a-' + targetId);
    if (currentMenuItem) {
      currentMenuItem.classList.add('active');
    }
  }
});