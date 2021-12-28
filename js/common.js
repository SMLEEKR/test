$(function () {

    $('.lnb-btn').click(function () {
        $(this).toggleClass('active')
        $('.lnb-section').fadeToggle();
    })


    $('.intro-slide-wrapper').slick({
        dots: false,
        arrows: true, //화살표 사용여부
        prevArrow: $('.intro-btn.prev-btn'), //이전 화살표
        nextArrow: $('.intro-btn.next-btn'), //다음 화살표
        speed: 900, // 슬라이드 속도
        fade: true,
        autoplay: false,
        autoplaySpeed: 3000, //자동넘김 속도(1000=1초)
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    });
  
    // $('.right-inner').slick({
    //     dots: true,
    //     arrows: true, //화살표 사용여부
    //     prevArrow: $('.concept-btn.prev'), //이전 화살표
    //     nextArrow: $('.concept-btn.next'), //다음 화살표
    //     speed: 900, // 슬라이드 속도
    //     fade: false,
    //     autoplaySpeed: 1000, //자동넘김 속도(1000=1초)
    //     centerPadding: '0%', //센터 모드 시 여백
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    // });
    //
    // // 넥스트 클릭 이동과 동일
    // // $('.right-inner').slick('slickNext');
    //
    // $('.concept-contents .right-inner').on({
    //     init: function (event, slick) {
    //
    //     },
    //     beforeChange: function (event, slick, currentSlide, nextSlide) {
    //         $('.con-desc').removeClass('active');
    //         $('.slider-list li').removeClass('active');
    //         starList();
    //     },
    //     afterChange: function (event, slick, currentSlide, nextSlide) {
    //         starList();
    //     }
    // });
    //
    // // $('.concept-contents .right-inner')
    // //     .on('init', function(event, slick){
    // //
    // //     })
    // //     .on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // //
    // //     })
    // //     .on('afterChange', function(event, slick, currentSlide, nextSlide){
    // //
    // //     });
    //
    // function list01(){
    //     $('.con-desc.c1').addClass('active');
    //     $('.slider-list .list1').addClass('active');
    //     // $('.slider-list .list1').addClass('active').siblings().removeClass('active');
    // }
    // function list02(){
    //     $('.con-desc.c2').addClass('active');
    //     $('.slider-list .list2').addClass('active');
    //     // .siblings().removeClass('active');
    // }
    // function list03(){
    //     $('.con-desc.c3').addClass('active');
    //     $('.slider-list .list3').addClass('active');
    //     // .siblings().removeClass('active');
    // }
    // function list04(){
    //     $('.con-desc.c4').addClass('active');
    //     $('.slider-list .list4').addClass('active');
    //     // .siblings().removeClass('active');
    // }
    // function list05(){
    //     $('.con-desc.c5').addClass('active');
    //     $('.slider-list .list5').addClass('active');
    //     // .siblings().removeClass('active')
    // }
    // function list06(){
    //     $('.con-desc.c6').addClass('active');
    //     $('.slider-list .list6').addClass('active');
    //     // .siblings().removeClass('active');
    // }
    //
    // function starList(){
    //     if($('#slick-slide10').hasClass('slick-active')){
    //         list01();
    //     }
    //     if($('#slick-slide11').hasClass('slick-active')){
    //         list02();
    //     }
    //     if($('#slick-slide12').hasClass('slick-active')){
    //         list03();
    //     }
    //     if($('#slick-slide13').hasClass('slick-active')){
    //         list04();
    //     }
    //     if($('#slick-slide14').hasClass('slick-active')){
    //         list05();
    //     }
    //     if($('#slick-slide15').hasClass('slick-active')){
    //         list06();
    //     }
    // }
    //
    //
    //
    // $('.slider-list .list1').click(function () {
    //     $("#slick-slide-control10").trigger("click");
    // });
    // $('.slider-list .list2').click(function () {
    //     $("#slick-slide-control11").trigger("click");
    // });
    // $('.slider-list .list3').click(function () {
    //     $("#slick-slide-control12").trigger("click");
    // });
    // $('.slider-list .list4').click(function () {
    //     $("#slick-slide-control13").trigger("click");
    // });
    // $('.slider-list .list5').click(function () {
    //     $("#slick-slide-control14").trigger("click");
    // });
    // $('.slider-list .list6').click(function () {
    //     $("#slick-slide-control15").trigger("click");
    // });
    // $('.slider-list li').click(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
});


$(function () {

    // let sec1YOffset = $('.intro').offset().bottom;
    let sec2YOffset = $('.small-banner').offset().top;
    let sec3YOffset = $('.trip-concept').offset().top;
    let sec4YOffset = $('.concept-sight').offset().top;
    let sec5YOffset = $('.trip-about').offset().top;
    let sec6YOffset = $('.news').offset().top;

    // console.log();
    // console.log(sec2YOffset);
    // console.log(sec5YOffset);


    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        let conceptValue = (scrollTop * 1.1) - sec4YOffset;
        let fashionValue = scrollTop - sec3YOffset;
        let videoWidth = scrollTop - (sec3YOffset * 0.7);


        console.log(sec4YOffset);

        $('.posNum').text(scrollTop);


        
        // const circleValue = $('.concept-sight').offset().top - 300;
        
        // const circleScroll = scrollTop - circleValue;
        // console.log(circleValue);

        // if (scrollTop >= sec2YOffset && scrollTop <=sec3YOffset)
        if (scrollTop >= 395) {
            $('.banner-wrap h2, p').addClass('active');
        } else {
            $('.banner-wrap h2, p').removeClass('active');
        }

        if (scrollTop >= 650) {
            $('.card img').addClass('active');
        } else {
            $('.card img').removeClass('active');
        }

        if (scrollTop >= sec4YOffset * 0.9) {
            $('.sight-wrap h2, p').addClass('active');
        } else {
            $('.sight-wrap h2, p').removeClass('active');
        }


        if (scrollTop >= sec4YOffset && scrollTop <= sec4YOffset * 1.4) {
            // $('.sight-img').addClass('active');
            $('.sight-img').css('clipPath', `circle(${(conceptValue * 0.45)}px)`);
        }

        if (scrollTop >= sec6YOffset + $('.header').height() ) {
            $('.footer').addClass('active');
        } else {
            $('.footer').removeClass('active');
        }


        if (scrollTop >= sec3YOffset - $('.header').height() && scrollTop < sec4YOffset) {
            $('.concept-video').css('position','fixed');

            // $('.contents-subject').css('position','fixed');
            $('.contents-subject').addClass('active');

            $('.fashion .fashion-desc').css('transform', `translateY(-${ fashionValue * 0.9 }px)`);
            $('.fashion-video').css('transform', `translateY(-${ fashionValue }px)`);

            $('.nature .nature-desc').css('transform', `translateY(-${ fashionValue * 0.85 }px)`);
            $('.nature-img').css('transform', `translateY(-${ fashionValue * 0.9}px)`);

            $('.freedom-desc').css('transform', `translateY(-${ fashionValue * 0.75 }px)`);
            $('.freedom-img').css('transform', `translateY(-${ fashionValue * 0.8 }px)`);

            $('.design .design-desc').css('transform', `translateY(-${ fashionValue * 0.65 }px)`);
            $('.design-img').css('transform', `translateY(-${ fashionValue * 0.7 }px)`);

            $('.color .color-desc').css('transform', `translateY(-${ fashionValue * 0.55 }px)`);
            $('.color-img').css('transform', `translateY(-${ fashionValue * 0.6 }px)`);

            $('.convenience .convenience-desc').css('transform', `translateY(-${ fashionValue * 0.45 }px)`);
            $('.convenience-img').css('transform', `translateY(-${ fashionValue * 0.5 }px)`);

            $('.joy .joy-desc').css('transform', `translateY(-${ fashionValue * 0.35 }px)`);
            $('.joy-img').css('transform', `translateY(-${ fashionValue * 0.4 }px)`);

        } else {
            $('.concept-video').css('position','absolute');

            // $('.contents-subject').css('position','absolute');
            $('.contents-subject').removeClass('active');
        }

        if (scrollTop > sec3YOffset - window.innerHeight * 0.5) {
            $('.concept-video div').css('width', `${videoWidth / 2.85}%` );
            if ($('.concept-video').style('width') >= 100) {

            }
        } else {
            $('.concept-video div').css('width', `51%` );

        }

    });


});
