const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showImage(index) {
    const imageWidth = images[0].clientWidth;
    carousel.style.transform = `translateX(-${index * imageWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

window.addEventListener('resize', () => {
    showImage(currentIndex);
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 28,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 28,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },
});


const form = document.getElementById('applicationForm');
const submitButton = document.getElementById('submitButton');
const successMessage = document.getElementById('successMessage');


function checkFormValidity() {
    const isValid = form.checkValidity();
    submitButton.disabled = !isValid;
    submitButton.classList.toggle('bg-gray-300', submitButton.disabled);
    submitButton.classList.toggle('bg-green-500 text-white', !submitButton.disabled);
}

form.addEventListener('input', checkFormValidity);


form.addEventListener('submit', function (event) {
    event.preventDefault();
    successMessage.classList.remove('hidden');
    form.reset();
    submitButton.disabled = true;
    submitButton.classList.add('bg-gray-300');
    submitButton.classList.remove('bg-green-500');
});