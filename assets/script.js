/* typing */
var typed = new Typed('.typing',{
  strings: ['Full Stack Developer','Web Designer', 'Web Developer', 'Graphic Designer'],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})


/*** Back to top */
var btnToTop = document.querySelector(".back-to-top");
btnToTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
});