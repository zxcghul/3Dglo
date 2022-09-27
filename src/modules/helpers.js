function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction);
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

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

export { animate, animateOpen, animateClose }