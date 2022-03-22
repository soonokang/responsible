// nav
(function () {
  const link = document.querySelectorAll("nav > .hover-this");
  const cursor = document.querySelector(".cursor");
  const animateit = function (e) {
    const span = this.querySelector("span");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 0.1,
      xMove = (x / width) * (move * 1.2) - move,
      yMove = (y / height) * (move * 1.2) - move;
    span.style.transform = `translate(${xMove}px, ${yMove}px)`;
    if (e.type === "mouseleave") span.style.transform = "";
  };
  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };
  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseleave", animateit));
  window.addEventListener("mousemove", editCursor);
})();

// mo-swifer

new Swiper(".mo-top-slider .swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: true,
  pagination: {
    el: ".mo-top-slider .swiper-pagination",
    clickable: true,
  },
});

// pc-swifer

new Swiper(".pc-slider .swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: true,
  pagination: {
    el: ".pc-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".pc-slider .swiper-button-prev",
    nextEl: ".pc-slider .swiper-button-next",
  },
});

//mo-swiper slider
var swiper = new Swiper(".mo-today-sale .mySwiper, .mo-best .mySwiper", {
  slidesPerView: 3,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    960: {
      slidesPerView: 2,
    },
  },
});

// 타이머만들기
let date;
date = new Date();
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setDate(date.getDate() + 1);
let time2 = date.getTime();

function remain() {
  var now = new Date();
  var gap = Math.round((time2 - now.getTime()) / 1000);

  var D = Math.floor(gap / 86400);
  var H = Math.floor(((gap - D * 86400) / 3600) % 3600);
  var M = Math.floor(((gap - H * 3600) / 60) % 60);
  var S = Math.floor((gap - M * 60) % 60);

  if (H < 10) {
    H = "0" + H;
  }
  if (M < 10) {
    M = "0" + M;
  }
  if (S < 10) {
    S = "0" + S;
  }
  document.getElementById("hours").innerHTML = H;
  document.getElementById("minutes").innerHTML = M;
  document.getElementById("second").innerHTML = S;
}
remain();
setInterval(remain, 1000);

//   현재시간 가져오기
let now = new Date();
let nowYear = now.getFullYear();
let nowMonth = now.getMonth();
let nowDate = now.getDate();
let nowHours = now.getHours();
let nowMinutes = now.getMinutes();
let clock = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + 1,
  24,
  00,
  00
);
let saleHoure = clock.getHours() - nowHours;

const thisTime = document.getElementById("this-time");
thisTime.innerHTML =
  nowYear +
  "년 " +
  (nowMonth + 1) +
  "월 " +
  nowDate +
  "일 " +
  "<br>" +
  nowHours +
  "시 " +
  nowMinutes +
  "분 " +
  "기준";

// hamberger menu
const hamberger = document.querySelector(".menu-toggle-btn");

hamberger.addEventListener("click", function () {
  const subMenu = document.querySelector(".mo-sub-menu");
  subMenu.classList.toggle("ison");
});

// top button
const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초동안) 이동
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// 플로팅
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min * 1.3).toFixed(2));
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 25);
floatingObject(".floating2", 0.5, 25);
floatingObject(".floating3", 1.65, 25);
floatingObject(".floating4", 1.75, 25);

// magic scroll
const spyEls = document.querySelectorAll(".scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
