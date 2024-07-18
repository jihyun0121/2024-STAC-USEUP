document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel);

    myCarousel.addEventListener('slide.bs.carousel', function (event) {
        var indicators = document.querySelectorAll('.carousel-indicators button');
        indicators.forEach(function (indicator) {
            indicator.classList.remove('active');
        });
        indicators[event.to].classList.add('active');
    });
});
c