const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcons = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// storing full name of all months in array
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(), // first day of month
        lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(), // last date of month
        lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(), // last day of month
        lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); // last date of prev month

    let liTag = "";

    // Creating li for previous month's last days
    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    // Creating li for all days of the current month
    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() &&
            currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    // Creating li for next month's first days
    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }

    // Passing current month and year as text
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcons.forEach(icon => {
    // Adding click event to both icons
    icon.addEventListener("click", () => {
        // If clicked icon is previous, decrement month; otherwise, increment it
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        // If month is less than 0 or greater than 11, update year and reset month
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // Update current year
            currMonth = date.getMonth(); // Update current month
        } else {
            date = new Date(); // Reset to current date
        }
        renderCalendar(); // Re-render the calendar
    });
});
