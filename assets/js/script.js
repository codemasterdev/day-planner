// CURRENT hourId
var currentHourMoment = moment().format('HH');

// CURRENT DAY VARIABLE
var currentDayMoment = moment().format("dddd MMMM Do");
$("#currentDay").html(currentDayMoment);

// LOAD TASKS FUNCTION 
function loadTasks() {
    // CLEAR TASK IF NO LONGER THE SAME DAY
    if (currentHourMoment > 12) {
        localStorage.clear();

    };


    Object.keys(localStorage).forEach((key) => {
        $('textarea').each(function () {
            if ($(this).attr('id') == key) {
                $(this).val(localStorage.getItem(key));
            }
        });
    });
};

//  CHECK TIME FUNCTION 
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

//  SAVE TASKS FUNCTION
function saveTasks() {
    // Create the task with a key value pair to pass to local storage
    var id = $(this).parent().children('textarea').attr('id');
    var task = $(this).parent().children('textarea').val();
    localStorage.setItem(id, task);
};

loadTasks();
checkTime();
$('.saveBtn').click(saveTasks);

