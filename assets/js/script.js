// WHEN I open the planner the current day is displayed at the top of the calendar 
$(document).ready(function () {
    let NowMoment = moment().format('MMMM Do YYYY');
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");

// Button function to clear local storage and contents
$("#clearFieldsBtn").click(function (event) {
  event.preventDefault;
  $("textarea").val("");
  localStorage.clear();
});
