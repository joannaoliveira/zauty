$( document ).ready(function() {

    $(".solicitar-analise").on( "click", function() {
        $("#frmCotacao").get(0).scrollIntoView({behavior: 'smooth'});
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

});