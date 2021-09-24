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
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        $(".product-prev").click(function(e) {
            e.preventDefault();
            $('.products').slick('slickPrev');
        })
        
        $(".product-next").click(function(e) {
            e.preventDefault();
            $('.products').slick('slickNext');
        })
    }

    if ( $( '.teams' ).length ) {
        $('.teams').slick({
            dots: false,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        $(".team-prev").click(function(e) {
            e.preventDefault();
            $('.teams').slick('slickPrev');
        })
        
        $(".team-next").click(function(e) {
            e.preventDefault();
            $('.teams').slick('slickNext');
        })
    }

    if ( $( '.testimonials' ).length ) {
        $('.testimonials').slick({
            dots: false,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        $(".testimonial-prev").click(function(e) {
            e.preventDefault();
            $('.testimonials').slick('slickPrev');
        })
        
        $(".testimonial-next").click(function(e) {
            e.preventDefault();
            $('.testimonials').slick('slickNext');
        })
    }

    if ( $( '.posts' ).length ) {
        $('.posts').slick({
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
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

        $(".post-prev").click(function(e) {
            e.preventDefault();
            $('.posts').slick('slickPrev');
        })
        
        $(".post-next").click(function(e) {
            e.preventDefault();
            $('.posts').slick('slickNext');
        })
    }

} );