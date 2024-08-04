document.addEventListener('DOMContentLoaded', () => {
    const createGroupBtn = document.getElementById('create-group-btn');
    const groupsContainer = document.getElementById('groups-container');
    const notificationIcon = document.getElementById('notification-icon');
    const notificationCount = document.getElementById('notification-count');
    const searchFriendsInput = document.getElementById('search-friends');
    const toggleGroupsBtn = document.getElementById('toggle-groups-btn');
    const toggleFriendsListBtn = document.getElementById('toggle-friends-list');
    const friendsList = document.querySelector('.friends-list');
    let groupsVisible = true;
    let notifications = 0;

    // Function to create a new group
    createGroupBtn.addEventListener('click', () => {
        const groupName = prompt('Enter group name:');
        if (groupName) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'create';
            groupDiv.innerHTML = `
                <i class="fa-solid fa-user-group" style="color: #ffffff;"></i>
                <p>${groupName}</p>
                <i class="fa-solid fa-trash" style="color: #ffffff; cursor: pointer;" title="Remove Group"></i>
            `;
            groupDiv.querySelector('.fa-trash').addEventListener('click', function() {
                groupsContainer.removeChild(groupDiv);
            });
            groupsContainer.appendChild(groupDiv);
        }
    });

    // Function to handle notification icon click
    notificationIcon.addEventListener('click', () => {
        notifications++;
        notificationCount.textContent = notifications;
        notificationCount.style.display = 'inline';
    });

    // Function to toggle groups visibility
    toggleGroupsBtn.addEventListener('click', () => {
        groupsVisible = !groupsVisible;
        groupsContainer.style.display = groupsVisible ? 'flex' : 'none';
        toggleGroupsBtn.querySelector('p').textContent = groupsVisible ? 'Hide Groups' : 'Show Groups';
        toggleGroupsBtn.querySelector('i').className = groupsVisible ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    });

    // Function to search friends
    searchFriendsInput.addEventListener('input', () => {
        const query = searchFriendsInput.value.toLowerCase();
        document.querySelectorAll('.friend').forEach(friend => {
            const friendName = friend.querySelector('span').textContent.toLowerCase();
            friend.style.display = friendName.includes(query) ? 'flex' : 'none';
        });
    });

    // Function to toggle friends list visibility
    toggleFriendsListBtn.addEventListener('click', () => {
        const friendsVisible = friendsList.querySelectorAll('.friend').length > 0;
        friendsList.querySelectorAll('.friend').forEach(friend => {
            friend.style.display = friendsVisible ? 'none' : 'flex';
        });
        toggleFriendsListBtn.textContent = friendsVisible ? 'Expand' : 'Collapse';
    });

    // Initialize friend actions
    const handleFriendActions = () => {
        document.querySelectorAll('.friend-actions .fa-comment').forEach(chatIcon => {
            chatIcon.addEventListener('click', function() {
                const friendName = this.closest('.friend').querySelector('span').innerText;
                alert(`Initiate chat with ${friendName}`);
                // Add logic for initiating chat here
            });
        });

        document.querySelectorAll('.friend-actions .fa-phone').forEach(callIcon => {
            callIcon.addEventListener('click', function() {
                const friendName = this.closest('.friend').querySelector('span').innerText;
                alert(`Initiate voice call with ${friendName}`);
                // Add logic for initiating voice call here
            });
        });

        document.querySelectorAll('.friend-actions .fa-video').forEach(videoIcon => {
            videoIcon.addEventListener('click', function() {
                const friendName = this.closest('.friend').querySelector('span').innerText;
                alert(`Initiate video call with ${friendName}`);
                // Add logic for initiating video call here
            });
        });
    };

    handleFriendActions();
});
