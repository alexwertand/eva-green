$(document).ready(function() {

    function topSlider(default_slide) {
        var slides = $('.top-slider__img-wrap');
        var images = $('.top-slider__img');

        function createDot() {
            var control_dot = $('<div class="control__dot"></div>');

            slides.each(function () {
                $('.top-slider__controls-in').append(control_dot.clone());
            });
        }

        createDot();

        //rewrite with Promise later

        function createSlide(number) {
            images.eq(number).css({
                'background-image': 'url(' + slides.eq(number).attr('top-slider-href') + ')'
            });

            slides.eq(number).addClass('active').siblings().removeClass('active');
        }

        createSlide(default_slide);

        function detectActiveDot(number) {
            dots = $('.control__dot');
            
            dots.eq(number).addClass('active').siblings().removeClass('active');
        }

        detectActiveDot(default_slide);

        $('.top-slider__controls-in').on('click', '.control__dot', function() {
            createSlide(dots.index(this));
            detectActiveDot(dots.index(this));
        });
    }

    topSlider(0);
});