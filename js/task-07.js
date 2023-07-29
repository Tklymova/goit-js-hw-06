const inputcontrolelement = document.querySelector('#font-size-control');
const textelement = document.querySelector('#text');

textelement.style.fontSize = inputcontrolelement.value + 'px';

const textresizing = () => {
    textelement.style.fontSize = `${inputcontrolelement.value}px`;
}

inputControlElement.addEventListener('input',textresizing);