$(document).ready(function(){


// Toggle the blurred class
function sidebar(){
  var trigger = $('#trigger, #close'),
  menu = $('.sidebar');

  trigger.on('click',function(){
   $(this).toggleClass('active');
   menu.toggleClass('closed');
   $('#blurrMe').toggleClass('blurred'); // just here
  });
}




 function deploy(){
  sidebar();
 }

 deploy();

});
