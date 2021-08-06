

window.onload = function () {

    const start = document.getElementById('start')
    const pause = document.getElementById('pause')
    const reset = document.getElementById('reset')
    const minutesText = document.getElementById('minutesText')
    const secondsText = document.getElementById('secondsText')
    const logButton = document.getElementById('logBut')
    const inputText = document.getElementById('logText')
    const oderedList = document.getElementById('listText')

    var arr = []

    var minutes = 0;
    var second = 0;

    var timerInterval;

    start.addEventListener('click', function () {
        if (timerInterval === undefined) {
            timerInterval = setInterval(() => {
                second++;
                minutes = window.parseInt(second / 60);

                if (minutes <= 9) minutesText.innerHTML = "0" + minutes;
                else minutesText.innerHTML = minutes;

                if (second % 60 <= 9) { secondsText.innerHTML = "0" + second % 60; }
                else secondsText.innerHTML = second % 60;
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

    pause.addEventListener('click', function () {
        clearInterval(timerInterval)
        timerInterval = undefined;
    })

    logButton.addEventListener('click', function () {

        if (inputText.value != "") {
            oderedList.appendChild(getListItem(inputText.value, (minutes / 60) + ":" + (second % 60)));
            inputText.value = ""
        }

    }
    )


}

