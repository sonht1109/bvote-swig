$(document).ready(function () {
    new WOW().init();

    AOS.init({
        once: true,
        offset: 0,
        easing: 'ease-in-out-cubic',
        duration: "300",
    });

    if ($(this).scrollTop() >= 42) {
        $(".header-nav").addClass("scrolled");
    } else {
        $(".header-nav").removeClass("scrolled");
    }
    $(window).on("load", function () {
        if ($(this).scrollTop() >= 42) {
            $(".header-nav").addClass("scrolled");
        } else {
            $(".header-nav").removeClass("scrolled");

        }
    });
    $(document).scroll(function () {
        if ($(this).scrollTop() >= $("#main").offset().top) {
            $(".back-top").addClass("active");

        } else {
            $(".back-top").removeClass("active");

        }
        if ($(this).scrollTop() >= 42) {
            $("#header").addClass("scrolled");
        } else {
            $("#header").removeClass("scrolled");
        }
    });
    $(".back-top").on("click", function () {
        $(".back-top").removeClass("active");
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    $('.menu .toggle-search').on('click', function () {
        if ($('.toggle-search i').hasClass('fa-times')) {
            $('.text-input').slideUp()
            $(".toggle-search i").removeClass('fa-times').addClass('fa-search')
        }
        else {
            $('.text-input').slideDown()
            $(".toggle-search i").removeClass('fa-search').addClass('fa-times')
        }
    })

    $(".structure-icon").mouseenter((e) => {
        $('.structure-detail').removeClass().addClass('structure-detail')
        let className = $(e.target).attr('class').split(' ')[0]
        let title = $(e.target).attr('data-title')
        $('.structure-detail').addClass(className)
        $('.structure-detail .detail-title').text(title)
        $('.structure-text').addClass('disappear')
    }).mouseleave(() => {
        $('.structure-detail').removeClass().addClass('structure-detail')
        $('.structure-text').removeClass('disappear')
    })

    $('#bs-slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    });

    var initProjectSlide = () => {
        $('#project-slide').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });
    }

    var destroyProjectSlide = () => {
        $('#project-slide').slick('unslick')
    }
    
    $('#customer-slide').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $('li.control-list__item').click(function(){
        if($(this).attr('tab-show') === '#tab2'){
            let isFirstInitAttr = $("#project-slide").attr('data-first-init')
            console.log(isFirstInitAttr)
            if(isFirstInitAttr === 'true'){
                destroyProjectSlide();
            //     console.log('first init')
                $("#project-slide").attr('data-first-init', 'false');
                initProjectSlide();
            }
        }
    })

    initProjectSlide()
});
