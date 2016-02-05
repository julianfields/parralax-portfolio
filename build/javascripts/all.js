$(document).ready(function() {

    $("a[href*=#]").each(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname
      && this.hash.replace(/#/,'') ) {
        var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
        var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
         if ($target) {
           var targetOffset = $target.offset().top;
           $(this).click(function() {
             $("#nav li a").removeClass("active");
             $(this).addClass('active');
             $('html, body').animate({scrollTop: targetOffset}, 400);
             return false;
           });
        }
      }
    });
    

  $(window).on('scroll', function() {
      $('.target').each(function() {
          if($(window).scrollTop() >= $(this).offset().top) {
              var id = $(this).attr('id');
              $('#nav a').removeClass('active');
              $('#nav a[href=#'+ id +']').addClass('active');
          }
      });
  });
});
