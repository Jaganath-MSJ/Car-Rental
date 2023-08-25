export function formatDate1(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateParts = dateString.split("-");
  const day = parseInt(dateParts[2], 10);
  const monthIndex = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[0], 10);
  const monthName = months[monthIndex];

  return monthName + " " + day + ", " + year;
}

export function formatDate2(dateString) {
  const dateParts = dateString.split("-");
  const day = parseInt(dateParts[2], 10);
  const monthIndex = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[0], 10);

  return day + "/" + monthIndex + "/" + (year % 100);
}

export function formatTime1(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  return `${hours12}:${String(minutes).padStart(2, "0")} ${period}`;
}
export function calculateDaysBetweenDates(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDifference = Math.abs(end - start);
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

export function formatDateTime1(dateTimeString) {
  return formatDate1(dateTimeString) + " " + formatTime1(dateTimeString);
}
