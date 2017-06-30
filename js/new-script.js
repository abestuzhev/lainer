$(document).ready(function(){
    $('#lightgallery').lightGallery({
        selector: '.item'
    });


    $('.owl-carousel').owlCarousel({
        center: true,
        items:3,
        loop:true,
        autoWidth:true,
        mouseDrag: false,
        nav:true,
        navText: ['<span class="g-s__prev"></span>','<span class="g-s__next"></span>'],
        margin:10
    });

    //кнопка вверх
    var offset = 1600,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.scroll-top');
    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0
            }, scroll_top_duration
        );
    });

    //предзагрузка изображений
    function preloadImages() {
        for (var i = 0; i < arguments.length; i++) {
            new Image().src = arguments[i];
        }
    }

    preloadImages(
        "../images/schemes/scheme-1/item-hv-1.png",
        "../images/schemes/scheme-1/item-hv-1-mob.png",
        "../images/schemes/scheme-1/scheme.png",
        "../images/schemes/scheme-2/scheme.png"
    );
});