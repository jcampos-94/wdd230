var currentDate = new Date();
var formattedDate = currentDate.toLocaleString('en-US', {
year: 'numeric',
month: 'short',
day: '2-digit',
hour: '2-digit',
minute: '2-digit',
second: '2-digit'
});

document.getElementById("form-loaded-date").value = formattedDate;