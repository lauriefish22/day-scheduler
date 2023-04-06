// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentData = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
var currentHour = dayjs().hour();

$('#currentDay').text(currentData);

$('.saveBtn').on('click', function () {
  console.log(this);
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');

  localStorage.setItem(time, text);
});

function timeTracker() {
  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id');
    var plannerHour = timeBlockId.split('hour')[1];
    var existingNote = localStorage.getItem(timeBlockId);
    //console.log(existingNote);
    console.log(plannerHour, currentHour);

    if (plannerHour < currentHour) {
      $(this).addClass('past');
    } else if (plannerHour == currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })
}


$('#hour9am .description').val(localStorage.getItem('hour9am'));
$('#hour10am .description').val(localStorage.getItem('hour10am'));
$('#hour11am .description').val(localStorage.getItem('hour11am'));
$('#hour12pm .description').val(localStorage.getItem('hour12m'));
$('#hour1pm .description').val(localStorage.getItem('hour1pm'));
$('#hour2pm .description').val(localStorage.getItem('hour2pm'));
$('#hour3pm .description').val(localStorage.getItem('hour3pm'));
$('#hour4pm .description').val(localStorage.getItem('hour4pm'));
$('#hour5pm .description').val(localStorage.getItem('hour5pm'));

timeTracker();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

