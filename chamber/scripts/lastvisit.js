/*---------- LAST VISIT ----------*/

// Somewhere else in your code base set the last visit in localStorage

function displayDaysSinceLastVisit() {
    const visitsDisplay = document.querySelector('.daysSinceLastVisit');
    
    const lastVisit = Number(localStorage.getItem('lastVisit'));
    
    if (!lastVisit) {
        visitsDisplay.innerHTML = 'This is your first visit.';
        
        return;
    }
    
    const currentDate = Date.now();
    
    const difference = currentDate - lastVisit;
    const differenceInDays =difference / 84600000;
    
    visitsDisplay.innerHTML = differenceInDays.toFixed(0);
}

displayDaysSinceLastVisit();

localStorage.setItem('lastVisit', Date.now());