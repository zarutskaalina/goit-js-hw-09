const bodyEl = document.body;
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
buttonStop.toggleAttribute('disabled');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let timerId = null;

buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener('click', onStop);

function onStart() {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    bodyEl.style.background = randomColor;
  }, 1000);

  buttonStart.toggleAttribute('disabled');
  buttonStop.removeAttribute('disabled');
}

function onStop() {
  clearInterval(timerId);
  buttonStart.removeAttribute('disabled');
  buttonStop.toggleAttribute('disabled');
}
