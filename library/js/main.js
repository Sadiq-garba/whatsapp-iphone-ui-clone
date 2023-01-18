$(document).ready(function(){

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
  });

 $("#email").on("keyup", function(){
       var search = $('#email').val();
      $("#output").text(search);
       });


       /**
   * Intro type effect
   */
 const typed = select('.typed')
 if (typed) {
   let typed_strings = typed.getAttribute('data-typed-items')
   typed_strings = typed_strings.split(',')
   new Typed('.typed', {
     strings: typed_strings,
     loop: true,
     typeSpeed: 100,
     backSpeed: 50,
     backDelay: 2000
   });
 }



});

