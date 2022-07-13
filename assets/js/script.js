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

  //grabs hour from each time slot and compares it to real time
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
