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
        margin:10,
        responsive:{
            600:{
                items:2
            }
        }
    });
});