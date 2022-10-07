
const slowScrollLink = () => {
    const link = document.querySelectorAll('a');
    link.forEach(elem => {
        elem.addEventListener('click', (e) => {
            const ref = elem.getAttribute('href').substring(1),
                topPos = document.getElementById(ref).offsetTop;

            e.preventDefault();

            window.scrollBy({
                top: topPos,
                behavior: 'smooth'}
            )
        })
    });
}

export default slowScrollLink