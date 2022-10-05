import { validateTrue } from "./validateTrue" 

const validation = () => {
    const inputsCalc = document.querySelectorAll('.calc-block input');
    const inputsArea = document.querySelectorAll('.form-name, .mess, #form2-name');
    const inputsEmail = document.querySelectorAll('input[type=email]');
    const inputsTel = document.querySelectorAll('input[type=tel]');
    let mas = {inputsEmail, inputsTel, inputsArea};
    const validationTel = () => {
        inputsTel.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9+]+/,"");
                if (item.classList.contains('error') || item.classList.contains('success')) { //после первого ввода чтобы переключало, если пользователь вводит неправильно
                    const transformMassive = [item];
                    validateTrue(transformMassive)
                }
            });
        });
    };

    const validationEmail = () => {
        inputsEmail.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z@-_.!~*']+/,"");
                if (item.classList.contains('error')) {
                    const transformMassive = [item];
                    validateTrue(transformMassive)
                }
            });
        });
    };

    const validationArea = () => {
        inputsArea.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[a-zA-Z0-9]+/, "");
                if (item.classList.contains('error') || item.classList.contains('success')) {
                    const transformMassive = [item];
                    validateTrue(transformMassive)
                }
            });
        });
    };

    const validationCalc = () => {
        inputsCalc.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/\D+/,"");
            });
        });
    };
    validationTel();
    validationEmail();
    validationArea();
    validationCalc();
}

export default validation