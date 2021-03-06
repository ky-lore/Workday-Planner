function displayTime() {
  document.getElementById("currentDay").innerText = moment().format('MMMM Do YYYY, h:mm:ss a');
}

setInterval(displayTime, 1000)

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

function checkTimeClear() {
  var time = moment().hour();
  console.log(time)
  if (time < 9 || time > 17) {
    for (i = 9; i < 18; i++) {
      localStorage.removeItem(`${i}`)
    }
  }
}

//checkTimeClear();

function milToStandard() {
  for (i = 0; i < document.getElementsByClassName("hour").length; i++) {
    var milTime = document.getElementsByClassName("hour")[i].textContent;
    switch (milTime) {
      case "9:00":
        document.getElementsByClassName("hour")[i].textContent = "9 AM"
        break;
      case "10:00":
        document.getElementsByClassName("hour")[i].textContent = "10 AM"
        break;
      case "11:00":
        document.getElementsByClassName("hour")[i].textContent = "11 AM"
        break;
      case "12:00":
        document.getElementsByClassName("hour")[i].textContent = "12 PM"
        break;
      case "13:00":
        document.getElementsByClassName("hour")[i].textContent = "1 PM"
        break;
      case "14:00":
        document.getElementsByClassName("hour")[i].textContent = "2 PM"
        break;
      case "15:00":
        document.getElementsByClassName("hour")[i].textContent = "3 PM"
        break;
      case "16:00":
        document.getElementsByClassName("hour")[i].textContent = "4 PM"
        break;
      case "17:00":
        document.getElementsByClassName("hour")[i].textContent = "5 PM"
        break;
    }
  }
}

// milToStandard();

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
// --WHEN I refresh the page
// --THEN the saved events persist
