function updateTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    document.querySelector(".hour").textContent = formatTime(hour);
    document.querySelector(".minute").textContent = formatTime(minute);
    document.querySelector(".second").textContent = formatTime(second);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

updateTime();
setInterval(updateTime, 1000);