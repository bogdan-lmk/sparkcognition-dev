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

var videoContainer = document.querySelector('testimonial-video-home-container');
var video = document.querySelector('testimonial-video-home');
var playPause = document.querySelector('btn.btn-video-player-home');


playPause.onclick = function(e) {
   if (video.paused || video.ended) video.play();
   else video.pause();
});
