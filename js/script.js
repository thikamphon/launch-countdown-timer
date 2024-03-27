window.onload = function () {
    const countDownDate = new Date().setHours(new Date().getHours() + (24*9))
    var SetTimerInterval = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var daystxt = document.querySelectorAll(".day");
        var hourstxt = document.querySelectorAll(".hour");
        var minutestxt = document.querySelectorAll(".minute");
        var secondstxt = document.querySelectorAll(".second");

        //day
        if (days > 10) {
            daystxt[0].innerHTML = days;
            daystxt[1].innerHTML = days;
        }
        else if (days < 10) {
            daystxt[0].innerHTML = '0' + days;
            daystxt[1].innerHTML = '0' + days;
        }

        //hours
        if (hours > 10) {
            hourstxt[0].innerHTML = hours;
            hourstxt[1].innerHTML = hours;
        }
        else if (hours < 10) {
            hourstxt[0].innerHTML = '0' + hours;
            hourstxt[1].innerHTML = '0' + hours;
        }

        //minutes
        if (minutes > 10) {
            minutestxt[0].innerHTML = minutes;
            minutestxt[1].innerHTML = minutes;
        }
        else if (minutes < 10) {
            minutestxt[0].innerHTML = '0' + minutes;
            minutestxt[1].innerHTML = '0' + minutes;
        }

        // second
        if (seconds > 10) {
            secondstxt[0].innerHTML = seconds;
            secondstxt[1].innerHTML = seconds;
        }
        else if (seconds < 10) {
            secondstxt[0].innerHTML = '0' + seconds;
            secondstxt[1].innerHTML = '0' + seconds;
        }

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(SetTimerInterval);
            resetTXT();
        }
        const resetTXT = () => {
            for (let i = 0; i < 1; i++) {
                daystxt[i].innerHTML = "00";
                hourstxt[i].innerHTML = "00";
                minutestxt[i].innerHTML = '00';
                secondstxt[i].innerHTML = '00';
            }
        }
    }, 1000);
}

