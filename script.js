
let so_phut = 0.1;
let timer;
let isRunning = false;
let timeLeft = so_phut * 60;
const display = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const alertSound = document.getElementById('alert-sound');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            }
            else {
                clearInterval(timer);
                isRunning = false;
                alertSound.play();
                alert('Thời gian đã đến, Nghỉ ngơi thôi');
            }
        }, 1000)
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = so_phut * 60;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();