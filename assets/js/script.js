// CURRENT hourId
var currentHourMoment = moment().format('HH');

// CURRENT DAY VARIABLE
var currentDayMoment = moment().format("dddd MMMM Do");
$("#currentDay").html(currentDayMoment);

// LOAD TASKS FUNCTION 
function loadTasks() {

    // if (currentHourMoment === 0) {
    //     localStorage.clear();

    // };

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
    // LOOP THROUGH TEXT AREA
    $('textarea').each(function () {

        if ($(this).attr('id') == currentHourMoment) {
            $(this).addClass('present');
        }
        else if ($(this).attr('id') < currentHourMoment) {
            $(this).addClass('past');
        }
        else if ($(this).attr('id') > currentHourMoment) {
            $(this).addClass('future');
        }
        setInterval(checkTime, (1000 * 60));
    })
};

//  SAVE TASKS FUNCTION
function saveTasks() {

    var id = $(this).parent().children('textarea').attr('id');
    var task = $(this).parent().children('textarea').val();
    console.log(id, task);
    localStorage.setItem(id, task);

};

loadTasks();
checkTime();
$('.saveBtn')
    .click(saveTasks);