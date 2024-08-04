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
            const dateKey = formatDate(year, month, date);

            if (notes[dateKey]) {
                dateDiv.classList.add('date-with-note');
            }

            dateDiv.addEventListener('click', function() {
                if (selectedDate) {
                    const prevSelectedDiv = document.querySelector(`.selected-date`);
                    if (prevSelectedDiv) {
                        prevSelectedDiv.classList.remove('selected-date');
                    }
                }

                selectedDate = dateKey;
                selectedDateSpan.textContent = selectedDate;
                noteInput.value = '';
                dateDiv.classList.add('selected-date');
                renderNotes();
            });

            datesContainer.appendChild(dateDiv);
        }
    }

    function renderNotes() {
        notesList.innerHTML = '';
        if (notes[selectedDate]) {
            notes[selectedDate].forEach((noteText, index) => {
                const noteItem = document.createElement('div');
                noteItem.className = 'note-item';

                const noteTextSpan = document.createElement('span');
                noteTextSpan.textContent = noteText;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.className = 'delete-note-btn';
                deleteBtn.addEventListener('click', function() {
                    notes[selectedDate].splice(index, 1);
                    if (notes[selectedDate].length === 0) {
                        delete notes[selectedDate];
                    }
                    localStorage.setItem('notes', JSON.stringify(notes));
                    renderNotes();
                    renderCalendar(currentYear, currentMonth);
                });

                noteItem.appendChild(noteTextSpan);
                noteItem.appendChild(deleteBtn);
                notesList.appendChild(noteItem);
            });
        }
    }

    saveNoteBtn.addEventListener('click', function() {
        if (selectedDate) {
            if (!notes[selectedDate]) {
                notes[selectedDate] = [];
            }
            const newNote = noteInput.value.trim();
            if (newNote) {
                notes[selectedDate].push(newNote);
                localStorage.setItem('notes', JSON.stringify(notes));
                renderNotes();
                renderCalendar(currentYear, currentMonth);
                noteInput.value = ''; // Clear input after saving
            } else {
                alert('Please enter a note.');
            }
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
