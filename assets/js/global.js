$( document ).ready(function() {

    $(".quem-somos").on( "click", function() {
        $("#solucao").get(0).scrollIntoView({behavior: 'smooth'});
        return false;
    });

    $(".funcionalidades").on( "click", function() {
        $("#descubra-funcoes").get(0).scrollIntoView({behavior: 'smooth'});
        return false;
    });

    $(".comecar-agora").on( "click", function() {
        $("#nossos-planos").get(0).scrollIntoView({behavior: 'smooth'});
        return false;
    });

    $(".veja-planos").on( "click", function() {
        $("#nossos-planos").get(0).scrollIntoView({behavior: 'smooth'});
        return false;
    });

    $('.segmentos').slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
            }
            }
        ]
    });

    $('.depoimentos').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
            }
            }
        ]
    });

    $('.nossos-planos').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    initialSlide: 1,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
            }
            }
        ]
    });

});