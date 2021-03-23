"use strict";

(function ($, window, document) {
  var activeClass = 'is-active';

  function svgSchema() {
    $('.js_svgschema .svgschema-svg-item').click(function (e) {
      e.preventDefault();
      var $this = $(this);
      var $holder = $this.closest('.js_svgschema');
      var $tooltip = $holder.find('.svgschema-tooltip');
      var $text = $this.data('text');
      $holder.find('.svgschema-svg-item').removeClass(activeClass);
      $this.addClass(activeClass);
      $tooltip.text($text);
    });
  }

  $(svgSchema);
})(window.jQuery, window, document);

(function ($, window, document) {
  $(function () {
    $('body').css('opacity', 1);
  });
})(window.jQuery, window, document);
//# sourceMappingURL=custom.js.map


/* $('.carousel').carousel({
    
  }) */

  $(".carousel-control-prev").click(function(){
    $(".carousel").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $(".carousel").carousel("next");
  });
  
  
  $(".item1").click(function(){
    $("#carouselExampleIndicators").carousel(0);
  });
  $(".item2").click(function(){
    $("#carouselExampleIndicators").carousel(1);
  });
  $(".item3").click(function(){
    $("#carouselExampleIndicators").carousel(2);
  });
  $(".item4").click(function(){
    $("#carouselExampleIndicators").carousel(3);
  });
  $(".item5").click(function(){
    $("#carouselExampleIndicators").carousel(4);
  });

  var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
  
  

