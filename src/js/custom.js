$(document).ready(function() {

    // Gets the video src from the data-src on each button   
    var $videoSrc;  
    $('.btn-video').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
      
    // when the modal is opened autoplay it  
    $('#modalVideo').on('shown.bs.modal', function (e) {
        
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
        
    })
    
    // stop playing the youtube video when I close the modal
    $('#modalVideo').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 
});
    

    
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
// const swiperVideo = new Swiper(".swiper-video", {
//     // spaceBetween: 24,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//             slidesPerColumn: 1,
//         },
//         1024: {
//             slidesPerView: 3,
//             slidesPerGroup: 3,
//             slidesPerColumn: 1,
//         },
//     },
// });

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