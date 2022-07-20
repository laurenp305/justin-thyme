$( document ).ready(function() {
//Displays date and current time
function timer() {
  var todayDate = moment().format('dddd, MMM Do YYYY');
  var currentTodayDate = document.querySelector("#currentDay");
  var time = moment().format('h:mm:ss a');
  var currentTime = document.querySelector("#currentTime");
  currentTime.textContent = time;
  currentTodayDate.textContent = todayDate;
}

setInterval(timer, 1000)

// // Clear fields function
const clearFieldsBtn = document.getElementById('clearFieldsBtn');

clearFieldsBtn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form
  event.preventDefault();

  const inputs = document.querySelectorAll('textarea');

  inputs.forEach(input => {
    input.value = '';
  });
});

//WHEN I view the time blocks for that day each time block is color-coded to indicate whether it is in the past, present, or future
function colorCoding() { 

  var currentHour = moment().hour();
  $("textarea").each(function() {
      var elementHour = Math.abs(parseInt($(this).parent().attr("id").split("hour")[1]));

      if (elementHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    else if (elementHour === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
    else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
})
}

// WHEN I refresh the page the saved events remain
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });
  
// Takes items from local storage and places them in appropriate time blocks
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));

  //pushes color coding function
  colorCoding();
});

