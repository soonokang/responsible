//   best slide
const furni = document.getElementById('best-list1');
const fabric = document.getElementById('best-list2');
const display = document.getElementById('best-list3');
const light = document.getElementById('best-list4');
const life = document.getElementById('best-list5');

furni.addEventListener('click',function(){
    const el = document.querySelector('.mo-best .swiper');
    const furniEl = document.querySelector('.mo-best .mySwiper-furni');
    el.classList.remove('best-active');
    // furniEl.classList.add('best-active');
})
// fabric.addEventListener('click',function(){
//     const el = document.querySelector('.mo-best .swiper');
//     const fabricEl = document.querySelector('.mo-best .mySwiper-fabric');
//     el.classList.remove('best-active');
//     fabricEl.classList.add('best-active');
// })