import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
let userSelectedDate = new Date();
let countdownInterval;
startButton.disabled = true;

flatpickr(datetimePicker, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
                position: 'topCenter',
            });
            startButton.disabled = true;
        } else {
            startButton.disabled = false;
            userSelectedDate = selectedDates[0];
            console.log(selectedDates);
        }
    },
});

function updateTimer(days, hours, minutes, seconds) {
    daysSpan.textContent = String(days).padStart(2, '0');
    hoursSpan.textContent = String(hours).padStart(2, '0');
    minutesSpan.textContent = String(minutes).padStart(2, '0');
    secondsSpan.textContent = String(seconds).padStart(2, '0');
}

function calculateTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
}

function startTimer() {
    startButton.disabled = true;
    datetimePicker.disabled = true;
    if (!userSelectedDate || userSelectedDate <= new Date()) {
        return;
    }
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        const timeRemaining = calculateTimeRemaining(userSelectedDate);
        if (timeRemaining.total <= 0) {
            clearInterval(countdownInterval);
            startButton.disabled = false;
            datetimePicker.disabled = false;
        } else {
            updateTimer(timeRemaining.days, timeRemaining.hours, timeRemaining.minutes, timeRemaining.seconds);
        }
    }, 1000);
}

startButton.addEventListener("click", startTimer);
