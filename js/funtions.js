
$(document).ready(function(){
var menu_Hamb = document.getElementById('menu-hamburguesa');
var menu = document.getElementById('menu');
var body = document.getElementById('home-page');
var id = document.getElementById('logo');
// var nav = document.getElementById('nav');

  menu_Hamb.addEventListener('click', function(){
    menu_Hamb.classList.toggle('mostrar');
    menu.classList.toggle('mostrar');
    body.classList.toggle('menu-open');
    id.classList.toggle('menu-open');


     // Le añadi los eventListener para cuando hagan click en el menu hambuerguesa se quede atento 
     // si hacemos otro click en el body del documento o en el logo grande del header o sea si hacemos click 
     // en otra parte que no sea en el menu. 
      body.addEventListener('click', function(){ 
        menu_Hamb.classList.remove('mostrar');
        menu.classList.remove('mostrar');
        body.classList.remove('menu-open');
        id.classList.remove('menu-open');
       });

      id.addEventListener('click', function(){ 
         menu_Hamb.classList.remove('mostrar');
         menu.classList.remove('mostrar');
         body.classList.remove('menu-open');
         id.classList.remove('menu-open');
       });

  });

  // cuando hagan clicl en la img de la manta los envio al index.html
  $('#manta').click(function(event) {
    /* Act on the event */
    window.location="http://macbooknaima.local:5757/index.html";
  });


// Al hacer scroll en la pagina
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  // console.log(wScroll);

    if (wScroll > $('.title-text').offset().top - $(window).height()) {
     $(".Paragraf_Text").addClass('mostrar');
  	 // $(".never_give_up").addClass('mostrar');
  }

  if (wScroll > $('#line').offset().top) {
     $(".never_give_up").addClass('mostrar');
  }

   if (wScroll > $('.div').offset().top) {
    $('.logo-manta').addClass('mini');
  }

  if(wScroll > $('.img_about').offset().top - $(window).height()){

    $('.img_about').css({'background-position':'center '+ (wScroll - $('.img_about').offset().top) +'px'});

    // var opacity = (wScroll - $('.img_about').offset().top + 400) / (wScroll / 5);

    // $('.img_about_int').css({'

  }

    if (wScroll > $('.img_about').offset().top){
    $('.fallow_links').addClass('mostrar');
  }

  // if (wScroll > $('.div').offset().top ) {
  // 	 $(".text").addClass('animated fadeInUp');
  // }

  
  // $(".logo").css({
  //   'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  // })

  // $('.back-bird').css({
  //   'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  // })

  // $('.fore-bird').css({
  //   'transform' : 'translate(0px, -'+ wScroll /30 +'%)'
  // })

  // if (wScroll > $('.clothes-pics').offset().top - $(window).height()) {

  //  $('.models').each(function(i){
    
  //   setTimeout(function(){
  //   $('.models').eq(i).addClass('is-showing')
  //   }, 150 * (i+1));
  //  });
  // }

});


// Opciones del slider sss.js
$('.slider').sss({
slideShow : true, // Set to false to prevent SSS from automatically animating.startOn : 0, // Slide to display first. Uses array notation (0 = first slide).transition : 400, // Length (in milliseconds) of the fade transition.speed : 3500, // Slideshow speed in milliseconds.showNav : true // Set to false to hide navigation arrows.
});
// 

// ******* seccionde codigo para hacer la animacion del gif para las flechas del carrusel de comentarios
// ******* que no son mas que gif guardados en las imagenes y que al hacer click sobre estas imagenes los gif se activan
// ******* o pasan de estar en el atributo data-alt para pasar al src y asi se activan 

//Funcion para obtener la ruta del gif que se encuentra en el atributo data-alt en las imagenes 
var getGif = function() {
var gif = [];
$('img').each(function() {
var data = $(this).data('alt');
gif.push(data);
});
return gif;
}
var gif = getGif();

// Preload all the GIF. Cargar los gif apecar que se encuentren en el data-alt de las imagenes 
var image = [];
 
$.each(gif, function(index) {
image[index] = new Image();
image[index].src = gif[index];
});


$('figure').on('click', function() { 
var $this = $(this),
$img = $this.children('img'),
$imgSrc = $img.attr('src');
$img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc); 
});

// ******* Fin del codigo para los gif del carrusel de comentarios


// ******* codigo para mostrar las fotos relacionadas a cada comentarios

$("#myCarousel").carousel();
$("#myCarousel").on('slid.bs.carousel', function () {

   var items = $('.fotos_carrusel');
   var a = items.length;
   var i = 0;
   for(i = 0; i < a; i++ ){
     items[i].classList.remove('show');
   }

    var foto_id = $("[class^='item active']").data("folder");
    // console.log(foto_id);

    var foto = document.getElementById(foto_id);
    foto.classList.add('show');
    });

});







