document.addEventListener('DOMContentLoaded', function() {
    const token = 'YOUR_SPOTIFY_ACCESS_TOKEN'; // Replace with your OAuth token
    const player = new Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: cb => { cb(token); }
    });

    // Error handling
    player.on('initialization_error', e => console.error(e));
    player.on('authentication_error', e => console.error(e));
    player.on('account_error', e => console.error(e));
    player.on('playback_error', e => console.error(e));

    // Playback status updates
    player.on('player_state_changed', state => console.log(state));

    // Ready
    player.on('ready', data => {
        console.log('Ready:', data);

        document.getElementById('play').addEventListener('click', () => {
            player.resume().then(() => console.log('Playback resumed!'));
        });

        document.getElementById('pause').addEventListener('click', () => {
            player.pause().then(() => console.log('Playback paused!'));
        });

        document.getElementById('next').addEventListener('click', () => {
            player.nextTrack().then(() => console.log('Skipped to next track!'));
        });

        document.getElementById('prev').addEventListener('click', () => {
            player.previousTrack().then(() => console.log('Skipped to previous track!'));
        });

        document.getElementById('search').addEventListener('click', () => {
            const trackName = document.getElementById('track-name').value;
            searchTrack(trackName).then(uri => {
                if (uri) {
                    player.seek(0).then(() => {
                        player.play({ spotify_uri: uri })
                            .then(() => console.log('Playback started!'))
                            .catch(err => console.error('Playback error:', err));
                    });
                } else {
                    console.log('Track not found');
                }
            });
        });
    });

    // Connect to the player!
    player.connect();

    // Search for a track by name
    function searchTrack(trackName) {
        return fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(trackName)}&type=track&limit=1`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.tracks.items.length > 0) {
                return data.tracks.items[0].uri; // Return the URI of the first track found
            }
            return null; // No track found
        })
        .catch(err => {
            console.error('Search error:', err);
            return null;
        });
    }
});
