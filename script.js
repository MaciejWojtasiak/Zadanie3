function countDown() {
    const counterDiv = document.querySelector('.counter');
    const endDate = new Date("dec 10 2020 14:00").getTime();
    const today = new Date().getTime();
    const timeLeft = endDate - today;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const mins = Math.floor(timeLeft / (1000 * 60));

    const h = hours - days * 24;
    const m = mins - hours * 60;

    const dayString = ("0" + days).slice(-2);
    const hourString = ("0" + h).slice(-2);
    const minuteString = ("0" + m).slice(-2);

    if (days <= 0) {
        counterDiv.innerHTML = `
        Do końca pozostało: ${hourString}-${minuteString}`;
    } else if (h <= 0) {
        counterDiv.innerHTML = `
        Do końca pozostało: ${minuteString}`;
    } else {
        counterDiv.innerHTML = `
        Do końca pozostało: ${dayString}-${hourString}-${minuteString}`;
    }
}

countDown();

setInterval(() => {
    countDown();
}, 60000);

