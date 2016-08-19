$(document).ready(function(){
    // BURGER E MENU
    $('.c-hamburger').click(function(e){
        e.preventDefault();
        if ($('.c-hamburger').attr('class') === 'c-hamburger c-hamburger--htx'){
            $('.c-hamburger').addClass('is-active');
            $('#menu').stop().fadeIn();
        } else {
            $('.c-hamburger').removeClass('is-active');
            $('#menu').stop().fadeOut();
        }
    });

    //SCROLL
    $.smoothScroll();
})