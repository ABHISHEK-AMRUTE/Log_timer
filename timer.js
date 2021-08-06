

window.onload = function () {

    const start = document.getElementById('start')
    const reset = document.getElementById('reset')
    const minutesText = document.getElementById('minutesText')
    const secondsText = document.getElementById('secondsText')
    var minutes = 0;
    var second = 0;

    var timerInterval;

    start.addEventListener('click', function () {
        if (timerInterval === undefined) {
            timerInterval = setInterval(() => {
                second++;
                minutes = window.parseInt(second / 60);

                if(minutes <=9) minutesText.innerHTML = "0"+minutes;
                else minutesText.innerHTML = minutes;
               
                if(second %60<=9) {   secondsText.innerHTML = "0" + second %60;}
                else secondsText.innerHTML = second %60;
            }, 1000);
        }
    })


    reset.addEventListener('click', function () {
        clearInterval(timerInterval)
        timerInterval = undefined;
        second = 0;
        minutesText.innerHTML = "00";
        secondsText.innerHTML = "00";
    })


}

