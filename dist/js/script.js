//init slick
$('.brand-logo-single-area').slick({
    dots: false,
    infinite: true,
    //   speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


//counter 
$('.counterUp').each(function () {
    $(this).prop('counterUp',0).animate({
        counterUp: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});