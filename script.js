const daysJ = document.getElementById('days');
const hoursJ = document.getElementById('hours');
const minsJ = document.getElementById('mins');
const secsJ = document.getElementById('secs');

const newDayMarcel = '1 November 2021'

function countdown() {
    const newYearsDate = new Date(newDayMarcel);
    const currentDate = new Date();

    const seconds = new Date(newYearsDate - currentDate) / 1000;

    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const mins = Math.floor(seconds / 60) % 60;
    const secs = Math.floor(seconds) % 60;


    daysJ.innerHTML = formatTime(days);
    hoursJ.innerHTML = formatTime(hours);
    minsJ.innerHTML = formatTime(mins);
    secsJ.innerHTML = formatTime(secs);
}
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);