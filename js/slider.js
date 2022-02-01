$(document).ready(function () {
    $(".catalog__body").slick({
        slidesToShow: 4,
        rows: 2,
        autoplay: true,
        touchThreshold: 8,
        pauseOnFocus: false,
        waitForAnimate: true,
        autoplaySpeed: 4000,
        speed: 1300,

        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    })
});