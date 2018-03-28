$(document).ready(function () {
  //  svg4everybody({});
});

$('.nav-link-header').click(function(e) {
    e.preventDefault();
    $('.nav-link-header').removeClass('nav-link-header--active');
    $(this).addClass('nav-link-header--active');
});
