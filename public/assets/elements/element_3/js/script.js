/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************!*\
  !*** ./resources/js/elements/element_3/script.js ***!
  \***************************************************/
$(document).ready(function () {
  // show replies to questions
  $('.questions__question_1').click(function () {
    $('.questions__arrow_1').toggleClass('questions__arrow_transform');
    $('.questions__reply_1').toggle(300);
    return false;
  });
  $('.questions__question_2').click(function () {
    $('.questions__arrow_2').toggleClass('questions__arrow_transform');
    $('.questions__reply_2').toggle(300);
    return false;
  });
  $('.questions__question_3').click(function () {
    $('.questions__arrow_3').toggleClass('questions__arrow_transform');
    $('.questions__reply_3').toggle(300);
    return false;
  });
  $('.questions__question_4').click(function () {
    $('.questions__arrow_4').toggleClass('questions__arrow_transform');
    $('.questions__reply_4').toggle(300);
    return false;
  }); // toggle burger menu

  $('.header__burger').click(function () {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.menu__link').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
/******/ })()
;