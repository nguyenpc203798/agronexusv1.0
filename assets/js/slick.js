$(document).ready(function(){
    $('.center').slick({
        arrows: false,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // Gán sự kiện cho nút Previous
    $('#prev-slide').click(function(){
        $('.center').slick('slickPrev');
    });

    // Gán sự kiện cho nút Next
    $('#next-slide').click(function(){
        $('.center').slick('slickNext');
    });

    // Cập nhật số trang khi slide thay đổi
    $('.center').on('afterChange', function(event, slick, currentSlide){
        var totalSlides = slick.slideCount;
        var slidesToShow = slick.options.slidesToShow;
        var currentPage = Math.ceil((currentSlide + 1) / slidesToShow);
        var totalPages = Math.ceil(totalSlides / slidesToShow);
        $('#page-number').text(currentPage + ' / ' + totalPages);
    });

    // Khởi tạo số trang ban đầu
    $('.center').on('init', function(event, slick){
        var totalSlides = slick.slideCount;
        var slidesToShow = slick.options.slidesToShow;
        var totalPages = Math.ceil(totalSlides / slidesToShow);
        $('#page-number').text('1 / ' + totalPages);
    });

    function equalHeight() {
        let maxHeight = 0;
        $('.slick-slide').each(function() {
            let thisHeight = $(this).outerHeight();
            if (thisHeight > maxHeight) {
                maxHeight = thisHeight;
            }
        });
        $('.slick-slide').css('height', maxHeight + 'px');
    }
    
    // Chạy sau khi Slick Carousel đã load xong
    $(document).ready(function() {
        $('.center').on('setPosition', function() {
            equalHeight();
        });
    });

    $('.industry').slick({
        dots: false,
        arrow: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
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
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});