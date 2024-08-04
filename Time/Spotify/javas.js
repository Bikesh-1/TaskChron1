document.addEventListener('DOMContentLoaded', function() {
    const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with your YouTube Data API key

    // Load the IFrame Player API code asynchronously
    let tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;

    // Create an iframe player after the API code downloads
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('player', {
            height: '315',
            width: '560',
            videoId: '',
            events: {
                'onReady': onPlayerReady
            }
        });
    };

    function onPlayerReady(event) {
        // The player is ready
    }

    document.getElementById('search').addEventListener('click', () => {
        const query = document.getElementById('track-name').value;
        searchYouTube(query).then(videoId => {
            if (videoId) {
                player.loadVideoById(videoId);
            } else {
                console.log('No video found');
            }
        });
    });

    function searchYouTube(query) {
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.items.length > 0) {
                    return data.items[0].id.videoId; // Return the ID of the first video found
                }
                return null; // No video found
            })
            .catch(error => {
                console.error('Search error:', error);
                return null;
            });
    }
});
