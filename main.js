const toggler = document.getElementById('toggler');
const navbar = document.querySelector('.navbar');

toggler.addEventListener('click', () => {
    navbar.classList.toggle('active');
});




var typed = new Typed(".text", {
    strings: ["Front-End Developer", "Cloud Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})




const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

const updateCarousel = () => {
    const width = images[0].clientWidth;
    carouselImages.style.transform = `translateX(${-currentIndex * width}px)`;
};

const autoScroll = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
};

let autoScrollInterval = setInterval(autoScroll, 3000);

prevButton.addEventListener('click', () => {
    clearInterval(autoScrollInterval);
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
    autoScrollInterval = setInterval(autoScroll, 3000);
});

nextButton.addEventListener('click', () => {
    clearInterval(autoScrollInterval);
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
    autoScrollInterval = setInterval(autoScroll, 3000);
});

window.addEventListener('resize', updateCarousel);




// Get the "top" button and the home section
const topArrow = document.getElementById('topArrow');
const homeSection = document.querySelector('.home'); // Replace '.home' with the actual class or ID of your home section

window.addEventListener('scroll', () => {
    const homeHeight = homeSection.offsetHeight; // Height of the home section
    const scrollPosition = window.scrollY; // Current scroll position

    // Show the arrow if scrolled beyond the home section, otherwise hide it
    if (scrollPosition > homeHeight) {
        topArrow.style.display = 'block';
    } else {
        topArrow.style.display = 'none';
    }
});

