$(document).ready(function(){
  
  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');
  var slideTimeout;
  // fullpage customization
  $('#fullpage').fullpage({
//    sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: false,
    slidesNavigation: false,
    css3: true,
    controlArrows: false,
      fitToSection: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection','fifthSection'],
    menu: '#menu',
    scrollBar:true,

    afterLoad: function(anchorLink, index) {
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
        slideTimeout = setInterval(function () {
        $.fn.fullpage.moveSlideRight();
        }, 4000);
        
            $('#ak1').show();
                    $('#ak2').hide();
                    $('#ak3').hide();
                    $('#ak4').hide();
            $('#ak1').css('background-color', '#fff');
            $('.textbox').css('z-index', '2000');
            $('#tr1').css('color', '#45b0d0');
            $('#btnClick1').css('color', '#45b0d0');
            $('#btnClick1').css('background-color', '#fff');
    },

    onLeave: function(index, nextIndex, direction){
        //leaving 1st section
        if(index == 1){
           $('.header').addClass('fixed');
        }
        //back to the 1st section
        if(nextIndex == 1){
			$('.header').removeClass('fixed');
        }
        clearInterval(slideTimeout);
    },
    
    afterResize: function(){
        windowsHeight = $(window).height();
    },

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      
          slideTimeout = setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 4000);
    },

    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      clearInterval(slideTimeout);
    } 
  }); 
       $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
});
$(document).on('click', '#moveTo1', function(){
  $.fn.fullpage.moveTo('firstSection', 0);
});
$(document).on('click', '#moveTo2', function(){
  $.fn.fullpage.moveTo('firstSection', 1);
});
$(document).on('click', '#moveTo3', function(){
  $.fn.fullpage.moveTo('firstSection', 2);
});

$('#btnClick1').click(click1);
$('#btnClick11').click(click1);
   function click1(){
    $('#ak1').show();
            $('#ak2').hide();
            $('#ak3').hide();
            $('#ak4').hide();
    $('#ak1').css('background-color', '#fff');
    $('.textbox').css('z-index', '2000');
    $('#tr1').css('color', '#45b0d0');
    $('#btnClick1').css('color', '#45b0d0');
    $('#btnClick1').css('background-color', '#fff');
    $('#btnClick11').css('background-color', '#45b0d0');
    $('#btnClick11').css('color', '#fff');
    $('#btnClick2').css('color', '#fff');
    $('#btnClick2').css('background-color', '#ba2d1d');
    $('#btnClick21').css('color', '#fff');
    $('#btnClick21').css('background-color', '#ba2d1d');
    $('#btnClick3').css('color', '#fff');
    $('#btnClick3').css('background-color', '#d8a732');
    $('#btnClick31').css('color', '#fff');
    $('#btnClick31').css('background-color', '#d8a732');
    $('#btnClick4').css('background-color', '#85bf83');
    $('#btnClick4').css('color', '#fff');
    $('#btnClick41').css('background-color', '#85bf83');
    $('#btnClick41').css('color', '#fff');

};
$('#btnClick2').click(click2);
$('#btnClick21').click(click2);     
    function click2(){
    $('#ak2').show();
            $('#ak1').hide();
            $('#ak3').hide();
            $('#ak4').hide();
    $('#ak2').css('background', '#fff');
    $('#tr11').css('color', '#ba2d1d');
    $('#btnClick2').css('color', '#ba2d1d');
    $('#btnClick2').css('background-color', '#fff');
    $('#btnClick21').css('color', '#ba2d1d');
    $('#btnClick21').css('background-color', '#fff');
    $('#btnClick1').css('background-color', '#45b0d0');
    $('#btnClick1').css('color', '#fff');
    $('#btnClick11').css('background-color', '#45b0d0');
    $('#btnClick11').css('color', '#fff');
    $('#btnClick3').css('color', '#fff');
    $('#btnClick3').css('background-color', '#d8a732');
    $('#btnClick31').css('color', '#fff');
    $('#btnClick31').css('background-color', '#d8a732');
    $('#btnClick4').css('background-color', '#85bf83');
    $('#btnClick4').css('color', '#fff');
    $('#btnClick41').css('background-color', '#85bf83');
    $('#btnClick41').css('color', '#fff');
};
$('#btnClick3').click(click3);
$('#btnClick31').click(click3);    
    function click3(){
    $('#ak3').show();
            $('#ak1').hide();
            $('#ak2').hide();
            $('#ak4').hide();
    $('#ak3').css('background', '#fff');
    $('#tr111').css('color', '#d8a732');
    $('#btnClick3').css('color', '#d8a732');
    $('#btnClick3').css('background-color', '#fff');
    $('#btnClick31').css('color', '#d8a732');
    $('#btnClick31').css('background-color', '#fff');
    $('#btnClick1').css('background-color', '#45b0d0');
    $('#btnClick1').css('color', '#fff');
    $('#btnClick11').css('background-color', '#45b0d0');
    $('#btnClick11').css('color', '#fff');
    $('#btnClick2').css('color', '#fff');
    $('#btnClick2').css('background-color', '#ba2d1d');
    $('#btnClick21').css('color', '#fff');
    $('#btnClick21').css('background-color', '#ba2d1d');
    $('#btnClick4').css('background-color', '#85bf83');
    $('#btnClick4').css('color', '#fff');
    $('#btnClick41').css('background-color', '#85bf83');
    $('#btnClick41').css('color', '#fff');
};
$('#btnClick4').click(click4);
$('#btnClick41').click(click4);    
    function click4(){
    $('#ak4').show();
            $('#ak1').hide();
            $('#ak2').hide();
            $('#ak3').hide();
    $('#ak4').css('background', '#fff');
    $('#tr1111').css('color', '#85bf83');
    $('#btnClick4').css('color', '#85bf83');
    $('#btnClick4').css('background-color', '#fff');
    $('#btnClick41').css('color', '#85bf83');
    $('#btnClick41').css('background-color', '#fff');
    $('#btnClick1').css('background-color', '#45b0d0');
    $('#btnClick1').css('color', '#fff');
    $('#btnClick11').css('background-color', '#45b0d0');
    $('#btnClick11').css('color', '#fff');
    $('#btnClick2').css('color', '#fff');
    $('#btnClick2').css('background-color', '#ba2d1d');
    $('#btnClick21').css('color', '#fff');
    $('#btnClick21').css('background-color', '#ba2d1d');
    $('#btnClick3').css('color', '#fff');
    $('#btnClick3').css('background-color', '#d8a732');
    $('#btnClick31').css('color', '#fff');
    $('#btnClick31').css('background-color', '#d8a732');
};
