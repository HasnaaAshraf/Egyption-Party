
/// <reference types="../@types/jquery" />


// $('.navbar-brand').on('click' , function(){

//   // console.log("hello");
//   const navWidth = $('.offcanvas').innerWidth()
//   $('.offcanvas.showing ').animate({'transform':'none'}, 1000);

//   console.log($('.offcanvas').css(('left')));
// })


$('.SingerH2').on('click' , function(){
    $(this).next().slideToggle(1000)
    // console.log("Hello");
    
})


// For count down:

$(function() {
    function getCounterData(obj) {
      var days = parseInt($('.e-m-days', obj).text());
      var hours = parseInt($('.e-m-hours', obj).text());
      var minutes = parseInt($('.e-m-minutes', obj).text());
      var seconds = parseInt($('.e-m-seconds', obj).text());
      return seconds - (minutes * 60) - (hours * 3600) - (days * 3600 * 24);
    }
  
    function setCounterData(s, obj) {
      var days = Math.floor(s / (3600 * 24));
      var hours = Math.floor((s % (60 * 60 * 24)) / (3600));
      var minutes = Math.floor((s % (60 * 60)) / 60);
      var seconds = Math.floor(s % 60);
  
      console.log(days, hours, minutes, seconds);
  
      $('.e-m-days', obj).html(days);
      $('.e-m-hours', obj).html(hours);
      $('.e-m-minutes', obj).html(minutes);
      $('.e-m-seconds', obj).html(seconds);
    }
  
    var count = getCounterData($(".counter"));
  
    var timer = setInterval(function() {
      count--;
      if (count == 0) {
        clearInterval(timer);
        return;
      }
      setCounterData(count, $(".counter"));
    }, 1000);
  });

  //

  $(window).ready( function(){

    $('.loadingScreen').fadeOut(1000)
    $('body').css('overflow','visible')
  }) 

  $('textarea').on('input', function(){
    const textAreaLength = $('textarea').val().length;
    const remainCalc = 100 - textAreaLength;
    $('#chars').html(remainCalc);
    console.log(remainCalc);
    if (remainCalc == 0) {
      $('textarea').prop('disabled', true);
      $('#chars').html("Can't Add More Than 100")
  }else{
    $('textarea').prop('disabled', false);
  }
})