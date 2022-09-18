const modal = () => {
    if (document.body.clientWidth > 800) {
        const modal = document.querySelector('.popup'),
          buttons = document.querySelectorAll('.popup-btn'),
          closeBtn = modal.querySelector('.popup-close');
        let count = 0,
          idInterval;

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
                const animation = () => {
                    count += 0.04;
                    if (count <= 1.04) {
                        requestAnimationFrame(animation);
                        modal.style.opacity = count;
                    } else {
                        cancelAnimationFrame(animation);
                    }
                }
                requestAnimationFrame(animation);
            })
        })

        closeBtn.addEventListener('click', () => {
            const animation = () => {
                count -= 0.04;
                if (count > 0) {
                    idInterval = requestAnimationFrame(animation);
                    modal.style.opacity = count;
                } else {
                    cancelAnimationFrame(animation);
                    modal.style.display = 'none';
                }
            }
            requestAnimationFrame(animation);
        })
    }
}

export default modal