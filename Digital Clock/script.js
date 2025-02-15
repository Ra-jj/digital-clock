function clock() {
  //the index of below array corresponds to the numeric month returned by Date.getMonth()
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    // the index of this array corresponds to the numeric day returned by Date.getDay()
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date(); //creates a new Date object, today, which contains the current date and time.

  //id="Date"  below updates its content to show the current date in a readable format
  document.getElementById("Date").innerHTML =
    dayNames[today.getDay()] + //today.getDay() returns the index of the current day which fetches from dayNames[]
    " " +
    today.getDate() + // today.getDay() returns the index of the current day
    " " +
    monthNames[today.getMonth()] + //today.getMonth() returns the index of the current month which fetches from monthNames[]
    " " +
    today.getFullYear(); //today.getFullYear() returns the four-digit year

  var h = today.getHours(); //today.getHours() retrieves the current hour
  var m = today.getMinutes(); // today.getMinutes() retrieves the current minute
  var s = today.getSeconds(); // today.getSeconds() retrieves the current second

  //below code if h, m, or s is less than 10, a leading zero ('0') is added to ensure two-digit formatting
  h = h < 10 ? "0" + h : h; //ex- If h = 9, it becomes "09"
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //Updates the elements with the id="hours", id="min", and id="sec" to display the formatted hour, minute, and sec
  document.getElementById("hours").innerHTML = h;
  document.getElementById("min").innerHTML = m;
  document.getElementById("sec").innerHTML = s;
}

const inter = setInterval(clock, 400); //ensures that the displayed time updates dynamically
