var timerEl = document.getElementById("countdown")

function countdown() {
    var timeLeft = 10;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = " ";
            clearInterval(timeInterval);

            endQuiz();
        }, 1000);
}

countdown();