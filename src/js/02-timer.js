import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputText = document.getElementById('datetime-picker');
const buttonStart = document.querySelector('[data-start]');
buttonStart.toggleAttribute('disabled');
const currentDays = document.querySelector('[data-days]');
const currentHours = document.querySelector('[data-hours]');
const currentMinutes = document.querySelector('[data-minutes]');
const currentSeconds = document.querySelector('[data-seconds]');

currentDays.textContent = '00';
currentHours.textContent = '00';
currentMinutes.textContent = '00';
currentSeconds.textContent = '00';
let initialRun = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    currentDateSelection(selectedDates[0]);
  },
};

flatpickr(inputText, options);

let timeId = null;
let timeDifference = null;
let startCountdown = null;

function currentDateSelection(selectedDates) {
  const currentDate = Date.now();
  if (selectedDates < currentDate) {
    Notiflix.Notify('Please choose a date in the future');
  } else {
    buttonStart.removeAttribute('disabled');
  }

  timeDifference = selectedDates.getTime() - currentDate;
  startCountdown = convertMs(timeDifference);
}

buttonStart.addEventListener('click', () => {
  buttonStart.toggleAttribute('disabled');
  inputText.toggleAttribute('disabled');
  timeId = setInterval(startTimer, 1000);
});

function startTimer() {
  timeDifference -= 1000;
  if (
    !initialRun &&
    currentMinutes.textContent === '00' &&
    currentSeconds.textContent === '00'
  ) {
    Notiflix.Notify.success('Time is up');
    clearInterval(timeId);
  } else {
    if (initialRun) {
      initialRun = false;
    }
    startCountdown = convertMs(timeDifference);
    console.log(startCountdown);
    dateDisplay(startCountdown);
  }
}

const addZeroPrefix = time => (time < 10 ? `0${time}` : time);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addZeroPrefix(Math.floor(ms / day));
  const hours = addZeroPrefix(Math.floor((ms % day) / hour));
  const minutes = addZeroPrefix(Math.floor(((ms % day) % hour) / minute));
  const seconds = addZeroPrefix(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function dateDisplay(startCountdown) {
  currentDays.textContent = startCountdown.days;
  currentHours.textContent = startCountdown.hours;
  currentMinutes.textContent = startCountdown.minutes;
  currentSeconds.textContent = startCountdown.seconds;
}
