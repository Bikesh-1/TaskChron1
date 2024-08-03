let timer;
let elapsedTime = 0;
let running = false;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', () => {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 1000);
        toggleButtons();
    }
});

stopBtn.addEventListener('click', () => {
    if (running) {
        running = false;
        clearInterval(timer);
        toggleButtons();
    }
});

resetBtn.addEventListener('click', () => {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    updateTimeDisplay();
    toggleButtons();
});

function updateTime() {
    elapsedTime++;
    updateTimeDisplay();
}

function updateTimeDisplay() {
    const hours = Math.floor(elapsedTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function toggleButtons() {
    startBtn.disabled = running;
    stopBtn.disabled = !running;
    resetBtn.disabled = running;
}

// Initialize
updateTimeDisplay();
toggleButtons();
