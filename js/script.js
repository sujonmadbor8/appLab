// javaScript code here
// aos start
AOS.init({
  duration: 700,
});
// aos end
// swiper js start
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
// swiper js end// swiper js start
var swiper = new Swiper(".swiper_review", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".next_btn",
    prevEl: ".prev_btn",
  },
});
// swiper js end

// mixitup start
var mixer = mixitup("#price_s", {
  animation: {
    duration: 300,
  },
});
// mixitup end

// jQuery code here
$(function () {
  //   preloader start
  $(window).load(function () {
    //$("#loading").delay(2000).fadeOut(500);
    $("#loading").fadeOut(500);
  });
  //   preloader end

  // scroll to top start
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });
  // scroll to top end
});
