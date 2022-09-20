const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dots = document.querySelectorAll('.dot')

    let currentSlide = 0;


    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }
    
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0
        };
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    }

    const startSlide = () => {
        setInterval(autoSlide, 2000)
    }

    const stopSlide = () => {

    }

    startSlide();

}

export default slider