const value = document.getElementById('value');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
}

let count = 0;
let intervalId = 0;

const increment = () => {
    count += 1;
    updateValue();
}

const decrement = () => {
    count -= 1;
    updateValue();
}

plusBtn.addEventListener('mousedown', () => {
    increment();
    intervalId = setInterval(increment, 100);
});

minusBtn.addEventListener('mousedown', () => {
    decrement();
    intervalId = setInterval(decrement, 100);
});

const stopInterval = () => {
    clearInterval(intervalId);
}

plusBtn.addEventListener('mouseup', stopInterval);
minusBtn.addEventListener('mouseup', stopInterval);

document.addEventListener('mouseout', (event) => {
    const isButton = event.target.tagName === 'BUTTON';
    if (!isButton) {
        stopInterval();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateValue();
});