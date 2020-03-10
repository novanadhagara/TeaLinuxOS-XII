$(document).ready(function () {
    let textCard = $('.card-text').html()
    $('.card-text').html(textCard.slice(0,50)+"...")

    $(".slider-area").slick({
      dots: true,
      // dotsClass: 'custom-dots',
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 1000,
      centerMode: true,
      prevArrow: "",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
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

    $('.toggle-input').change(function() {
      if($(this).is(':checked')) {
        $('.toggle-off').removeClass('active');
        $('.toggle-on').addClass('active');
      } else {
        $('.toggle-off').addClass('active');
        $('.toggle-on').removeClass('active');
      }
    });
});

