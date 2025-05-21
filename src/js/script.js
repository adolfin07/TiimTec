document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  if (slider && prev && next) {
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
  }

  // animate on scroll observers (no dependen del slider)
  const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__slideInLeft');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  document.querySelectorAll('.observerLeft').forEach(el => observerLeft.observe(el));

  const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__slideInRight');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  document.querySelectorAll('.observerRight').forEach(el => observerRight.observe(el));

  const observerUp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__slideInUp');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  document.querySelectorAll('.observerUp').forEach(el => observerUp.observe(el));

  let openBtn = document.querySelector("#openBtn");
  let navDiv = document.querySelector("#navbar-default");

  if (openBtn && navDiv) {
    openBtn.addEventListener('click', () => {
      navDiv.classList.toggle('toggle');
    });

    // link click toggles nav
    let links = document.querySelectorAll(".link");
    links.forEach(link => {
      link.addEventListener("click", () => {
        navDiv.classList.toggle('toggle');
      });
    });
  }

  console.log(navDiv);

  const select = document.getElementById('rfcSelect');
  const priceDisplay = document.getElementById('priceDisplay');

  select.addEventListener('change', () => {
    const price = parseInt(select.value).toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2
    });
    priceDisplay.innerHTML = `${price} <span class="text-sm text-red-600">IVA Incl.</span>`;
  });
});
