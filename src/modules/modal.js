import { animate } from "./helpers" 

const modal = () => {

    const modal = document.querySelector('.popup'),
        buttons = document.querySelectorAll('.popup-btn');

    const animateOpen = (count) => {
        modal.style.display = 'block';
        if (document.body.clientWidth > 768) {
                modal.style.opacity = count;
        } else {
            modal.style.opacity = 1;
        }
    }

    const animateClose = (count) => {
        if (document.body.clientWidth > 768) {
            modal.style.opacity = (1 - count);
        } else {
            modal.style.opacity = 0;
        }
        if (modal.style.opacity == 0) {
            modal.style.display = 'none'; 
        }
    }
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            animate({
                duration: 300,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    animateOpen(progress);
                }
              });
        })
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            animate({
                duration: 300,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                      animateClose(progress);      
                }
              });
        } 
    })
}


export default modal