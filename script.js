$(document).ready( function() {
  $('.extender').mouseenter( function() {
    $(this).addClass('enlarge');
  });
  $('.extender').mouseleave( function() {
    $(this).removeClass('enlarge');
  });
});
