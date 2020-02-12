var mySwiper = undefined;
  function initSwiper() {
    var screenWidth = window.outerWidth;
    if ( (screenWidth < (351)) && (mySwiper == undefined)) {
        swiper = new Swiper('.swiper-container', {
            // init: false,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                }
            },
        });
    } else if ((screenWidth > 350) && (mySwiper != undefined)) {
      mySwiper.destroy();
      mySwiper = undefined;
      console.log(mySwiper)
    //   $('.swiper-wrapper').removeAttr('style');
    //   $('.swiper-slide').removeAttr('style');
    }
  }
  initSwiper();

  window.addEventListener('resize', function() {
    initSwiper();
  });