document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
    type: "loop",
    autoplay: true,
    interval: 2000,
    pauseOnHover: false,
    perPage: 1,
    speed: 800,
  }).mount();
});

