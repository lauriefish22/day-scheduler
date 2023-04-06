
var currentData = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
var currentHour = dayjs().hour();

$('#currentDay').text(currentData);
//when clicked, DOM elements will be used to show the item and time
$('.saveBtn').on('click', function () {
  console.log(this);
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');

  localStorage.setItem(time, text);
});
//grabbing DOM elements for the time of each block
function timeTracker() {
  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id');
    var plannerHour = timeBlockId.split('hour')[1];
    var existingNote = localStorage.getItem(timeBlockId);
    //console.log(existingNote);

    //finding out which color the line should change to in regard to past, present and future times
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


