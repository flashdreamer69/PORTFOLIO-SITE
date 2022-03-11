$(document).ready(function() {
   // появление фона у шапки при скролле
$(window).scroll(function() {
   if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
   } else {
      $('.navbar').removeClass("sticky");
   }
   // ПОЯВЛЕНИЕ КНОПКИ при скролле вниз
   if(this.scrollY > 500) {
      $('.scroll-up').addClass("show");
   } else {
      $('.scroll-up').removeClass("show");
   }
});

// ВОЗВРАТ НАВЕРХ САЙТА ПРИ НАЖАТИИ КНОПКИ
$('.scroll-up').click(function(){
   $('html').animate({scrollTop: 0});
});

// КНОПКА ОТКРЫВАНИЯ МЕНЮ, переключатель
$('.menu-btn').click(function() {
   $('.navbar .menu').toggleClass("active");
   // смена значка меню на кнопку закрытие с помощью before
   $('.menu-btn i').toggleClass("active");
})
});

// АНИМАЦИЯ ПЕЧАТАНИЯ ТЕКСТА
var typed = new Typed (".typing", {
strings: ["HTML-верстальщик", "FRONTEND-разработчик"],
typeSpeed: 100,
backSpeed: 60,
loop: true
});

// ФИЛЬТР БЛОКОВ ПРОЕКТА
$('.filter-btn').click(function(){
   const value = $(this).attr('data-filter');
   if (value == 'all') {
      $('.project-box').show('1000');
   }
   else {
      $('.project-box').not('.' + value).hide('1000');
      $('.project-box').filter('.' + value).show('1000');
   }

});

$(".filter-btn").click(function() {
   $(this).addClass("active-filter").siblings().removeClass("active-filter");
});

AOS.init();


