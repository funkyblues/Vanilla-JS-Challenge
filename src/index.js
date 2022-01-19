const clockTitle = document.querySelector(".js-clock");

function countClock() {
  let xDay = new Date(2022, 11, 25, 0, 0, 0);
  let today = new Date();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();
  const todayHours = today.getHours();
  const todayMinutes = today.getMinutes();
  const todaySeconds = today.getSeconds();

  const xYear = xDay.getFullYear();
  const xMonth = xDay.getMonth();
  const xDate = xDay.getDate();
  const xHours = xDay.getHours();
  const xMinutes = xDay.getMinutes();
  const xSeconds = xDay.getSeconds();

  console.log(
    todayYear,
    todayMonth,
    todayDate,
    todayHours,
    todayMinutes,
    todaySeconds
  );
  console.log(xYear, xMonth, xDate, xHours, xMinutes, xSeconds);
}

countClock();
setInterval(countClock, 1000);
