document.getElementById("currentDay").innerText = moment().format('MMMM Do YYYY, h:mm a');

function getCurrentHour() {
  var time = moment().hour();
  return time;
}

function applyTimeStyling() {
  //var hour = 9;
  for (i = 9; i <= 17; i++) {
    var setTime = parseInt(document.getElementById(`${i}`).textContent);
    var timeSlot = document.getElementById(`textarea-${i}`);

    if (setTime < getCurrentHour()) {
      timeSlot.style.backgroundColor = "dimgray";
    } else if (setTime === getCurrentHour()) {
      timeSlot.style.backgroundColor = "pink";
    } else {
      timeSlot.style.backgroundColor = "lightgreen";
    }
  }
}

applyTimeStyling();

var hours = document.querySelectorAll(".saveBtn").length;

for (i = 0; i < hours; i++) {
  document.querySelectorAll(".saveBtn")[i].addEventListener('click', (event) => {
    //console.log('aha')
    //let btn = event.target.parentNode
    let userInput = event.target.parentNode.getElementsByClassName("tbox")[0].value;
    //console.log(userInput)
    let time = event.target.parentNode.getElementsByClassName("hour")[0].textContent.slice(0, -3);
    //console.log(time)
    // console.log(btn.getElementsByClassName("tbox")[0].value)
    localStorage.setItem(time, userInput);
    console.log(localStorage)
  })
}


function initializeLocalStorage() {
  for (i = 9; i < 18; i++) {
    let storedItem = window.localStorage.getItem(i)
    let userInput = document.getElementsByClassName("tbox")[i - 9];
    userInput.innerText = storedItem;
    console.log(userInput)
    console.log(storedItem)
  }
}

initializeLocalStorage();

// --GIVEN I am using a daily planner to create a schedule
// --WHEN I open the planner
// --THEN the current day is displayed at the top of the calendar
// --WHEN I scroll down
// --THEN I am presented with timeblocks for standard business hours
// --WHEN I view the timeblocks for that day
// --THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// --WHEN I click into a timeblock
// --THEN I can enter an event
// --WHEN I click the save button for that timeblock
// --THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist