// Retrieve the counter value from localStorage and display it on index.html
const drinkCount = parseInt(localStorage.getItem('drinkCount')) || 0;
document.getElementById('specialty-quantity').innerHTML = drinkCount;

// Update the "info-message" based on the value of drinkCount
const infoMessage = document.getElementById('info-message');

if (drinkCount === 0) {
infoMessage.innerHTML = "What are you waiting for?";
} else if (drinkCount >= 1 && drinkCount <= 9) {
infoMessage.innerHTML = "You've built some specialty drinks!";
} else {
infoMessage.innerHTML = "You're a Specialty Drink expert!";
}