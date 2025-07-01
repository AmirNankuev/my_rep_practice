document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.reviews-slider');
    const slides = document.querySelectorAll('.reviews-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    function goToSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        slides[index].style.display = 'flex';
        currentIndex = index;
        
        updateDots();
    }
    
    function updateDots() {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    function nextSlide() {
        const newIndex = (currentIndex + 1) % totalSlides;
        goToSlide(newIndex);
    }
    
    function prevSlide() {
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(newIndex);
    }
    
    function init() {
        createDots();
        goToSlide(0);
        
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        
        setInterval(nextSlide, 3000);
    }
    
    init();
});

