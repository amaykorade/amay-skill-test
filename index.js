const selectMenu = document.querySelectorAll("select"),
    currentTime = document.querySelector("h1"),
    timeList = document.querySelector("ul"),
    setAlarmBtn = document.querySelector(".set-alarm"),
    deleteBtn = document.querySelector(".delete");

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

}, 1000);

// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("delete");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }

// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }


function setAlarm() {
    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value} ${selectMenu[3].value}`

    alarmTime = time;

    if (time.includes("hours") || time.includes("minutes") || time.includes("seconds") || time.includes("ampm")) {
        return alert("Select the time, to set the alarm");
    }


    // console.log(time);
    const li = document.createElement("li");
    li.className = "close";
    // const delBtn = document.createElement("button");
    // delBtn.className = "close";
    // delBtn.innerText = "delete";
    li.innerText = alarmTime;
    timeList.append(li);
    // timeList.append(delBtn);

    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("delete");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}



setAlarmBtn.addEventListener("click", setAlarm);