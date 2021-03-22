$(window).on("load", function(){
    // Preloader
    $(".preloader").delay(500).fadeOut("slow");
});


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
    // Toggle Theme - Light & Dark
    function toggleTheme() {
        if (localStorage.getItem("app-theme") !== null) {
            if (localStorage.getItem("app-theme") !== "dark") {
                $("body").addClass("dark");
            } else {
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();

    $(".toggle-theme").on("click",function() {      
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("app-theme","light");
        }
        else {
            localStorage.setItem("app-theme","dark");
        }
        updateIcon();
    });
    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        } else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
});