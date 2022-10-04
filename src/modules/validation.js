const validation = () => {
    const inputsCalc = document.querySelectorAll('.calc-block input');
    const inputsArea = document.querySelectorAll('.form-name, .mess, #form2-name');
    const inputsEmail = document.querySelectorAll('input[type=email]');
    const inputsTel = document.querySelectorAll('input[type=tel]');

    const validationTel = () => {
        inputsTel.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9+]+/,"")
            });
        });
    };

    const validationEmail = () => {
        inputsEmail.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z@-_.!~*']+/,"")
            });
        });
    };

    const validationArea = () => {
        inputsArea.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[a-zA-Z0-9]+/, "");
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