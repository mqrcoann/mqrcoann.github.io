(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider();
    $(".dropdown-trigger").dropdown({
      hover: false, constrainWidth: false 
    });
    $('.tooltipped').tooltip({
      html:   '<h6>Elaborado por:</h6><ul><li><a class="white-text">Marco Antonio Acevedo Escudero</a></li><li><a class="white-text">@mqrcoann</a></li></ul>'
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
