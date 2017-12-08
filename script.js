var expNano = (function(option) {
  var self = this,
      proto = expNano.prototype,

      container = option.container,
      $containerClone,
      bottomContainerClass = option.bottomContainerClass,
      input = option.input,
      inputLabel = option.inputLabel,
      toggleContainer = option.toggleContainer;
  
  function init() {
    $containerClone = $(container).clone();
    $containerClone.addClass(bottomContainerClass).appendTo('body');
    $(container).not(bottomContainerClass).show();
  }

  function toggleBar() {
    $(inputLabel).click();
  }

  function minifyOnScroll() {
    $(window).scroll(function(){
      // change 0(px) to toggle it further down
      if (($(this).scrollTop() > 0) && ($(input).is(':checked'))) {
        toggleBar();
      } 
    });
  }
  
  proto.setup = function() {
    init();
    minifyOnScroll();
  };
  return {
    setup: self.setup
  };
});

$(document).ready(function() {
  var expNanoBar = new expNano({
    container: '.expandNanoContainer',
    bottomContainerClass: 'bottom-fixed',
    input: '.expandNanoInput',
    inputLabel: '.expandNanoLabel',
    toggleContainer: '.bigNanoContainer'
  });
  expNanoBar.setup();
  
});