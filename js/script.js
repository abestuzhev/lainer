/**
 * Created by Alexey on 15.05.2017.
 */

$(document).ready(function () {

    $('.g-s__photo').on('click', function () {
        var imgPath = $(this).children('img').attr('src');
        $('.p-g-slides').find('li:first-child').css('display', 'block').children('img').attr('src', imgPath);
        $('.p-g-slides').find('li:first-child').siblings().css('display', 'none');
        $('.p-g-control__link').eq(0).addClass('active').siblings().removeClass('active');
        $('.p-g-control__link.active').children('img').css('width', '70px').attr('src', imgPath);
    })

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
        adaptiveHeight: true,
        mode: 'fade',
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

//    $('.gallery-slides').bxSlider({
//        pagerCustom: '.gallery-control',
//        nextSelector: '.g-s__next',
//        prevSelector: '.g-s__prev',
//        nextText: ' ',
//        prevText: ' ',
//        minSlides: 3,
//        maxSlides: 3,
//        moveSlides: 1,
//        onSliderLoad: function () {
//            $(".gallery .bx-pager.bx-default-pager").remove();
//        }
//    });

    $('.menu__link').on('click', function () {
        $('.menu__btn').removeClass('open');
        $('.menu').slideUp();
    });

    $('.scroll-btn').on('click', function (e) {
        e.preventDefault();
        var id = $(this).data('href');
        $('html,body').stop().animate({scrollTop: $(id).offset().top - 65}, 1000);
    });

    function popupOpen(elem, popup) {

        $(elem).on('click', function (e) {

            if (elem == '.f-t__scheme-link') {
                popup = $(this).data('popup');

                var korp = $(this).attr("data-korp");
                var romСount = $(this).attr("data-rom-count");
                var area = $(this).attr("data-area");
                var amount = $(this).attr("data-amount");
                var flor = $(this).attr("data-flor");
                var section = $(this).attr("data-section");
                var img = $(this).attr("data-img");
                $(".popup-scheme__params .korp").html(korp + " корпус");
                $(".popup-scheme__params .flor").html(flor + " этаж");
                $(".popup-scheme__params .section").html("Cекция " + section);
                $(".popup-scheme__params .area").html(area + " м<sup>2</sup>");
                var form = $('#scheme_form').clone();

                $('.replaced_form').html(form.html());
                $("input[name=phone]").mask("+7 (999) 999-99-99");

                $(".inp_korp").val(korp);
                $(".inp_rom-count").val(romСount);
                $(".inp_area").val(area);
                $(".inp_amount").val(amount);
                $(".inp_flor").val(flor);
                $(".inp_section").val(section);
                $(".popup-scheme__photo").attr("src", img);
            }
            if (popup == ".popup-calc")
            {
                var form = $('#calc_form').clone();

                $('.replaced_form_calc').html(form.html());
                $("input[name=phone]").mask("+7 (999) 999-99-99");

                name = $(this).attr("data-name");
                $(".popup-calc .popup__title span").html(name);
                $(".calc_form_bank").val(name);
            }

            e.preventDefault();
            $('.overlay').css('left', '0').stop().animate({opacity: 1}, 400,
                function () {
                    $(popup)
                        .css({'left': '0', 'top': '0', 'z-index': '999', 'position': 'relative'})
                        .stop().animate({opacity: 1}, 300);
                    $(popup).siblings().css('z-index', '0');
                });
            return false;
        });
    }

    popupOpen('.header__app-link, .header__app-btn', '.popup-app');
    popupOpen('.hypothec-item__btn', '.popup-calc');
    //popupOpen('.g-s__photo', '.popup-gallery');
    popupOpen('.f-t__scheme-link', '');

    $('.popup').on('click', function (e) {
        e.stopPropagation();
    });

    $('.popup__close, .overlay').click(function () {
        $('.popup')
            .stop().animate({opacity: 0}, 300,
            function () {
                $(this).css({'left': '-10000px', 'top': '-10000px', 'position': 'absolute'});
                $('.overlay').stop().animate({opacity: 0}, 400, function () {
                    $('.overlay').css('left', '-10000px');
                });
            }
        );
    });

    $('.filter__open-btn').on('click', function () {
        $(this).toggleClass('open');
        $('.filter').toggleClass('open');
    });

    $('.contacts__btn').on('click', function () {
        $(this).parent().toggleClass('open');
    });

    $('.f-f-select-btn').on('click', function () {
        var blocks = $('.f-f-select.open');
        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open');
        } else {
            blocks.removeClass('open');
            $(this).parent().addClass('open');
        }
    });

    $('.f-f-select-list span').on('click', function () {
        $(this)
            .parents('.f-f-select')
            .find('.f-f-select-btn__selected')
            .text($(this).text());

        $(this)
            .parents('.f-f-select')
            .find('.f-f-select-btn').trigger('click');
        $('.remove-all').css('display', 'inline-block');
        var _this = $(this);
        setChoseFilter(_this.parent().parent().attr("data-name"), $(this).attr("data-val"));
    });

    $('.filter-type').on('click', function () {
        $(this).toggleClass('checked');
        $('.remove-all').css('display', 'inline-block');
    });

    $('.scheme__item').on('click', function () {
        $(this).toggleClass('active');
        $('.remove-all').css('display', 'inline-block');
    });

//    $('.scheme__select-all').on('click', function () {
//        // LEEFT
//        if ($(this).hasClass('active')) {
//            $(this).parent().find('.scheme__item').removeClass('active');
//            $(this).removeClass('active');
//        } else {
//            $(this).parent().find('.scheme__item').addClass('active');
//            $(this).addClass('active');
//        }
//        $('.remove-all').css('display', 'inline-block');
//    });

    //new
    $('.filter input').on('change', function () {
        $('.remove-all').css('display', 'inline-block');
    });

    //new
    var types = $('.choice-type');
    types.on('click', function () {
        types.removeClass('selected');
        $(this).addClass('selected');

        var filterItems = $('.filter-item');
        // filterItems.css('display', 'none');
        // $('.filter-item_first').css('margin-bottom', '32px');

        if ($(this).index() == 0) {
            filterItems.removeClass('filter-item--active');
            filterItems.removeClass('filter-item--disabled');

        } else if ($(this).index() == 1) {
            //.filter-item_first
            $('.filter-item_second').removeClass('filter-item--active');
            $('.filter-item_first').addClass('filter-item--active');
            $('.filter-item_second').addClass('filter-item--disabled');
            $('.filter-item_first').removeClass('filter-item--disabled');

        } else {
            //.filter-item_second
            $('.filter-item_first').removeClass('filter-item--active');
            $('.filter-item_second').addClass('filter-item--active');
            $('.filter-item_second').removeClass('filter-item--disabled');
            $('.filter-item_first').addClass('filter-item--disabled');
        }
    });

    $('.choice-types__selected').on('click', function () {
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

    $(window).scroll(function () {
        top = $(this).scrollTop();

        if (top >= footerOfTop) {
            scrTop.css('position', 'static');
        } else {
            scrTop.css('position', 'fixed');
        }
    });

    $('.actions-slide').hover(function () {
        var self = this;
        if ($(this).find('img').index() != -1) {
            $('.actions__bg_new')
                .css({'background-image': 'url("' + $(this).find('img').attr('src') + '")'})
                .stop().fadeIn(300, function () {
                var selfi = this;
                $(selfi).css('display', 'none');
                $('.actions__bg_main').css({'background-image': 'url("' + $(self).find('img').attr('src') + '")'});

            });
        }
    });

    $('.menu__btn').on('click', function (e) {
        $('body').off('click');
        var self = this;
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.menu').slideUp();
        } else {
            $(this).addClass('open');
            $('.menu').slideDown();
            $('body').on('click', function () {
                $(self).removeClass('open');
                $('.menu').slideUp();
            });
        }
        e.stopPropagation();
        e.preventBubble();
        e.preventDefault();
        return false;
    });

    $('.menu').on('click', function (e) {
        e.stopPropagation();
    });

    var minSlides = 3,
        maxSlides = 3,
        moveSlides = 1;

    if ($(window).width() <= 700) {
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
    if ($(window).width() > 1350 && aSlides.length > 3) {
        initActionSlider();
    } else if ($(window).width() <= 1350 && aSlides.length > 2) {
        initActionSlider();
    } else if ($(window).width() <= 700 && aSlides.length > 1) {
        initActionSlider();
    } else {
        $('.a-s-control, .a-s__prev, .a-s__next').css('display', 'none');
    }


    $(".form_proposal, .form_calc, .form_order").submit(function () {
        var error = false;
        var _this = $(this);
        _this.find("input").each(function () {
            if ($(this).val() == "")
            {
                error = true;
                $(this).css("border", "1px solid red");
            } else
            {
                $(this).removeAttr("style");
            }
        });

        if (error == false)
        {
            $.ajax({
                type: "POST",
                url: _this.attr("action"),
                data: _this.serialize()
            }).done(function (msg) {
                _this.html(msg);
            });
        }
        return false;
    });

    //    table sort active
    $('.floor-table th').on('click', function () {
        if ($(this).hasClass('sort-active')) {
            $(this).children('i').toggleClass('icon-down');
        } else {
            $(this).siblings().removeClass('sort-active');
            $(this).children('i').removeClass('icon-down');
            $(this).toggleClass('sort-active');
        }
    });
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

    var markerImage = new google.maps.MarkerImage('/local/templates/landing/images/salesoffice.gif',
        new google.maps.Size(169, 105),
        new google.maps.Point(0, 0),
        new google.maps.Point(-10, 90));

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.79161, 37.525868),
        map: contMap,
        icon: markerImage,
        optimized: false
    });

    var markerImagePlane = new google.maps.MarkerImage('/local/templates/landing/images/plane.png',
        new google.maps.Size(47, 40), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(0, 0)); // offset point

    var markerPlane = new google.maps.Marker({
        position: new google.maps.LatLng(55.791551, 37.525908),
        map: contMap,
        icon: markerImagePlane
    });

    var markerImageBlock = new google.maps.MarkerImage('/local/templates/landing/images/block.png',
        new google.maps.Size(47, 40), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(20, 0)); // offset point

    var markerPlaneBlock = new google.maps.Marker({
        position: new google.maps.LatLng(55.791640, 37.52568),
        map: contMap,
        icon: markerImageBlock
    });

    var markerImageShowroom = new google.maps.MarkerImage('/local/templates/landing/images/showroom.gif',
        new google.maps.Size(169, 105), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(159, 105)); // offset point

    var markerS = new google.maps.Marker({
        position: new google.maps.LatLng(55.791591, 37.5255),
        map: contMap,
        icon: markerImageShowroom,
        optimized: false
    });

    var markerMetro1 = new google.maps.MarkerImage('/local/templates/landing/images/mark-1.png',
        new google.maps.Size(130, 50), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(0, 0)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.78876, 37.53285),
        map: contMap,
        icon: markerMetro1
    });

    var markerMetro2 = new google.maps.MarkerImage('/local/templates/landing/images/mark-2.png',
        new google.maps.Size(192, 51), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(22, 48)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.77753, 37.51924),
        map: contMap,
        icon: markerMetro2
    });

    var markerMetro3 = new google.maps.MarkerImage('/local/templates/landing/images/mark-3.png',
        new google.maps.Size(215, 51), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(22, 51)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.793052, 37.493205),
        map: contMap,
        icon: markerMetro3
    });

    var markerMetro4 = new google.maps.MarkerImage('/local/templates/landing/images/mark-4.png',
        new google.maps.Size(131, 51), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(22, 51)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.80553, 37.51516),
        map: contMap,
        icon: markerMetro4
    });

    var markerMetro5 = new google.maps.MarkerImage('/local/templates/landing/images/mark-5.png',
        new google.maps.Size(144, 51), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(22, 51)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.78911, 37.55959),
        map: contMap,
        icon: markerMetro5
    });

    var markerMetro6 = new google.maps.MarkerImage('/local/templates/landing/images/mark-6.png',
        new google.maps.Size(153, 51), //size
        new google.maps.Point(0, 0), //origin point
        new google.maps.Point(22, 51)); // offset point

    new google.maps.Marker({
        position: new google.maps.LatLng(55.800365, 37.532627),
        map: contMap,
        icon: markerMetro6
    });
}

$(document).ready(function () {
    initMap();
// LEEFT
    $('.scheme__item').addClass('active');
    $('.f-f-checkbox--room').prop('checked', true);
    $('.scheme__select-all').addClass('active');
    for (var i = 0; i < $('.scheme__item').length; i++) {
        arr = [$('.scheme__item').eq(i).data('name'), $('.scheme__item').eq(i).data('value')];
        window.choseFilter.push(arr);
    }
    for (var i = 0; i < $('.f-f-checkbox--room').length; i++) {
        arr = [$('.f-f-checkbox--room').eq(i).data('name'), $('.f-f-checkbox--room').eq(i).data('value')];
        window.choseFilter.push(arr);
    }
});
//initMap();



var chseSortName = "SORT";
var chseSortType = "ASC";
window.choseFilter = new Array();
// LEEFT
function setAll(event) {
    var target = $(event);

    if (!target.hasClass('active')) {
        for (var i = 0; i < target.parent().find('.scheme__item').length; i++) {
            var name = target.parent().find('.scheme__item').eq(i).data('name');
            var value = target.parent().find('.scheme__item').eq(i).data('value');
            arr = [name, value];
            target.parent().find('.scheme__item').eq(i).addClass('active');
            window.choseFilter.push(arr);
        }
        target.addClass('active');
    } else {
        var newArr = new Array;
        for (var i = 0; i < window.choseFilter.length; i++)
        {
            subarr = window.choseFilter[i];
            for (var g = 0; g < target.parent().find('.scheme__item').length; g++) {
                var name = target.parent().find('.scheme__item').eq(g).data('name');
                var value = target.parent().find('.scheme__item').eq(g).data('value');
                if (subarr[0] == name && subarr[1] == value) {
                    target.parent().find('.scheme__item').eq(g).removeClass('active');
                    delete window.choseFilter[i];
                }
            }

        }
        target.removeClass('active');
        newArr = window.choseFilter;
        window.choseFilter = array_values(newArr);
        //window.choseFilter = newArr
    }
    console.log(window.choseFilter);
    chose_load("");
}
function array_values(input) {	// Return all the values of an array
    var tmp_arr = new Array(), cnt = 0;

    for (key in input) {
        tmp_arr[cnt] = input[key];
        cnt++;
    }
    return tmp_arr;
}

function chose_load(url)
{
    url = (url != "") ? url + "&ajax=Y" : "ajax=Y";
    filterUrl = createFilterUrl();
    url = url + "&SORT=" + chseSortName + "&SORT_TYPE=" + chseSortType + "&" + filterUrl;
    $('#next_page_loading').show();
    $('table.floor-table tbody').fadeOutn(1500);
    $.ajax({
        type: "GET",
        url: "/ajax/chose.php",
        data: url
    }).done(function (res) {
        $('#next_page_loading').hide();
        $('table.floor-table tbody').fadeIn(1500);
        //$('table.floor-table').();
        $(".load_chose_ajax").html(res);
    });
}

function sort_chose_result(param)
{
    if (param == "")
        return false;
    if (chseSortName == param)
        chseSortType = (chseSortType == "ASC") ? "DESC" : "ASC";
    else
        chseSortType = "ASC";
    chseSortName = param;
    url = "?SORT=" + chseSortName + "&SORT_TYPE=" + chseSortType;
    chose_load("");
}

function setChoseFilterH(h, name, param)
{
    name = h + "_" + name;
    del = false;
    for (var i = 0; i < window.choseFilter.length; i++)
    {
        subarr = window.choseFilter[i];
        if (subarr[0] == name && subarr[1] == param)
        {
            del = true;
        }
    }

    if (del == true)
        delChoseFilterArr(name, param, "Y");
    else
    {
        arr = [name, param];
        window.choseFilter.push(arr);
    }

    chose_load("");
}

function setChoseFilter(name, param, no)
{
    delChoseFilter(name, "Y");
    if (no == false)
        name = "!" + name;
    arr = [name, param];
    window.choseFilter.push(arr);
    chose_load("");
}

function createFilterUrl()
{
    /*
     var ost = 0;
     var west = 0;
     for (var i = 0; i < window.choseFilter.length; i++)
     {
     subarr = window.choseFilter[i];
     if (subarr[0].search('west') != -1)
     west++;
     if (subarr[0].search('ost') != -1)
     ost++;
     }
     if (west == 0) {
     var arr = ['!PROPERTY_ProjectName', 'ЛАЙНЕР ЗАПАД'];
     window.choseFilter.push(arr);
     }
     if (ost == 0) {
     var arr = ['PROPERTY_ProjectName', 'ЛАЙНЕР ЗАПАД'];
     window.choseFilter.push(arr);
     }
     */
    var str = "";
    for (var i = 0; i < window.choseFilter.length; i++)
    {
        subarr = window.choseFilter[i];
        str = str + "&FILTER[" + subarr[0] + "][]=" + subarr[1];
    }

    return str.substr(1);
}

function delChoseFilterArr(name, val, inner)
{
    newChoseArr = new Array();
    for (var i = 0; i < window.choseFilter.length; i++)
    {
        subarr = window.choseFilter[i];
        console.log(name + "/" + val);
        if (subarr[0] == name && subarr[1] == val)
        {

        } else
        {
            newChoseArr.push(window.choseFilter[i]);
        }
    }

    window.choseFilter = newChoseArr;
    if (inner != "Y")
    {
        url = createFilterUrl();
        chose_load(url);
    }
}

function delChoseFilter(name, inner)
{
    newChoseArr = new Array();
    for (var i = 0; i < window.choseFilter.length; i++)
    {
        subarr = window.choseFilter[i];
        if (subarr[0] != name && subarr[0] != "!" + name)
            newChoseArr.push(window.choseFilter[i]);
    }

    window.choseFilter = newChoseArr;
    if (inner != "Y")
    {
        url = createFilterUrl();
        chose_load(url);
    }
}

function deleteAllFilter()
{
    window.choseFilter = new Array();
    chose_load("");
    $(".filter-types .filter-type").removeClass("checked");
    $(".filter-left .scheme span").removeClass("active");
    $(".f-f-select-btn.ot .f-f-select-btn__selected").html("01");
    $(".f-f-select-btn.do .f-f-select-btn__selected").html("15");
    //$(".choice-right .remove-all").removeAttr("style");
    $('.filter-item').removeClass('filter-item--disabled').removeClass('filter-item--active');
    $('.choice-type').removeClass('selected');
    $('.choice-type').eq(0).addClass('selected');
    $('.filter-floor input').prop('checked', false);
}