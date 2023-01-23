jQuery(document).ready(function () {
  
  function waitSlick() {
    
    if (jQuery.fn.slick) {
      jQuery('.slick-arrow').css('border', '1px solid rgba(0, 0, 0, 0.1)')
      jQuery(".slick-arrow").css("display", "block");
      jQuery(".cardContainer").slick({
        prevArrow: jQuery(".left"),
        nextArrow: jQuery(".right"),
        infinite: !0,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        responsive: [{ breakpoint: 768, settings: { arrows: !1 } }],
      });
    } else {
      setTimeout(waitSlick(), 100);
    }
  }

  waitSlick()

  jQuery(".color").hover(
    function () {
      jQuery(this).parent().find(".color.active").removeClass("active"),
        jQuery(this).addClass("active");
    },
    function () {
     // jQuery(this).removeClass("active");
      // jQuery(this).parent().find(".color").eq(3).addClass("active");
    }
  );
});
