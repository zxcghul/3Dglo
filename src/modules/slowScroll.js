
const slowScrollLink = () => {
    const link = document.querySelectorAll('a');
    link.forEach(elem => {
        if (elem.className !== 'close-btn') {
            elem.addEventListener('click', (e) => {
                const ref = elem.getAttribute('href').substring(1),
                    topPos = document.getElementById(ref).offsetTop;
    
                e.preventDefault();
    
                window.scrollBy({
                    top: topPos,
                    behavior: 'smooth'}
                )
            })
        }
    });
}

export default slowScrollLink