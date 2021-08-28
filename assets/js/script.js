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

