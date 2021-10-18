$('.header').sticky({
  topSpacing: 0,
  className: 'header-sticky'
})

const $hamburger = $('.menu-hamburger')
const $navbar = $('.header__navbar')
$hamburger.on('click', function () {
  if ($navbar.is(':hidden')) {
    $hamburger.addClass('is-active')
    $navbar.slideDown('fast')
  } else {
    $hamburger.removeClass('is-active')
    $navbar.slideUp('fast')
  }
})

let wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
})
wow.init()