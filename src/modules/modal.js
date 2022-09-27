import { animate, animateOpen, animateClose } from "./helpers" 

const modal = () => {

    const modal = document.querySelector('.popup'),
        buttons = document.querySelectorAll('.popup-btn');
    
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