document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const taskMessage = document.getElementById('taskMessage').value;

    // Create task element
    const taskElement = document.createElement('div');
    taskElement.className = 'task';

    taskElement.innerHTML = `
        <h4>${taskName}</h4>
        <p>Date: ${taskDate}</p>
        <p>Time: ${startTime} - ${endTime}</p>
        <p>Note: ${taskMessage}</p>
    `;

    // Append task to task list
    document.getElementById('taskList').appendChild(taskElement);

    // Clear form
    document.getElementById('taskForm').reset();
});
