function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = (seconds / 60) * 360;
    const secondHand = document.querySelector(".second-hand");
    secondHand.style.transform = "rotate(" + secondsDegree + "deg)";
    const minutes = now.getMinutes();
    const minutesDegree = (minutes / 60) * 360;
    const minuteHand = document.querySelector(".minute-hand");
    minuteHand.style.transform = "rotate(" + minutesDegree + "deg)";
    const hours = now.getHours();
    const hoursDegree = (hours / 24) * 360;
    const hourHand = document.querySelector(".hour-hand");
    hourHand.style.transform = "rotate(" + hoursDegree + "deg)";
    if (secondsDegree > 353) {
        secondHand.style.transition = "none";
    } else if (secondsDegree > 0) {
        secondHand.style.transition = "0.2s cubic-bezier(0.42, 0, 0, 1.96)";
    }
    if (minutesDegree > 353) {
        minuteHand.style.transition = "none";
    } else if (minutesDegree > 0) {
        minuteHand.style.transition = "0.8s cubic-bezier(0.42, 0, 0, 1.96)";
    }
    if (hoursDegree > 340) {
        hourHand.style.transition = "none";
    } else if (hoursDegree > 0) {
        hourHand.style.transition = "0.8s cubic-bezier(0.42, 0, 0, 1.96)";
    }
}
setInterval(setDate, 1000);