function toggleTaskList() {
    const taskList = document.getElementById('taskList');
    if (taskList.style.display === 'block') {
        taskList.style.display = 'none';
    } else {
        taskList.style.display = 'block';
    }
}

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const taskMessage = document.getElementById('taskMessage').value;

    const taskElement = document.createElement('div');
    taskElement.className = 'task';

    taskElement.innerHTML = `
        <h4>${taskName}</h4>
        <p>Date: ${taskDate}</p>
        <p>Time: ${startTime} - ${endTime}</p>
        <p>Note: ${taskMessage}</p>
    `;

    document.getElementById('taskList').appendChild(taskElement);

    document.getElementById('taskForm').reset();
});
