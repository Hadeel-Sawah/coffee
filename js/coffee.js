document.querySelectorAll('.imges-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-img').src = src;
    };
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      } ,
      breakpoints: {
      0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      },
      loop:true,
      grabCursor:true,
  });


 let bgColors= ["#42210b","#684432","#9c6d38","#443","#5c701b"]
 for( let i=0; i < bgColors.length;i++){
  $(".color-option ul li").eq(i).css("backgroundColor",bgColors[i])
 }
 $(".color-option ul li").click(function(){
  let currentBg =$(this).css("backgroundColor");
  $("*").css("color",currentBg);
  $(".heading ").css("color","transparent");
  $(".fa-quote-left,.fa-quote-right").css("color","#ccc")
  $(".swiper-pagination-bullet").css("backgroundColor",currentBg)
  $(".ups i").css("color","#443")
 });
 


 let currentWdth =$('.color-option').outerWidth();
 $('.color-box').css("left",-currentWdth);

 
 $('.color-box i').click(function(){
  if($('.color-box').css("left") == "0px"){
    $('.color-box').animate({"left":-currentWdth},1000)
  }
    else{
      $('.color-box').animate({"left":0},1000)
    }
 });
 $(document).ready(function(){
  $("#loding").fadeOut(2000,function(){
    $("body,html").css("overflow","visible");
    $("body,html").animate({scrollTop:0},10)
  })
 });

 let aboutOffset = $(".imges-slider").offset().top;
 $(window).scroll(function(){
 let upsOffset = $("#About").offset().top;

   if ($(window).scrollTop()> aboutOffset) {
    $(".ups").css({"opacity":"1",'transitionDuration':'3s'})
   }
   else{
    $(".ups").css({"opacity":"0",'transitionDuration':'2s'})
   }
 })
 $(".nav-link").click(function(){
  let currentHref = $(this).attr('href');
  let currentSet = $(currentHref).offset().top;
  $("body,html").animate({scrollTop:currentSet},2000)

 })
 $(".ups").click(function(){
  $("body,html").animate({scrollTop:0},2000)
 });
 $(".nav-link").focus(function(){
   $(this).css("color","#443");
   $(this).siblings().css("color","#0000008c");
 })
 