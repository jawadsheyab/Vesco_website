/*global $, WOW*/

$(function () {
    
    /*========================================================
                         ToolTip
    ==========================================================*/
    'use strict';
    $('[data-toggle="tooltip"]').tooltip();
    
    
    /*========================================================
                        SERVICES
    ==========================================================*/
    
    /* Animate On Scroll*/
    new WOW().init();
    
    /*========================================================
                            WORK
    ==========================================================*/
    
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    /*========================================================
                            Team Carousel
    =========================================================*/
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
    
    /*========================================================
                            Testimonials Carousel
    =========================================================*/
    $("#customers-testim").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
    
    
});

