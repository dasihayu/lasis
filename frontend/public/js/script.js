var state = false;
function toggle() {
  if (state) {
    document.getElementById('password').setAttribute('type', 'password');
    state = false;
  } else {
    document.getElementById('password').setAttribute('type', 'text');
    state = true;
  }
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
});