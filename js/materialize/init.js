(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider();
    $(".dropdown-trigger").dropdown({
      hover: true, constrainWidth: false 
    });
    $('.tooltipped').tooltip({
      html:   '<h6>Elaborado por:</h6><ul><li><a class="white-text">Marco Antonio Acevedo Escudero</a></li><li><a class="white-text">@mqrcoann</a></li></ul>'
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

// desplazamiento animado en las anclas
$(function(){
  $('a[href*=noticias]').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
              var targetOffset = $target.offset().top;
              $('html,body').animate({scrollTop: targetOffset}, 1000);
              return false;
         }
    }
});
});
