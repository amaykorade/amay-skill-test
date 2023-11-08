const selectMenu = document.querySelectorAll("select"),
    currentTime = document.querySelector("h2"),
    timeList = document.querySelector("ul"),
    setAlarmBtn = document.querySelector(".set-alarm"),
    sound = document.querySelector(".sound");

let alarmTime;


for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    const option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    const option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    const option = `<option value="${i}">${i}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let AmPm = i == 1 ? "AM" : "PM";
    const option = `<option value="${AmPm}">${AmPm}</option>`;
    selectMenu[3].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),

        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        AmPm = "AM";

    if (h > 12) {
        h = h - 12;
        AmPm = "PM";
    }

    h = h == 12 ? h = "0" + 0 : h;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // console.log(`${h}:${m}:${s} ${AmPm}`);
    currentTime.innerText = `${h}:${m}:${s} ${AmPm}`;

    if (alarmTime == `${h}:${m}:${s} ${AmPm}`) {
        // sound.play();
        setInterval(() => {
            return alert("Time UP!! " + alarmTime)
        }, 1000)
    }

}, 1000);

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("delete");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// adding new alarm
function newAlarm() {
    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value} ${selectMenu[3].value}`

    alarmTime = time;

    if (time.includes("hours") || time.includes("minutes") || time.includes("seconds") || time.includes("ampm")) {
        return alert("Select the time, to set the alarm");
    }


    const li = document.createElement("li");
    li.innerText = alarmTime;
    timeList.append(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("delete");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

setAlarmBtn.addEventListener("click", newAlarm);
