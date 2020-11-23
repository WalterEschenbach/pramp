// Retrieve DOM elements
const secondsElement = document.querySelector('.seconds');
const minutesElement = document.querySelector('.minutes');
const hoursElement = document.querySelector('.hours');

// Set the rotation and add 90 to default from 12am
function setRotation(element, degrees) {
    element.style.transform =  `rotate(${degrees+90}deg)`;
}

function updateClockHandsToCurrentTime(){
    //Get current time
    const now = new Date();

    // Break it down to hours, minutes, seconds
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calc the rotation of each clock hand in degrees
    const secondsRotationDegrees = (seconds / 60) * 360;
    const minutesRotationDegrees = (minutes / 60) * 360 + (seconds/60) * 6;
    const hoursRotationDegrees = (hours / 12) * 360 + (minutes/60) * 30;

    setRotation(secondsElement, secondsRotationDegrees);
    setRotation(minutesElement, minutesRotationDegrees);
    setRotation(hoursElement, hoursRotationDegrees);
}

// Set the intitial clock state, and update it every second
setInterval(updateClockHandsToCurrentTime, 1000);
updateClockHandsToCurrentTime();