let timer;
let elapsedTime = 0;
let running = false;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const lapsContainer = document.getElementById('laps');

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
    clearLaps();
});

lapBtn.addEventListener('click', () => {
    const reason = prompt('Why are you taking a lap?');
    if (reason) {
        const lapTime = formatTime(elapsedTime);
        addLap(reason, lapTime);
    }
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
    lapBtn.disabled = !running;
}

function formatTime(time) {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function addLap(reason, time) {
    const lapDiv = document.createElement('div');
    lapDiv.className = 'lap';
    lapDiv.textContent = `Lap at ${time} - Reason: ${reason}`;
    lapsContainer.appendChild(lapDiv);
}

function clearLaps() {
    lapsContainer.innerHTML = '';
}

// Initialize
updateTimeDisplay();
toggleButtons();
