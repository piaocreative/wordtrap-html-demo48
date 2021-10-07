$( document ).ready( function() {
    
    if ( $( '.logos' ).length ) {
        $( '.logos' ).slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 7,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });
    } 

    if ( $( '.products' ).length ) {
        $('.products').slick({
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:  $(".product-prev"),
            nextArrow: $(".product-next"),
        });
    }

    if ( $( '.teams' ).length ) {
        $('.teams').slick({
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:  $(".team-prev"),
            nextArrow: $(".team-next"),
        });
    }

    if ( $( '.testimonials' ).length ) {
        $('.testimonials').slick({
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:  $(".testimonial-prev"),
            nextArrow: $(".testimonial-next"),
        });
    }

    if ( $( '.posts' ).length ) {
        $('.posts').slick({
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:  $(".post-prev"),
            nextArrow: $(".post-next"),
            responsive: [
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        });
    }

} );