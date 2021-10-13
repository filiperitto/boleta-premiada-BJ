// Simulate hidden banner-ad
$('.banner-ad').css('display', '');

// Open and Close menu
$('.btn-brj-menu').on('click', function () {
    $('body').toggleClass('menubrj-open');

    if ($('body').hasClass('menubrj-open')) {
        $('body').append(
            $('<div>').addClass('menubrj-overlay')
        );
        $('.menubrj-overlay').fadeIn(200);

        return;
    }

    $('.menubrj-overlay').fadeOut(200, function () {
        $(this).remove();
    });
});

// Area daytrade home
$('.slidedaytrade').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// Area podcast-container home
$('.originals-box__wrap').attr('dir', 'ltr');
$('.originals-box__wrap').slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    rtl: false,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='https://i.imgur.com/tmFzyva.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='https://i.imgur.com/QhoA4Sg.png'>"
});

$("#modalSearch").on('show.bs.modal', () => {
  $('body').addClass('modal-open--white')
});

$("#modalSearch").on('hide.bs.modal', () => {
  $('body').removeClass('modal-open--white')
});

// Página mercados
// $('.slidecoins').slick({
//   slidesToShow: 1,
//   infinite: false,
//   arrows: false,
//   dots: true,
// });
