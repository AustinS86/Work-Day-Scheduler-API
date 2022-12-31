// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// import localizedFormat from ('dayjs/plugin/localizedFormat')
// var localizedFormat = require('dayjs/plugin/localizedFormat');
// console.log(localizedFormat);
// dayjs.extend(localizedFormat);
//console.log(dayjs().format('llll'))
// console.log(dayjs().format('LLLL'))

$(function updateTime() {
    var today = dayjs();
    var timeslot9am = ("#9AM");
    var timeslot10am = ("#10AM");
    var timeslot11am = ("#11AM");
    var timeslot12pm = ("#12PM");
    var timeslot1pm = ("#1PM");
    var timeslot2pm = ("#2PM");
    var timeslot3pm = ("#3PM");
    var timeslot4pm = ("#4PM");
    var timeslot5pm = ("#5PM");
    var saveBtn = document.querySelector(".fas fa-save");
    var timeSlot = [
        timeslot9am, timeslot10am, timeslot11am, timeslot12pm, timeslot1pm, timeslot2pm, timeslot3pm, timeslot4pm, timeslot5pm];
    $("#currentDay").text(today.format("dddd, MMMM D YYYY h:mm:ss"));

    timeChange();
    setInterval(function () {
        $("#currentDay").text(dayjs().format("dddd, MMMM D YYYY h:mm:ss"));
    }, 1000)

    renderTask();
    function renderTask() {
        var textarea = localStorage.getItem(".description");
        var time = localStorage.getItem(".saveBtn");
        if (!textarea || !time) {
            return;
        }

    }
    saveBtn = addEventListener("click", function (event) {
        event.preventDefault();
        var textarea = document.getElementById(".time-block").value;
        var time = document.getElementById(".saveBtn").value;

        localStorage.setItem(".time-block", textarea);
        localStorage.setItem(".saveBtn", time);
        renderTask();
    })





    function timeChange() {
        var currentHour = dayjs().hour();
        console.log(currentHour)
        $('.time-block').each(function () {
            console.log($(this));
            console.log($(this).attr("id").split('-')[1]);
            var Time = parseInt($(this).attr("id").split('-')[1]);  // --> [, 9]

            if (Time < currentHour) {
                $(this).addClass("past");
            } else if (Time === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }

});

function init() {
    //renderTask();

    init();
}
// $("#-9  ").val(localStorage.getItem("hours"));
// $("#-10 ").val(localStorage.getItem("hours"));
 //$("#-11").val(localStorage.getItem(""));
 //$("#-12").val(localStorage.getItem("hours"));
 //$("#-1").val(localStorage.getItem("hours"));
 //$("#-2 ").val(localStorage.getItem("hours"));
 //$("#-3 ").val(localStorage.getItem("hours"));
 //$("#-4 ").val(localStorage.getItem("hours"));
 //$("#-5 ").val(localStorage.getItem("hours"));
 //$(".saveBtn").on("click", function () {
 //console.log("saveBtn");
 //saveBtn.on("click", timeslotArray );