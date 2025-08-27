var timeText = document.querySelector('.container h2');
var timeStatus = document.querySelector('#time-status');
var dayText = document.querySelector('#day-text');
var dateText = document.querySelector('#date-text');
var icon = document.querySelector('#icon');

var allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Date setup
let dateTmpObj = new Date();
let day = dateTmpObj.getDate();
let month = dateTmpObj.getMonth() + 1;
let year = dateTmpObj.getFullYear();

day = day < 10 ? `0${day}` : day;
month = month < 10 ? `0${month}` : month;

let dateStr = `${day}/${month}/${year}`;
dateText.innerHTML = dateStr;
dayText.innerHTML = allDays[dateTmpObj.getDay()];

// Clock function
function getCurrentTime() {
  let dateObj = new Date();
  let hour = dateObj.getHours();
  let mins = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();

  // Change icon depending on time
  if (hour >= 0 && hour < 12) {
    icon.setAttribute('class', 'ri-sun-foggy-fill');
  } else if (hour >= 12 && hour < 18) {
    icon.setAttribute('class', 'ri-sun-fill');
  } else {
    icon.setAttribute('class', 'ri-moon-fill');
  }

  let timeStatusText = hour < 12?"AM":"PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour = 0 ? 12 : hour; // Fix for midnight/noon

  // Formatting
  if (hour < 10) hour = `0${hour}`;
  if (mins < 10) mins = `0${mins}`;
  if (seconds < 10) seconds = `0${seconds}`;

  let completeTime = `${hour}:${mins}:${seconds}`;
  timeText.innerHTML = completeTime;
  timeStatus.innerHTML = timeStatusText;
}

// Update every second
setInterval(getCurrentTime, 1000);
getCurrentTime(); // Call once immediately
