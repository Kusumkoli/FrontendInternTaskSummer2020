/* ========================WRITE YOUR JS FROM HERE======================== */
(function($){
  var search_button = $('.open_form'),
      close_button  = $('.close'),
      input = $('.input');
  search_button.on('click',function(){
    $(this).parent().addClass('open');
    close_button.fadeIn(500);
    input.fadeIn(500);
  });
  
  close_button.on('click',function(){
    search_button.parent().removeClass('open');
    close_button.fadeOut(500);
    input.fadeOut(500);
  });
})(jQuery);