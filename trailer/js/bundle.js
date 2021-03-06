window.onscroll = function () {
  stickyHeader()
}
const header = document.querySelector('.header'),
  sticky = header.offsetTop
  navbar = document.querySelector('.header__navbar'),
  hamburger = document.querySelector('.menu-hamburger');

const stickyHeader = () =>
  window.pageYOffset > sticky
    ? header.classList.add('header--sticky')
    : header.classList.remove('header--sticky')

hamburger.addEventListener('click', () => {
  if (navbar.style.height === '0px') {
    navbar.style.height = `${navbar.scrollHeight}px`
    hamburger.classList.add('is-active');
  } else {
    navbar.style.height = `${navbar.scrollHeight}px`
    window.getComputedStyle(navbar, null).getPropertyValue('height')
    navbar.style.height = '0'
    hamburger.classList.remove('is-active');
  }
})
navbar.addEventListener('transitionend', () => {
  if (navbar.style.height !== '0px') {
    navbar.style.height = 'auto'
  }
})

new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated'
}).init()
