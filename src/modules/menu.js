const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    
    const handMenu = (() => {
        menu.classList.toggle('active-menu')
    });

    const toggleMenu = () => {
        document.addEventListener('click', (e) => {
            if (e.target === menuBtn || e.target === closeBtn || !e.target.closest('.active-menu')) {
                handMenu();
            }
            menuItems.forEach (item => {
                if (e.target === item) {
                    handMenu();
                }  
            });
        })
    };

    toggleMenu();
}

export default menu