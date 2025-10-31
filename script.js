let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slideInterval = 3000;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'prev', 'next');
    dots[i].classList.remove('active');
  });

  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  const nextIndex = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
  slides[prevIndex].classList.add('prev');
  slides[nextIndex].classList.add('next');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}

updateSlides();
setInterval(nextSlide, slideInterval);
