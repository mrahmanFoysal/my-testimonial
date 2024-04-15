

//   $(function(){

//   $(window).scroll(function(){
//     var scrolling = $(window).scrollTop();

// if(scrolling > 20){
//   $(".menu-bg").addClass("bg")
// }else{
//   $(".menu-bg").removeClass("bg")
// }


//   })


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
// $(function(){

//   $(window).scroll(function(){
//     var scrolling = $(window).scrollTop();

// if(scrolling > 20){
//   $(".menu-bg").addClass("bg")
// }else{
//   $(".menu-bg").removeClass("bg")
// }


//   })




$(function(){

  $(window).scroll(function(){
    var scrolling = $(window).scrollTop();

if(scrolling > 20){
  $(".menu-bg").addClass("bg")
}else{
  $(".menu-bg").removeClass("bg")
}


  })

 $('.banner-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false
 })





  $('.test-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    vertical:true,
    nextArrow:".next",
    prevArrow:".prev",
  
  });

})


$('.lolita-paragraph').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.lolita-man'
});
$('.lolita-man').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.lolita-paragraph',
  dots: false,
  centerMode: true,
  centerPadding: '0px',
  vertical:true,
  focusOnSelect: true
});





  $('.counter').counterUp({
    delay: 10,
    time: 1000
});


// $('.mark-slick').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   centerMode: true,
//   centerPadding:"0px",


// });


// })




// $('.mark-slick').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   centerMode: true,
//   centerPadding:"0px",
//   arrows:false


// });
