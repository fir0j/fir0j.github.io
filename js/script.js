// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  }

};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});


// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

//owl carousel plugin

$('.owl-carousel').owlCarousel({
    loop:false,
    items:10,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:3
        },
        968:{
            items:4
        }
    }
})


var skillsTopOffset = $(".technicalSkills").offset().top;

$(window).scroll(function(){
  var windowHeight = $(window).height();
  if(window.pageYOffset > skillsTopOffset-$(window).height()+200){
    // jquery easypiechart plugin
    $('.chart').easyPieChart({
                //your options goes here
                easing: 'easeInOut',
                barColor: '#00344e',
                // trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                  $(this.el).find('.percent').text(Math.round(percent));
                }
            });
  }

});

// jquery.countup.js and jquery.waypoints.js

jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
