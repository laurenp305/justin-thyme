// WHEN I view the time blocks for that day each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block I can enter an event
// WHEN I refresh the page the saved events remain

// WHEN I open the planner the current day is displayed at the top of the calendar 
$(document).ready(function () {
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");

// Clear fields function
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

//Grabs hours from every time slot to compare to real time (past, present, future)
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

