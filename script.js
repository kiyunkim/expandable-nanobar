var expNano = (function(option) {
  var self = this,
      proto = expNano.prototype,

      container = option.container,
      $containerClone,
      bottomContainerClass = option.bottomContainerClass,
      toggleTab = option.toggleTab,
      sliderAnimate = option.sliderAnimate,
      sliderWidth,
      toggleContainer = option.toggleContainer;
  
  function toggleFunc() {
    $(toggleTab).click(function() {
      $(this).next(toggleContainer).slideToggle(300);
    });
  }
  function init() {
    $containerClone = $(container).clone().addClass(bottomContainerClass);

    $containerClone.appendTo('body');
    $(container).not(bottomContainerClass).show();
  }

  function minifyOnScroll() {
    $(window).scroll(function(){
      /* change 0(px) to toggle it further down
      if (($(this).scrollTop() > 0) && ($(input).is(':checked'))) {
        toggleBar();
      } 
      */
    });
  }
  
  proto.setup = function() {
    init();
    toggleFunc();
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
    toggleTab: '.toggleTab',
    sliderAnimate: '.bigNanoAnimate',
    toggleContainer: '.bigNanoContainer'
  });
  expNanoBar.setup();
});