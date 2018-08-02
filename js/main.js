var navToggle = document.querySelector('.main-nav__toggle');
var header = document.querySelector('.header');
var svgBox1 = document.querySelector('.skills__icon--ability');
var svgBox2 = document.querySelector('.skills__icon--adaptive');
var svgBox3 = document.querySelector('.skills__icon--css');
var svg1 = svgBox1.querySelector('svg');
var svg2 = svgBox2.querySelector('svg');
var svg3 = svgBox3.querySelector('svg');
var headerLogoBlock = header.querySelector('.header__logo');
var headerLogo = headerLogoBlock.querySelector('svg');

header.classList.remove('header--no-js');

navToggle.addEventListener('click', function () {
  if (header.classList.contains('header--short')) {
    header.classList.remove('header--short');
    header.classList.add('header--full');
  } else {
    header.classList.remove('header--full');
    header.classList.add('header--short');
  }
});

svg1.addEventListener('mouseover', function () {
  svg1.classList.add('top-bottom');
});
svg1.addEventListener('mouseout', function () {
  svg1.classList.remove('top-bottom');
});
svg3.addEventListener('mouseover', function () {
  svg3.classList.add('top-bottom');
});
svg3.addEventListener('mouseout', function () {
  svg3.classList.remove('top-bottom');
});

svg2.addEventListener('mouseover', function () {
  svg2.classList.add('right-left');
});
svg2.addEventListener('mouseout', function () {
  svg2.classList.remove('right-left');
});

headerLogoBlock.addEventListener('mouseover', function () {
  headerLogo.classList.add('hi');
});
headerLogoBlock.addEventListener('mouseout', function () {
  headerLogo.classList.remove('hi');
});
