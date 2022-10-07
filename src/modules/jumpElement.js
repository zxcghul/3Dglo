import { animate, animateOpen, animateClose, animateJump } from "./helpers" 
const jumpElement = (elem) => {
    elem.style.position = 'relative';
    elem.addEventListener('mouseover', () => {
        animate({
        duration: 300,
        timing(timeFraction) {
            return timeFraction;
        },
        draw(progress) {
            animateJump(progress, elem);
        }
      });
    })
    
}

export default jumpElement