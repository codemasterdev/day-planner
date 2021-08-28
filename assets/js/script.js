// CURRENT DAY VARIABLE
var currentDayMoment = moment().format("dddd MMMM Do");
$("#currentDay").html(currentDayMoment);

// CURRENT HOUR ID
const currentHourMoment = moment().format('HH');

// * CHECK TIME FUNCTION *
function checkTime() {
    // Loop through each textarea
    $('textarea').each(function () {
        // Set background color class based on matching id with current hour
        if ($(this).attr('id') == currentHourMoment) {
            $(this).addClass('present');
        }
        else if ($(this).attr('id') < currentHourMoment) {
            $(this).addClass('past');
        }
        else if ($(this).attr('id') > currentHourMoment) {
            $(this).addClass('future');
        }
        // Check time and apply classes every minute
        setInterval(checkTime, (1000 * 60));
    })
};

// * LOAD TASKS FUNCTION *
function loadTasks() {
    // If task no longer for the current day, clear it from storage
    if (currentHourMoment > 17) {
        localStorage.clear();
        window.location.reload;
    };

    // Display all tasks
    Object.keys(localStorage).forEach((key) => {
        $('textarea').each(function () {
            if ($(this).attr('id') == key) {
                $(this).val(localStorage.getItem(key));
            }
        });
    });
};

// * SAVE TASKS ON BUTTON CLICK FUNCTION *
function saveTasks() {
    // Create the task with a key value pair to pass to local storage
    let id = $(this).parent().children('textarea').attr('id');
    let task = $(this).parent().children('textarea').val();
    localStorage.setItem(id, task);
};

loadTasks();
checkTime();
$('.saveBtn').click(saveTasks);
