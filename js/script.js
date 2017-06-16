/**
 * Created by Alexey on 15.05.2017.
 */

$(document).ready(function(){
    $("input[name=phone]").mask("+7 (999) 999-99-99");
    
    $('.m-s-slides').bxSlider({
        pagerCustom: '.m-s-control',
        nextSelector: '.m-s__next',
        prevSelector: '.m-s__prev',
        nextText: ' ',
        prevText: ' ',
        onSliderLoad: function () {
            $(".main-slider .bx-pager.bx-default-pager").remove();
        }
    });

    $('.p-g-slides').bxSlider({
        pagerCustom: '.p-g-control',
        nextSelector: '.p-g-slides__next',
        prevSelector: '.p-g-slides__prev',
        nextText: ' ',
        prevText: ' ',
        onSliderLoad: function () {
            $(".popup-gallery .bx-pager.bx-default-pager").remove();
        }
    });

    $('.logo-slides').bxSlider({
        mode: 'fade',
        nextSelector: '.logo-slides__next',
        prevSelector: '.logo-slides__prev',
        nextText: ' ',
        prevText: ' ',
        onSliderLoad: function () {
            $(".footer .bx-pager.bx-default-pager").remove();
        }
    });

    $('.gallery-slides').bxSlider({
        pagerCustom: '.gallery-control',
        nextSelector: '.g-s__next',
        prevSelector: '.g-s__prev',
        nextText: ' ',
        prevText: ' ',
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        onSliderLoad: function () {
            $(".gallery .bx-pager.bx-default-pager").remove();
        }
    });

    $('.menu__link').on('click', function(){
        $('.menu__btn').removeClass('open');
        $('.menu').slideUp();
    });

    $('.scroll-btn').on('click', function(e){
        e.preventDefault();
        var id = $(this).data('href');
        $('html,body').stop().animate({ scrollTop: $(id).offset().top - 65}, 1000);
    });

    function popupOpen(elem, popup){

        $(elem).on('click', function (e) {

            if(elem == '.f-t__scheme-link') {
                popup = $(this).data('popup');
            }
            
            e.preventDefault();
            $('.overlay').css('left', '0').stop().animate({opacity: 1}, 400,
                function () {
                    $(popup)
                        .css({'left': '0', 'top': '0', 'position': 'relative'})
                        .stop().animate({opacity: 1}, 300);
                });
            return false;
        });
    }

    popupOpen('.header__app-link, .header__app-btn', '.popup-app');
    popupOpen('.hypothec-item__btn', '.popup-calc');
    popupOpen('.g-s__photo', '.popup-gallery');
    popupOpen('.f-t__scheme-link', '');

    $('.popup').on('click', function(e){
        e.stopPropagation();
    });

    $('.popup__close, .overlay').click(function () {
        $('.popup')
            .stop().animate({opacity: 0}, 300,
            function () {
                $(this).css({'left': '-10000px', 'top': '-10000px', 'position': 'absolute'});
                $('.overlay').stop().animate({opacity: 0}, 400, function(){
                    $('.overlay').css('left', '-10000px');
                });
            }
        );
    });

    $('.filter__open-btn').on('click', function(){
        $(this).toggleClass('open');
        $('.filter').toggleClass('open');
    });

    $('.contacts__btn').on('click', function(){
        $(this).parent().toggleClass('open');
    });

    $('.f-f-select-btn').on('click', function(){
        var blocks = $('.f-f-select.open');
        if($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open');
        } else {
            blocks.removeClass('open');
            $(this).parent().addClass('open');
        }
    });

    $('.f-f-select-list span').on('click', function(){
        $(this)
            .parents('.f-f-select')
            .find('.f-f-select-btn__selected')
            .text($(this).text());

        $(this)
            .parents('.f-f-select')
            .find('.f-f-select-btn').trigger('click');
        $('.remove-all').css('display', 'inline-block');
    });

    $('.filter-type').on('click', function(){
        $(this).toggleClass('checked');
        $('.remove-all').css('display', 'inline-block');
    });

    $('.scheme__item').on('click', function(){
        $(this).toggleClass('active');
        $('.remove-all').css('display', 'inline-block');
    });

    $('.scheme__select-all').on('click', function(){
        $(this).parent().find('.scheme__item').addClass('active');
        $('.remove-all').css('display', 'inline-block');
    });

    //new
    $('.filter input').on('change', function(){
        $('.remove-all').css('display', 'inline-block');
    });

    //new
    var types = $('.choice-type');
    types.on('click', function(){
        types.removeClass('selected');
        $(this).addClass('selected');

        var filterItems = $('.filter-item');
        filterItems.css('display', 'none');
        $('.filter-item_first').css('margin-bottom', '32px');

        if($(this).index() == 0) {
            filterItems.css({'display': 'inline-block', 'width': '49%', 'margin-bottom':'0'});
            $('.filter-right').css({'display':'none', 'width': 'auto'});
            $('.filter-item_second .filter-left').css({
                'border-right-color': 'transparent'
            });
        } else if($(this).index() == 1) {
            $('.filter-item_first').css({'display': 'block', 'margin-bottom': '0','width':'100%'});
            $('.filter-right').css({
                'display': 'inline-block',
                'width': 'auto'
            });
        } else  {
            $('.filter-item_second').css({'display':'block', 'width':'100%'});

            $('.filter-right').css({
                'display': 'inline-block',
                'width': 'auto'
            });
            $('.filter-item_second .filter-left').css({
                'border-right-color': '#ffffff'
            });
        }
    });

    $('.choice-types__selected').on('click', function(){
        $(this).parent().toggleClass('open');
    });

    var top = $(this).scrollTop(),
        footerOfTop = $('.footer').offset().top - $(window).outerHeight() + 57,
        scrTop = $('.scroll-top');

    if (top >= footerOfTop) {
        scrTop.css('position', 'static');
    } else {
        scrTop.css('position', 'fixed');
    }

    $(window).scroll(function(){
        top = $(this).scrollTop();

        if (top >= footerOfTop) {
            scrTop.css('position', 'static');
        } else {
            scrTop.css('position', 'fixed');
        }
    });

    $('.actions-slide').hover(function(){
        var self = this;
        if($(this).find('img').index() != -1) {
            $('.actions__bg_new')
                .css({'background-image': 'url("' + $(this).find('img').attr('src') + '")'})
                .stop().fadeIn(300, function(){
                    var selfi = this;
                $(selfi).css('display', 'none');
                $('.actions__bg_main').css({'background-image': 'url("' + $(self).find('img').attr('src') + '")'});

            });
        }
    });

    $('.menu__btn').on('click', function(e){
        $('body').off('click');
        var self = this;
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.menu').slideUp();
        } else {
            $(this).addClass('open');
            $('.menu').slideDown();
            $('body').on('click', function(){
                $(self).removeClass('open');
                $('.menu').slideUp();
            });
        }
        e.stopPropagation();
        e.preventBubble();
        e.preventDefault();
        return false;
    });

    $('.menu').on('click', function(e){
        e.stopPropagation();
    });

    var minSlides = 3,
        maxSlides = 3,
        moveSlides = 1;

    if($(window).width() <= 700) {
        minSlides = 1;
        maxSlides = 1;
        moveSlides = 0;
    }

    function initActionSlider() {
        $('.actions-slides').bxSlider({
            pagerCustom: '.a-s-control',
            nextSelector: '.a-s__next',
            prevSelector: '.a-s__prev',
            nextText: ' ',
            prevText: ' ',
            minSlides: minSlides,
            maxSlides: maxSlides,
            moveSlides: moveSlides,
            onSliderLoad: function () {
                $(".actions .bx-pager.bx-default-pager").remove();
            }
        });
    }

    var aSlides = $('.actions-slide');
    if($(window).width() > 1350 && aSlides.length > 3) {
        initActionSlider();
    } else if($(window).width() <= 1350 && aSlides.length > 2) {
        initActionSlider();
    } else if($(window).width() <= 700 && aSlides.length > 1) {
        initActionSlider();
    } else {
        $('.a-s-control, .a-s__prev, .a-s__next').css('display', 'none');
    }
});

function initMap() {
    var center = [55.790797, 37.519927];
    var mapOptions = {
        center: new google.maps.LatLng(center[0], center[1]),
        zoom: 13,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        zoomControl: false,
        scaleControl: false

    };
    var contMap = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    var markerImage = new google.maps.MarkerImage('images/salesoffice.gif',
        new google.maps.Size(169, 105),
        new google.maps.Point(0, 0),
        new google.maps.Point(-10, 90));

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.79161,37.525868),
        map: contMap,
        icon: markerImage,
        optimized: false
    });

    var markerImagePlane = new google.maps.MarkerImage('images/plane.png',
        new google.maps.Size(47, 40), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(0, 0)); // offset point

    var markerPlane = new google.maps.Marker({
        position: new google.maps.LatLng(55.791551,37.525908),
        map: contMap,
        icon: markerImagePlane
    });

    var markerImageBlock= new google.maps.MarkerImage('images/block.png',
        new google.maps.Size(47, 40), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(20, 0)); // offset point

    var markerPlaneBlock = new google.maps.Marker({
        position: new google.maps.LatLng(55.791640,37.52568),
        map: contMap,
        icon: markerImageBlock
    });

    var markerImageShowroom = new google.maps.MarkerImage('images/showroom.gif',
        new google.maps.Size(169, 105), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(159, 105)); // offset point

    var markerS = new google.maps.Marker({
        position: new google.maps.LatLng(55.791591,37.5255),
        map: contMap,
        icon: markerImageShowroom,
        optimized: false
    });

    var markerMetro1= new google.maps.MarkerImage('images/mark-1.png',
        new google.maps.Size(130, 50), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(0, 0)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.78876,37.53285),
        map: contMap,
        icon: markerMetro1
    });

    var markerMetro2= new google.maps.MarkerImage('images/mark-2.png',
        new google.maps.Size(192, 51), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(22, 48)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.77753,37.51924),
        map: contMap,
        icon: markerMetro2
    });

    var markerMetro3= new google.maps.MarkerImage('images/mark-3.png',
        new google.maps.Size(215, 51), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(22, 51)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.793052,37.493205),
        map: contMap,
        icon: markerMetro3
    });

    var markerMetro4= new google.maps.MarkerImage('images/mark-4.png',
        new google.maps.Size(131, 51), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(22, 51)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.80553,37.51516),
        map: contMap,
        icon: markerMetro4
    });

    var markerMetro5= new google.maps.MarkerImage('images/mark-5.png',
        new google.maps.Size(144, 51), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(22, 51)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.78911,37.55959),
        map: contMap,
        icon: markerMetro5
    });

    var markerMetro6= new google.maps.MarkerImage('images/mark-6.png',
        new google.maps.Size(153, 51), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(22, 51)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.800365,37.532627),
        map: contMap,
        icon: markerMetro6
    });
}

initMap();