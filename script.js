var expNano = (function(option) {
  var self = this,
      proto = expNano.prototype,

      container = option.container;
  
  proto.setup = function() {
    $(container).show();
  };
  return {
    setup: self.setup
  };
});

$(document).ready(function() {
  var expNanoBar = new expNano({
    container: '.expandNanoContainer'
  });
  expNanoBar.setup();
});
  