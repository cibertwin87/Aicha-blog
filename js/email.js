$(document).ready(function() {

  // Funcionalidad el hacer el submit, envio del Email
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('inputName');
    var email   = document.getElementById('inputEmail');
    var message = document.getElementById('inputMessage');

    if (!name.value || !email.value || !message.value) {
       alertify.error('Please check your entries');
      return false;
    } else {
      $.ajax({
    url: "https://formspree.io/cybertwins87@gmail.com", 
    method: "POST",
    data: {
      author: name.value,
      email: email.value,
      message: message.value
          },
    dataType: "json"
});
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success('Message sent');
    }
  });


//Comportarmiento "estetico del formulario" al hacer click fuera de los input y del textarea  
$(".awesome-form .input-group input").focusout(function(){
  var text_val = $(this).val();

  if (!text_val) {
   $(this).removeClass('has-value');
  } else {
   $(this).addClass('has-value');
  }
});

$(".awesome-form #inputMessage").focusout(function(){
  var text_val = $(this).val();

  if (!text_val) {
   $(this).removeClass('has-value');
  } else {
   $(this).addClass('has-value');
  }
});

//######## Mostrar lineas de texto al lado del formulario

// var text_1 = document.getElementById('linea_1');
// var text_2 = document.getElementById('linea_2');
// var text_3 = document.getElementById('linea_3');

//     $('#inputName').click(function() {
//       $('#linea_1').addClass('mostrar');
//     });
//     $('#inputEmail').click(function() {
//       $('#linea_2').addClass('mostrar');
//     });
//     $('#inputMessage').click(function() {
//       $('#linea_3').addClass('mostrar');
//     });



});




