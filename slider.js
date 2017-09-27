$slideshowTEST = {
  context: false,
  tabs: false,
  timeout: 6500,      // time before next slide appears (in ms)
  slideSpeed: 1000,   // time it takes to slide in each slide (in ms)
  tabSpeed: 300,      // time it takes to slide in each slide (in ms) when clicking through tabs
  fx: 'scrollHorz',   // the slide effect to use
  next: '#next',
  prev: '#prev',



  init: function () {
    // set the context to help speed up selectors/improve performance
    this.context = $('#slideshowTEST');

    // set tabs to current hard coded navigation items
    this.tabs = $('ul.slides-navTEST li', this.context);

    // remove hard coded navigation items from DOM 
    // because they aren't hooked up to jQuery cycle
    this.tabs.remove();

    // prepare slideshowTEST and jQuery cycle tabs
    this.prepareslideshowTEST();
  },

  prepareslideshowTEST: function () {
    // initialise the jquery cycle plugin -
    // for information on the options set below go to: 
    // http://malsup.com/jquery/cycle/options.html
    $('div.slidesTEST > ul', $slideshowTEST.context).cycle({
      fx: $slideshowTEST.fx,
      timeout: $slideshowTEST.timeout,
      speed: $slideshowTEST.slideSpeed,
      fastOnEvent: $slideshowTEST.tabSpeed,
      pager: $('ul.slides-navTEST', $slideshowTEST.context),
      pagerAnchorBuilder: $slideshowTEST.prepareTabs,
      before: $slideshowTEST.activateTab,
      pauseOnPagerHover: true,
      pause: true
    });
  },

  prepareTabs: function (i, slide) {
    // return markup from hardcoded tabs for use as jQuery cycle tabs
    // (attaches necessary jQuery cycle events to tabs)
    return $slideshowTEST.tabs.eq(i);
  },

  activateTab: function (currentSlide, nextSlide) {
    // get the active tab
    var activeTab = $('a[href="#' + nextSlide.id + '"]', $slideshowTEST.context);

    // if there is an active tab
    if (activeTab.length) {
      // remove active styling from all other tabs
      $slideshowTEST.tabs.removeClass('on');

      // add active styling to active button
      activeTab.parent().addClass('on');
    }
  }
};


$(function () {
  // add a 'js' class to the body
  $('body').addClass('js');

  // initialise the slideshowTEST when the DOM is ready
  $slideshowTEST.init();
});

/*$("#slideshowTEST").touchwipe({
   wipeLeft: function() {
      $("#slideshowTEST").cycle("next");
   },
   wipeRight: function() {
      $("#slideshowTEST").cycle("prev");
   }
});*/
