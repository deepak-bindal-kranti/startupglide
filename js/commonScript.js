  $(document).ready(function() {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.header-page').addClass('menu-bg');
            } else {
                $('.header-page').removeClass('menu-bg');
            }
        });
        
    });

  $(document).ready(function() {
  	 $('.team_footer').find('.footer').css('background-color' , 'red!important');

  /*	$("#hide").click(function(){
  		alert("hello");
  	});*/
});
  

