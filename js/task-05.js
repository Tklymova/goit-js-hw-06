const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const inputHandle = () => {
    if (inputEl.value.length > 0) {
        outputEl.textContent = inputEl.value;
        // return;
    } else {
        outputElement.textContent = 'Anonymous';
    }

 }

inputEl.addEventListener('input', inputHandle);