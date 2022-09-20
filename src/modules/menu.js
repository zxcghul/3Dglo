const menu = () => {
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    
    const handMenu = (() => {
        menu.classList.toggle('active-menu')
    });

    const toggleMenu = () => {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.menu') || e.target === closeBtn) {
                handMenu();
            } else if (!e.target.closest('.active-menu')) {
                menu.classList.remove('active-menu')
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