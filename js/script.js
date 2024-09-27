
function initSwiper(selector, slidesPerView, totalSlides) {
  const swiperContainer = document.querySelector(selector);
  
  if (!swiperContainer) return;

  const truncatedSelector = selector.replace('#', '');
  const nextButton = swiperContainer.querySelector(`.custom-swiper-button-next-${truncatedSelector}`);
  const prevButton = swiperContainer.querySelector(`.custom-swiper-button-prev-${truncatedSelector}`);
  const totalSlidesEl = swiperContainer.querySelector(`.total-slides-${truncatedSelector}`);
  const currentSlideEl = swiperContainer.querySelector(`.current-slide-${truncatedSelector}`);

  const swiper = new Swiper(swiperContainer, {
    direction: 'horizontal',
    spaceBetween: 20,
    
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    breakpoints: {
      320: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: slidesPerView
      },
    },
    
    on: {
      init: function() {
        const slidesCount = totalSlides || this.slides.length;

        if (window.innerWidth < 991) {
          if (totalSlidesEl) totalSlidesEl.textContent = this.slides.length;
        } else {
          if (totalSlidesEl) totalSlidesEl.textContent = slidesCount; 
        }

        if (currentSlideEl) currentSlideEl.textContent = this.realIndex + 1;
      },
      slideChange: function() {
        if (currentSlideEl) currentSlideEl.textContent = this.realIndex + 1;
      }
    }
  });
}

initSwiper('#do', 1, 5); 
initSwiper('#review', 1, 2);
initSwiper('#blog', 3, 3);

document.querySelectorAll('.faq_question_btn').forEach(item => {
  item.addEventListener('click', function() {
    const container = this.closest('.faq_item');
    const answer = container.querySelector('.faq_answer');
    const closeBtn = container.querySelector('.faq_question_close');
    const openBtn = container.querySelector('.faq_question_open');
    
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.paddingTop = null;
      openBtn.style.display = 'block';
      closeBtn.style.display = 'none';
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.paddingTop = '20px';
      closeBtn.style.display = 'block';
      openBtn.style.display = 'none';
    }
  });
});

function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

openModalBtn.addEventListener('click', function() {
  modal.classList.add('show');
  overlay.classList.add('show');
});

overlay.addEventListener('click', function() {
  modal.classList.remove('show');
  overlay.classList.remove('show');
});

const burgerMenu = document.getElementById('burgerMenu');
const headerMenu = document.getElementById('headerMenu');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('open');
  headerMenu.classList.toggle('show');
});



