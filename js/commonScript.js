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
  


$('.dropdown-content > a').click(function(){
  $('#menu_tab').modal('hide')
})
   





$(document).ready(function () {
    $(".product-menu").mouseenter(function () {
        $(".product-menu-block").css("display", "block");
    });
    $(".product-menu-block, .product-menu").mouseleave(function () {
        $(".product-menu-block").css("display", "none");
    });
    $(".product-menu-block li a").click(function () {
        $(".product-menu-block").css("display", "none");
    });
    $(".product-menu-p").click(function () {
        $(".product-menu-block").css("display", "block");
    });
   
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $(".scroll").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});