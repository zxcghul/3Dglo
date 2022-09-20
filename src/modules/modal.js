const modal = () => {

    const modal = document.querySelector('.popup'),
        buttons = document.querySelectorAll('.popup-btn'),
        closeBtn = modal.querySelector('.popup-close');
    let count = 0,
        idInterval;

        const animationOpen = () => {
            modal.style.display = 'block';
            if (document.body.clientWidth > 768) {
                count += 0.04;
                if (count <= 1.04) {
                    requestAnimationFrame(animationOpen);
                    modal.style.opacity = count;
                } else {
                    cancelAnimationFrame(animationOpen);
                }
            }
        }

        const animationClose = () => {
            count -= 0.04;
            if (count > 0) {
                idInterval = requestAnimationFrame(animationClose);
                modal.style.opacity = count;
            } else {
                cancelAnimationFrame(animationClose);
                modal.style.display = 'none';
            }   
        }


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            requestAnimationFrame(animationOpen);
        })
    })

    closeBtn.addEventListener('click', () => {
        requestAnimationFrame(animationClose);
    })
}


export default modal