/*
 * Open and show About page
 */

 console.log("körs");

$( window ).ready(function(){
  console.log($('#about-page'));
  $('#about-page').hide();

  var headerHeight = $('#header').outerHeight();

  $("#about-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#abut-page").offset().top - 75
    }, 1500);
  });

  $("#about-link").click(function() {
    $("#about-page").delay( 1550 ).slideDown( 1000 );
  });
})
