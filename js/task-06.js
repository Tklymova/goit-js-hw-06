const validationInputelement = document.querySelector('#validation-input');


const checknumbers = () => {
    if (validationInputelement.value.length === Number(validationInputelement.dataset.length)) {
        validationInputelement.classList.remove(`invalid`);
        validationInputelement.classList.add(`valid`);
        return;
    } else {
        validationInputelement.classList.remove(`valid`);
        validationInputelement.classList.add(`invalid`);
    };
}

validationInputelement.addEventListener('blur',checknumbers);