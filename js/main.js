$(document).ready(function () {
   $(window).scroll(function () {
      if(this.scrollY>20){
         $('.navbar').addClass("sticky");
      }else{
         $('.navbar').removeClass("sticky");
      }
      if(this.scrollY>500){
         $('.scroll-up-btn').addClass("show");
      }else{
         $('.scroll-up-btn').removeClass("show");
      }
   }) ;

//slide up script
$('.scroll-up-btn').click(function () {
   $('html').animate({scrollTop: 0});
});



// ========toggle menu-btn script======
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
})

// =========toggle academic button============
$('#bsc').click(function () {
//    $('.academic .academic-content .bsc').slideToggle("slow"); 
   $('.academic .academic-content .bs').addClass('.bsc').slideToggle("slow"); 
});
$('#diploma').click(function () {
    $('.academic .academic-content .dip').addClass('.diploma').slideToggle("slow");  
 });
 $('#ssc').click(function () {
    $('.academic .academic-content .ss').addClass('.ssc').slideToggle("slow"); 
 });
 

});