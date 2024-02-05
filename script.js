document.addEventListener('DOMContentLoaded', function() {
    const mainHeading = document.getElementById('main-heading');
    const changeColorButton = document.getElementById('change-color');
    const toggleVisibilityButton = document.getElementById('toggle-visibility');
    const addElementButton = document.getElementById('add-element');
    const contentDiv = document.getElementById('content');

    changeColorButton.addEventListener('click', function() {
        mainHeading.style.color = mainHeading.style.color === 'red' ? 'navy' : 'red';
    });

    toggleVisibilityButton.addEventListener('click', function() {
        if (mainHeading.classList.contains('hidden')) {
            mainHeading.classList.remove('hidden');
        } else {
            mainHeading.classList.add('hidden');
        }
    });

    addElementButton.addEventListener('click', function() {
        const newElement = document.createElement('p');
        newElement.textContent = 'New Element Added!';
        contentDiv.appendChild(newElement);
    });
});