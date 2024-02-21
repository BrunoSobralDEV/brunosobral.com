/* typing */
var typed = new Typed('.typing',{
  strings: ['FullStack Developer', 'Web', 'Mobile'],
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

function sendEmail(event) {
  event.preventDefault();
  const emailData = {};
  const formMail = document.querySelector('#formMail');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInput = formMail.querySelector('[name="email"]');
  const emailError = document.getElementById('emailError');

  let hasError = false;

  function markError(element, errorSpan, message) {
    element.classList.add('error-border');
    errorSpan.textContent = message;
    hasError = true;
  }
  
  function clearError(element, errorSpan) {
    element.classList.remove('error-border');
    errorSpan.textContent = '';
  }

  const formElements = formMail.elements;
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    const errorSpan = document.getElementById(element.name + 'Error');
    
    if(errorSpan) {
      if (element.required && element.value.trim() === '') {
        markError(element, errorSpan, 'Campo obrigatório.');
      } else {
        clearError(element, errorSpan);
      }
      if(element.type == 'email') {
        if (!emailRegex.test(emailInput.value)) {
          markError(element, emailError, 'O endereço de e-mail não é válido.');
        } else {
          clearError(element, emailError);
        }
      }
    }
  }

  if (hasError) {
    return
  }
  
  const btnSubmit = document.querySelector('#btnSubmit');

  btnSubmit.disabled = true;
  btnSubmit.textContent = 'Enviando...';

  const form = new FormData(formMail);
  form.forEach((value, key) => {
    emailData[key] = value;
  });
  
  fetch("https://formsubmit.co/ajax/brunosobralss@hotmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        nome: emailData.nome,
        email: emailData.email,
        assunto: emailData.assunto,
        mensagem: emailData.mensagem,
    })
})
    .then(response => {
      response.json();

      form.forEach((value,name) => {
        formMail.querySelector(`[name=${name}]`).value = '';
      });

      Toastify({
        text: "😁 Obrigado!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#37B182",
        },
      }).showToast();
    })
    .then(data => console.log(data))
    .catch(error => {
      
      Toastify({
        text: "😧 Por favor, tente novamente",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#EC1839",
        },
      }).showToast();
    })
    .finally(() => {
      btnSubmit.disabled = false;
      btnSubmit.textContent = 'Enviar';
    })
}
