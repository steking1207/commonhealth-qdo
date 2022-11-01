const swiperKv = new Swiper(".swiper-kv", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    loop: true,
});
const swiperProd = new Swiper(".swiper-product", {
    // spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerColumn: 4,
            slidesPerColumnFill: 'row',
            watchOverflow: true,
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            slidesPerColumn: 1,
        },
    },
});
const swiperClass = new Swiper(".swiper-class", {
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerColumn: 1,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerColumn: 1,
        },
    },
});

$(function () {

    $('.btn-anchor').click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -120
    }, 500);
		return false;
	});

    // js:ofi
    objectFitImages('img.of-cover');
    $('img.of-cover').css('opacity',1);

});