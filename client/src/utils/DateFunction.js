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
