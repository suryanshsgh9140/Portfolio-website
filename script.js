// Activate menu bar//
 let menuBtn =  document.getElementById('menu-btn');
 let menuBar =  document.querySelector('.menu-bar');
 menuBtn.addEventListener('click', function(){
   menuBtn.classList.toggle('bx-x');
   menuBar.classList.toggle('active');
})


// LETS REMOVE MENUBAR ON SCROLL//
 window.onscroll = () => {
     menuBtn.classList.remove('bx-x');
     menuBar.classList.remove('active');
 }

//  scroll reveral//
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay:200
});
ScrollReveal().reveal('.home-bio h1, .about-resume' ,{origin: 'left'});
ScrollReveal().reveal('.home-bio p',{origin: 'right'});
ScrollReveal().reveal('.home-bio , heading',{origin: 'top'});

ScrollReveal().reveal('.profile-pic , .about-items, .skills-items, .projects-items, .form',{origin: 'bottom'});


// typing animation in java script//
const animText = new Typed ('.animated-text',{
   strings: ['Web Developer', 'Coder' , 'Programmer', 'Designer'],
   backSpeed: 100,
   typeSpeed: 100,
   backDelay: 600,
   loop: true

});






