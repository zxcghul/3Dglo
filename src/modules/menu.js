const menu = () => {
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    
    const toggleMenu = () => {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.menu') || e.target === closeBtn) {
                menu.classList.toggle('active-menu');
            } else if (!e.target.closest('.active-menu')) {
                menu.classList.remove('active-menu');
            } else if (e.target.closest('a')) {
                menu.classList.remove('active-menu');
            } 
             
            
        })
    };

    toggleMenu();
}

export default menu