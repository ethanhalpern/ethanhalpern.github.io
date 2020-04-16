$(function() {

  // Start of your code:



  $('.open-lightbox').click(function() {

    $('body').addClass('lightbox-is-open');

  });



  $('.close-lightbox').click(function() {

    $('body').removeClass('lightbox-is-open');

  });



 $('.open-lightbox').click(function() {
    console.log('i clicked it');
    $('body').addClass('lightbox-is-open');
  });


// end of special jquery function

});