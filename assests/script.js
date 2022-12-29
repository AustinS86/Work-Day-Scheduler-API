// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function updateTime() {
    var today = dayjs();
    var timeslot9am = ("#hour-9");
    var timeslot10am = ("#hour-10");
    var timeslot11am = ("#hour-11");
    var timeslot12pm = ("#hour-12");
    var timeslot1pm = ("#hour-1");
    var timeslot2pm = ("#hour-2");
    var timeslot3pm = ("#hour-3");
    var timeslot4pm = ("#hour-4");
    var timeslot5pm = ("#hour-5");
    var saveBtn = $(".saveBtn");
    var timeslotElArray = [
        timeslot9am,timeslot10am,timeslot11am,timeslot12pm,timeslot1pm,timeslot2pm,timeslot3pm,timeslot4pm,timeslot5pm];
    $("#currentDay").text(today.format("dddd, MMMM D YYYY h:mm"));
        
    var current = dayjs().format("#currentDay");
    for (let i = 0; i < timeslotElArray.length; i++){
       timeslotElArray[i].removeClass("#past, #present, #future");

    if(current > timeslotElArray[i].attr("hour")){
            timeslotElArray[i].addClass("past");
        
        }else if (current === timeslotElArray[i].attr("hour")){
            timeslotElArray[i].addClass("present");

        }else{
           timeslotElArray[i].addClass("future");
        
        }
    }

    $("#hour-9  ").val(localStorage.getItem(".hours"));
    $("#hour-10 ").val(localStorage.getItem("hours"));
    $("#hour-11").val(localStorage.getItem("hour"));
    $("#hour-12").val(localStorage.getItem("hours"));
    $("#hour-1").val(localStorage.getItem("hours"));
    $("#hour-2 ").val(localStorage.getItem("hours"));
    $("#hour-3 ").val(localStorage.getItem("hours"));
    $("#hour-4 ").val(localStorage.getItem("hours"));
    $("#hour-5 ").val(localStorage.getItem("hours"));
    $(".saveBtn").on("click", function () {
        saveBtn.on("click", submit);
        var textarea = $(this).siblings(".hours").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(textarea, time);
 
    })
   
    
    });
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the day hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // day hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the day date in the header of the page.

