

const slides = document.querySelectorAll(".testimonial");
const rightButton = document.querySelector(".testimonial-button-right");
const leftButton = document.querySelector(".testimonial-button-left");
let currentIndex = 0;

function goToSlide(index) {

    slides.forEach(testimonial => {
        testimonial.classList.remove('active', 'prev', 'next');
    });

    if (index === 0) {
        slides[index].classList.add('active');
        slides[slides.length - 1].classList.add('prev');
        slides[index + 1].classList.add('next');

    } else if (index === 1) {
        slides[index].classList.add('prev');
        slides[index - 1].classList.add('prev');
        slides[index + 1].classList.add('next');
    }
}


leftButton.addEventListener('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    console.log(currentIndex);

    goToSlide(currentIndex);
});

rightButton.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex > slides.length - 1) {
        currentIndex = 0;
    }
    console.log(currentIndex);

    goToSlide(currentIndex);
});

goToSlide(currentIndex);





