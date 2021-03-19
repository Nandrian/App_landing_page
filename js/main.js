$(document).ready(function () {
    // Navbar shrink
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    }); 
    // Features carousel
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
            },
            600: {
                items:2,
            },
            1000: {
                items:3,
            }
        }
    });
    // Screenshot carousel
    $('.screenshots-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
            },
            600: {
                items:2,
            },
            1000: {
                items:4,
            }
        }
    });
    // Testimonials carousel
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
            },
            600: {
                items:2,
            },
            1000: {
                items:3,
            }
        }
    });
    // team carousel
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
            },
            600: {
                items:2,
            },
            1000: {
                items:3,
            }
        }
    });
    // Scrool It
    $.scrollIt ({
        topOffset: -50
    });
    // Navbar
    $(".navbar").on("click", function(){
        $('.navbar-collapse').collapse("hide");
    });
})