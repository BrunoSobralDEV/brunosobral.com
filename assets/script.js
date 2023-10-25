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

// function sendMail(event) {
//   event.preventDefault();

//   const formMail= document.getElementById('formMail');
//   const form = new FormData(formMail);
//   const formData = {};
//   form.forEach((value, key) => {
//    formData[key]= value;
//   });
//   console.log(formData);

//   const url = '';
//   const mailData = {
//     to: 'brunosobralss@hotmail.com',
//     subject: 'Msg de brunosobral.com',
//     html: `Nome:${formData.name}\nE-mail: ${formData.mail}\nAssunto: ${formData.subject}\nMensagem: ${formData.message}`
//   };

//   fetch(url, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       to: 'brunosobralss@hotmail.com',
//       subject: 'Msg de brunosobral.com',
//       html: `Nome:${formData.name}\nE-mail: ${formData.mail}\nAssunto: ${formData.subject}\nMensagem: ${formData.message}`
//     }),
//     mode: 'no-cors',
//   }).then( response => {
//     if (response.ok) {
//       console.log('response ok',response);
//     } else {
//       console.log('response error',response);
//     }
//   })
//   .catch(error => {
//     console.error('Erro:', error);
//   });
// }