const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
        }
    });
});

const HiddenElements = document.querySelectorAll('.hidden');
HiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInRight');
        }
    });
});

const HiddenElements2 = document.querySelectorAll('.hidden2');
HiddenElements2.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
});

const HiddenElements3 = document.querySelectorAll('.hidden3');
HiddenElements3.forEach((el) => observer3.observe(el));


