// Check if the middle mouse button was clicked
function checkMiddleClick(event) {
    if (event.button === 1) {
      redirectToPage();
    }
  }

function redirectToJoin() {
    window.location.href = "join.html";
  }