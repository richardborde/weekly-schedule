function generateSchedule() {
    const executivesInput = document.getElementById('executives').value;
    const weekdaysInput = document.getElementById('weekdays').value;
    const executives = executivesInput.split(',').map(name => name.trim());
    const weekdays = weekdaysInput.split(',').map(day => day.trim());

    const scheduleDiv = document.getElementById('schedule');
    scheduleDiv.innerHTML = '';

    if (executives.length < weekdays.length) {
        alert('There are more weekdays than executives.');
        return;
    }

    const shuffledExecutives = shuffleArray(executives);

    weekdays.forEach((day, index) => {
        const p = document.createElement('p');
        p.textContent = `${day}: ${shuffledExecutives[index]}`;
        scheduleDiv.appendChild(p);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
