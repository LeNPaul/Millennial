function updateCountdown() {
    const targetDate = new Date('2023-09-15 05:00:00').getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        clearInterval(interval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.querySelector('.days .value').textContent = days < 10 ? `0${days}` : days;
    document.querySelector('.hours .value').textContent = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.minutes .value').textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.seconds .value').textContent = seconds < 10 ? `0${seconds}` : seconds;
}

updateCountdown(); // Initial call to set the countdown

const interval = setInterval(updateCountdown, 1000); // Update the countdown every second

