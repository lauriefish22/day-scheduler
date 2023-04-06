// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentData = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
var currentHour = dayjs().hour();

$('#currentDay').text(currentData);

$('saveBtn').on('click', function () {
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');

  localStorage.setItem(text, time);
});

function timeTracker() {
  $('.time-block').each(function () {
    var plannerHour = $(this).attr("id").split('hour')[1];


    if (plannerHour < currentHour) {
      $(this).addClass('past');
    } else if (plannerHour == currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })
}


$('#9am .description').val(localStorage.getItem('9am'));
$('#10am .description').val(localStorage.getItem('10am'));
$('#11am .description').val(localStorage.getItem('11am'));
$('#12pm .description').val(localStorage.getItem('12m'));
$('#1pm .description').val(localStorage.getItem('1pm'));
$('#2pm .description').val(localStorage.getItem('2pm'));
$('#3pm .description').val(localStorage.getItem('3pm'));
$('#4pm .description').val(localStorage.getItem('4pm'));
$('#5pm .description').val(localStorage.getItem('5pm'));

timeTracker();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

