const clientId = 'b2ea1b3633f44d5a9b1bd1f5eee61466';
const redirectUri = 'https://bikesh-1.github.io/TaskChron1/Time/time.html';

let timer;
let elapsedTime = 0;
let running = false;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const loginBtn = document.getElementById('login-btn');
const playBtn = document.getElementById('play-btn');
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

loginBtn.addEventListener('click', () => {
    const scopes = 'user-read-playback-state user-modify-playback-state';
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;
    window.location.href = authUrl;
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

// Spotify Player
window.onSpotifyWebPlaybackSDKReady = () => {
    const token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');
    console.log('Access token:', token);

    if (token) {
        const player = new Spotify.Player({
            name: 'Web Playback SDK',
            getOAuthToken: cb => { cb(token); },
            volume: 0.5
        });

        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
            // Transfer playback to the Web Playback SDK
            fetch(`https://api.spotify.com/v1/me/player`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    device_ids: [device_id],
                    play: true
                })
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('Playback transferred to the Web Playback SDK');
            }).catch(error => {
                console.error('Failed to transfer playback:', error);
            });
        });

        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });

        player.addListener('initialization_error', ({ message }) => {
            console.error('Initialization error:', message);
        });

        player.addListener('authentication_error', ({ message }) => {
            console.error('Authentication error:', message);
        });

        player.addListener('account_error', ({ message }) => {
            console.error('Account error:', message);
        });

        player.addListener('player_state_changed', state => {
            console.log('Player state changed:', state);
        });

        player.connect();
    } else {
        console.error('Access token is missing');
    }
};

// Initialize
updateTimeDisplay();
toggleButtons();
