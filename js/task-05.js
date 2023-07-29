const inputel = document.querySelector('#name-input');
const outputel = document.querySelector('#name-output');

const inputHandle = () => {

    // outputEl.textContent = event.target.value || 'Anonymous'
    if (inputel.value.length > 0) {
        outputel.textContent = inputel.value;
        // return;
    } else {
        outputel.textContent = 'Anonymous';
    }

 }

inputel.addEventListener('input', inputHandle);