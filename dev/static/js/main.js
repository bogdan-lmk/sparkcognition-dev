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

var tabs = document.querySelectorAll('.testimonial-tab-link-home');
    buttonNextTab = document.querySelector('.testimonial-arrow-right-home');
    buttonPrevTab = document.querySelector('.testimonial-arrow-left-home');
    currentTab = 0;

    buttonPrevTab.onclick = function(){
      tabs[currentTab].className = 'testimonial-tab-link-home';
      currentTab = currentTab - 1;
      if (currentTab < 0){
        currentTab = tabs.length - 1;
      }
      tabs[currentTab].className = 'testimonial-tab-link-home testimonial-tab-link-home--active';
      $(tabs).eq(currentTab).trigger('click');
    }

    buttonNextTab.onclick = function(){
      tabs[currentTab].className = 'testimonial-tab-link-home';
      currentTab = currentTab + 1;
      if (currentTab >= tabs.length){
        currentTab = 0;
      }
      tabs[currentTab].className = 'testimonial-tab-link-home testimonial-tab-link-home--active';
        $(tabs).eq(currentTab).trigger('click');
    }


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


$('.video-controls-home').on('click', function (e) {
  var video = $('.testimonial-video-home', $(this).parent() );
  video.trigger('play');
});

var video = document.getElementsByClassName('testimonial-video-home');

$(video).on('play', function() {
  var playButton = $('.video-controls-home', $(this).parent() );
  playButton.fadeOut(400);
});

$(video).on('pause', function() {
  var playButton = $('.video-controls-home', $(this).parent() );
  playButton.fadeIn(400);
});
