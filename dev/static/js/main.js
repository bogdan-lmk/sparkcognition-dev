$(document).ready(function () {
  //  svg4everybody({});
});

$('.nav-link-header').click(function(e) {
    e.preventDefault();
    //$('.nav-link-header').removeClass('nav-link-header--active');
    //$(this).addClass('nav-link-header--active');
    $(this).toggleClass('nav-link-header--active'); // http://api.jquery.com/toggleclass/
});

$('.testimonials-carousel').slick({
  centerMode: true,
  slideToShow: 3,
  variableWidth: true,
  prevArrow: $('.testimonial-arrow-left'),
  nextArrow: $('.testimonial-arrow-right'),
});

$('[data-tab]').on('click', function (e) {
  $(this).addClass('testimonial-tab-link-home--active').siblings('[data-tab]').removeClass('testimonial-tab-link-home--active')
  $(this).siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active')
  e.preventDefault()
  $(this).trigger('tabChanged')
})
$('[data-tab]').on('tabChanged', function(){
  console.log('changed', $(this).index(),  $(this).index() -1 )
  var prev = $(this).index() - 1;


});


var video = document.getElementsByClassName('testimonial-video-home');
var playButton = document.getElementsByClassName('video-controls-home');


$(video).on('play', function() {
  $('.btn-video-player-home').fadeOut(400);
  $('.video-controls-home').fadeOut(400);
});

$(video).on('pause', function() {
  //Actions when video pause selected
  $('.btn-video-player-home').fadeIn(400);
  $('.video-controls-home').fadeIn(400);
});
