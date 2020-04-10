$(function() {
  // Your jQuery code goes inside this special $(function) call
  
  console.log("hi from 5-scrolling-events.js");
  
  var position = $(window).scrollTop();
  
  $( "p" ).clone().appendTo( document.body );
  $( "p" ).clone().appendTo( document.body );
  
  $(window).scroll(function() {
    $( "p" ).css( "color", "dodgerblue");
  });  
  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
      console.log('scrollDown');
      $('body').css("background-color", "pink");
    } else {
      console.log('scrollUp');
      $('body').css("background", "dodgerblue");
    } position = scroll;
    var documentHeight = $(document).height();
var windowHeight = $(window).height();

$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop();

});
  });
});

