/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

// burger
const burger = document.querySelector('.burger');

if(burger){
  burger.addEventListener('click', function(){
    this.classList.toggle('burger--active');
  })
}
// ==========================================================================================
// preloader
document.querySelector('body').onload = function(){

	setTimeout(function(){
		const preloader = document.querySelector('.preloader');

		if(!preloader.classList.contains('done')){
			preloader.classList.add('done')
		}

	}, 1000);
}
//scroll-to-top
const scrollSize = 100;
const scrollUp = document.querySelector('.scroll-to-top');

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;


window.addEventListener('scroll', () => {
   if (getTop() > scrollSize) {
      scrollUp.classList.add('show');
   } else {
      scrollUp.classList.remove('show');
   }
});

scrollUp.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});
 // animations
   //1.Добавить класс _anim-items для необходимого элемента
   //2.Прописать стили для класса _active который подставит скрипт
   //3.Класс _anim-no-hide отменяет удаление класса _active и анимация не повторяется при обратном скроле
   const animItems = document.querySelectorAll('._anim-items');

   if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll() {
         for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
               animItem.classList.add('_active');
            }
            else {
               if (!animItem.classList.contains('_anim-no-hide')) {
                  animItem.classList.remove('_active');
               }
            }
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
         animOnScroll();
      }, 300);

   }
// popup

const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelectorAll('.popup-open-btn');
const popupCloseBtn = document.querySelectorAll('.popup-close');

  // open
  popupOpenBtn.forEach(function(popupBtn){
    popupBtn.addEventListener('click', function(e){
      e.preventDefault();
      popup.classList.toggle('popup-open');
    })
  })

    // close
    popupCloseBtn.forEach(function(closeBtn){
      closeBtn.addEventListener('click', function(e){
        
        popup.classList.remove('popup-open');
      })
    })
  
// ===========================================================================

// accordion

const accordionItems = document.querySelectorAll('.accordion__item');
		
if(accordionItems.length > 0){
  
  for(let i=0; i < accordionItems.length; i++){
    accordionItems[i].addEventListener('click', function(){
      
      this.classList.toggle('active')
    })
  }
}
	
  // search
  const searchBtn = document.querySelector('button.search');
  const searchInput = document.querySelector('.search-input');

  searchBtn.addEventListener('click', function(e){
    searchInput.classList.toggle('active');
  })


//hero slider

const slides = document.querySelectorAll('.hero__slide');
const photos = document.querySelectorAll('.hero__photo-item');

photos.forEach(function(photo){
  photo.addEventListener('click', function(e){
    for(let i = 0; i < photos.length; i++){
      photos[i].classList.remove('active')
    }
    
      this.classList.add('active');

      let photoName = this.dataset.name;

    slides.forEach(function(slide){
      let slideName = slide.dataset.name;

      if(photoName === slideName){

        for(let i = 0; i < slides.length; i++){
          slides[i].classList.remove('active');
        }

        slide.classList.add('active');
      }
    })




  })
})

// video-slider

const viseoSwiper = new Swiper('.video__slider', {
  // Optional parameters
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  autoplay: {
     delay: 8000,
   },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// gallery-slider
const body = document.querySelector('body');
const galOpenBtn = document.querySelector('.gallery__title-btn');
const galContainer = document.querySelector('.gallery__slider-wrapper');
const galCloseBtn = document.querySelector('.gallery-close');

if(galOpenBtn){

  galOpenBtn.addEventListener('click', function(e){
    e.preventDefault();

    galContainer.classList.add('active');
    body.classList.add('lock');
    scrollUp.classList.remove('show');
  })

  if(galCloseBtn){
    galCloseBtn.addEventListener('click', function(e){
      e.preventDefault();
  
      galContainer.classList.remove('active');
      body.classList.remove('lock');
      scrollUp.classList.add('show');
    })
  }


}

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   loop: true,
  loopedSlides: 4
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;