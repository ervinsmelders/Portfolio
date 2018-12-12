$(window).scroll(function(){
    if ($(document).scrollTop()>50){
        $("nav").addClass("shrink");
}
else{
    $("nav").removeClass("shrink");
}
});




$(document).ready(function(){
    $("#myModal").on("hidden.bs.modal",function(){
      $("#iframeYoutube").attr("src","#");
    })
  })
  
  function changeVideo(vId){
    var iframe=document.getElementById("iframeYoutube");
    iframe.src="https://www.youtube.com/embed/"+vId;
  
    $("#myModal").modal("show");
  }







  $('nav-item').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top-28;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})

$(window).scroll(function() {

    if ($(this).scrollTop() < $('section[data-anchor="intro"]').offset().top) {
        $('.nav-item').removeClass('active1');
    }

    if ($(this).scrollTop() >= $('section[data-anchor="intro"]').offset().top) {
        $('.nav-item').removeClass('active1');
        $('.nav-item:eq(0)').addClass('active1');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="resume"]').offset().top) {
        $('.nav-item').removeClass('active1');
        $('.nav-item:eq(1)').addClass('active1');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="gallerysection"]').offset().top) {
        $('.nav-item').removeClass('active1');
        $('.nav-item:eq(2)').addClass('active1');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="contacts"]').offset().top) {
        $('.nav-item').removeClass('active1');
        $('.nav-item:eq(3)').addClass('active1');
    }

});

