const hourElement = document.getElementById("hour")

const minuteElement = document.getElementById("minutes")

const secondElement = document.getElementById("seconds")

const ampmElement = document.getElementById("ampm")

const updateClock = () => {
    let currentHour = new Date().getHours()
    let currentMinute = new Date().getMinutes()
    let currentSecond = new Date().getSeconds()
    let currentAmPm = "AM"

    if (currentHour > 12) {
        currentHour = currentHour - 12
        currentAmPm = "PM"
    }

    currentHour = currentHour < 10 ? "0" + currentHour : currentHour ;
    currentMinute = currentMinute < 10 ? "0" + currentMinute : currentMinute ;
    currentSecond = currentSecond < 10 ? "0" + currentSecond : currentSecond ;

    hourElement.innerText = currentHour

    minuteElement.innerText = currentMinute

    secondElement.innerText = currentSecond

    ampmElement.innerText = currentAmPm

    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock()