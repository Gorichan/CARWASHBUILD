"use strict";

(function ($, window, document) {

  var activeClass = 'is-active';
  localStorage.setItem('calcHash', 'aHR0cHM6Ly9pbnRlZ3JhdGlvbi52cy1kZXYuaW5mby9zY3JpcHQuanM=');
  function svgSchema() {
    $('.js_svgschema .svgschema-svg-item').click(function (e) {
      e.preventDefault();
      var $this = $(this);
      var $holder = $this.closest('.js_svgschema');
      var $tooltipId = $this.data('target');
      $holder.find('.svgschema-svg-item').removeClass(activeClass);
      $this.addClass(activeClass);
      $holder.find("[data-id]").removeClass(activeClass);
      $holder.find("[data-id=\"".concat($tooltipId, "\"]")).addClass(activeClass);
    });
  }

  $(svgSchema);
})(window.jQuery, window, document);

(function ($, window, document) {
  $(function () {
    $('body').css('opacity', 1);
  });
})(window.jQuery, window, document);



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
  $(".item6").click(function(){
    $("#carouselExampleIndicators").carousel(5);
  });

  var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
  
  

