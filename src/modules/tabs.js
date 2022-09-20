const tabs = () => {
    const tabPanel = document.querySelector('.service-header');
    const tabContent = document.querySelectorAll('.service-tab');
    const tabs = document.querySelectorAll('.service-header-tab');

    tabPanel.addEventListener('click', (e) => {
        if (e.target.closest('.service-header-tab')) {
            const tabBtn = e.target.closest('.service-header-tab');
            tabs.forEach((tab, index) => {
                tab === tabBtn ? (
                    tab.classList.add('active'),
                    tabContent[index].classList.remove('d-none')
                ) : (
                    tab.classList.remove('active'),
                    tabContent[index].classList.add('d-none')
                );
            })
        }
    })

}

export default tabs