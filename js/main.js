
$(document).ready(function(){

    $('.testionial-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.news-slider-wrapper').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
        ]
    });
    //Progress Bar / Levels
    if($('.skill-per .progress-box .bar-fill').length){
        $(".progress-box .bar-fill").each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
            //$(this).parents('.progress-box').children('.percent').html(progressWidth+'%');
        });
    }
    // 6 CounterNumberChanger
    function CounterNumberChanger () {
        var timer = $('.counter');
        if(timer.length) {
            timer.appear(function () {
                timer.countTo();
            })
        }
    }
    // 7 stickyHeader
/*     function stickyHeader () {
        if ($('.stricky').length) {
            var strickyScrollPos = $('.stricky').next().offset().top;;
            if($(window).scrollTop() > strickyScrollPos) {
                $('.stricky').removeClass('fadeIn animated');
                $('.stricky').addClass('stricky-fixed fadeInDown animated');
            }
            else if($(this).scrollTop() <= strickyScrollPos) {
                $('.stricky').removeClass('stricky-fixed fadeInDown animated');
                $('.stricky').addClass('slideIn animated');
            }
        };
    } */
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'All'){
            $('.item-galarry').show(1000);
        }else{
            $('.item-galarry').not('.'+value).hide(1000);
            $('.item-galarry').filter('.'+value).show(1000);
        }
    });
    //add active class and Remove Active Class
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});
