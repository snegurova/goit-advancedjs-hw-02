import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { convertMs, formatTime } from './utils';

const inputPicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let selectedDateAndTime = null;
let timerId = null;

const onPickerClose = (selectedDates) => {
  selectedDateAndTime = selectedDates[0];
  const isDateAndTimeInvalid = selectedDateAndTime < new Date();
  startButton.disabled = isDateAndTimeInvalid;
  isDateAndTimeInvalid &&
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future!',
    });
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: onPickerClose,
};

const picker = flatpickr(inputPicker, options);

const timer = () => {
  const currentDate = new Date();
  const timeLeft = selectedDateAndTime - currentDate;

  if (timeLeft <= 0) {
    inputPicker.disabled = false;
    clearInterval(timerId);
    iziToast.success({
      title: 'Done',
      message: 'Time counting is finished!',
    });
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeLeft);

  daysElement.textContent = formatTime(days);
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
};

const onStartBtnClick = () => {
  inputPicker.disabled = true;
  startButton.disabled = true;
  timerId = setInterval(timer, 1000);
};

startButton.addEventListener('click', onStartBtnClick);
