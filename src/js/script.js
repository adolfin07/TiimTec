  const slider = document.getElementById('slider');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  let currentIndex = 0;
  const totalSlides = slider.children.length;

  function updateSlide() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  }

  function goToPrevSlide() {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlide();
  }

  prev.addEventListener('click', () => {
    goToPrevSlide();
    resetAutoplay();
  });

  next.addEventListener('click', () => {
    goToNextSlide();
    resetAutoplay();
  });


  let autoplayInterval = setInterval(goToNextSlide, 2000);

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(goToNextSlide, 2000);
  }