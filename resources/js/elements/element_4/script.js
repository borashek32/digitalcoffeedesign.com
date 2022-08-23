// slider one
let offset = 0;
const sliderLine = document.querySelector('.slider_1__line');

document.querySelector('.slider_1__button_next').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider_1__button_prev').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
});

// slider two
$(document).ready(function() {
    $('.next').click(function() {
        var currentImage = $('.img.current')
        var currentImageIndex = $('.img.current').index()
        var nextImageIndex = currentImageIndex + 1
        var nextImage = $('.img').eq(nextImageIndex)

        currentImage.fadeOut(1000)
        currentImage.removeClass('current')

        if(nextImageIndex == $('.img:last').index()+1) {
            $('.img').eq(0).fadeIn(1000)
            $('.img').eq(0).addClass('current')
        } else {
            nextImage.fadeIn(1000)
            nextImage.addClass('current')
        }
    })

    $('.prev').click(function() {
        var currentImage = $('.img.current')
        var currentImageIndex = $('.img.current').index()
        var prevImageIndex = currentImageIndex - 1
        var prevImage = $('.img').eq(prevImageIndex)

        currentImage.fadeOut(1000)
        currentImage.removeClass('current')
        prevImage.fadeIn(1000)
        prevImage.addClass('current')
    })
})