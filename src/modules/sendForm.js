import { validateTrue } from "./validateTrue" 

const sendForm = ({
    formId,
    someElem = []
}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка..';
    const successText = 'Спасибо!  Наш менеджер с вами свяжется!';
    

    statusBlock.style.color = '#FFFFFF';
    
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};
        if (validateTrue(formElements)) {
            statusBlock.textContent = loadText;
        }
        
        form.append(statusBlock);
        formData.forEach((val, key) => {
            if (key === 'user_message') {
                if (val === '') {
                    return
                }
            }
            formBody[key] = val;
        })
        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);

            if (element.id === 'total') {
                return
            }

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            }

            if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        })
        if (validateTrue(formElements)) {
            sendData(formBody).then(data => {
                    statusBlock.textContent = successText;
                    formElements.forEach(input => {
                        input.value = '';
                        input.classList.remove('success')
                        
                    });
                    console.log(data);
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                })
        } else {
            console.log('не валидны');
        }
        setTimeout(() => {
            statusBlock.textContent = '';
        }, 3000);
    }

    try {
        if (!form) {
            throw new Error('Верните форму')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default sendForm