const swiper = new Swiper('.swiper', {
    loop: true, // ループ
    autoplay: {
      delay: 3000, // 自動再生の間隔（ミリ秒）
      disableOnInteraction: false,
    },

    slidesPerView: 3, 
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });