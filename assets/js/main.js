$(document).ready(function() {
    $('#fullpage').fullpage();
});

$(document).ready(function(){
  var width = $(window).width();
  if(width<992){
    $(".Co_Founder").slick({
      arrows: true,
      dots: false
    });
  }
  else {
    console.log("menu")
  }
})


// // $(".slick-prev button").click(function(){
// //   var attr = $(this).attr("data-img");
// //   $(".comment__block").removeClass("comment__block--active");
// //   $("#"+attr).addClass("comment__block--active");
// // })
// //
// // $(".slick-prev").click(function(e){
// //     e.preventDefault();
// //   $(".flex").removeClass("flex--end")
// //   $(".flex").addClass("flex--start")
// // })
// // $(".flex-e").click(function(e){
// //   e.preventDefault();
// //   $(".flex").removeClass("flex--start")
// //   $(".flex").addClass("flex--end")
// // })
