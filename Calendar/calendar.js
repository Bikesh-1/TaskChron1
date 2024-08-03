document.addEventListener('DOMContentLoaded', function() {
    const calendarHeader = document.getElementById('current-month');
    const datesContainer = document.getElementById('dates');
    const selectedDateSpan = document.getElementById('selected-date');
    const noteInput = document.getElementById('note-input');
    const saveNoteBtn = document.getElementById('save-note');
    const notesList = document.getElementById('notes-list');

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let selectedDate = null;
    let notes = JSON.parse(localStorage.getItem('notes')) || {};

    function formatDate(year, month, date) {
        const day = String(date).padStart(2, '0');
        const monthFormatted = String(month + 1).padStart(2, '0');
        return `${day}-${monthFormatted}-${year}`;
    }

    function renderCalendar(year, month) {
        const now = new Date(year, month);
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        calendarHeader.textContent = now.toLocaleDateString('en-us', { month: 'long', year: 'numeric' });

        datesContainer.innerHTML = '';
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('empty');
            datesContainer.appendChild(emptyDiv);
        }

        for (let date = 1; date <= lastDate; date++) {
            const dateDiv = document.createElement('div');
            dateDiv.textContent = date;
            dateDiv.addEventListener('click', function() {
                selectedDate = formatDate(year, month, date);
                selectedDateSpan.textContent = selectedDate;
                noteInput.value = notes[selectedDate] || '';
                renderNotes();
            });
            datesContainer.appendChild(dateDiv);
        }
    }

    function renderNotes() {
        notesList.innerHTML = '';
        if (notes[selectedDate]) {
            const noteItem = document.createElement('div');
            noteItem.className = 'note-item';
            noteItem.textContent = notes[selectedDate];
            notesList.appendChild(noteItem);
        }
    }

    saveNoteBtn.addEventListener('click', function() {
        if (selectedDate) {
            notes[selectedDate] = noteInput.value;
            localStorage.setItem('notes', JSON.stringify(notes));
            renderNotes();
        } else {
            alert('Please select a date first.');
        }
    });

    document.getElementById('prev-month').addEventListener('click', function() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        renderCalendar(currentYear, currentMonth);
    });

    document.getElementById('next-month').addEventListener('click', function() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        renderCalendar(currentYear, currentMonth);
    });

    renderCalendar(currentYear, currentMonth);
});
