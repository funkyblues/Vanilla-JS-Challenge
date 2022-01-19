const clockTitle = document.querySelector(".js-clock");

function countClock() {
  let xDay = new Date(2022, 11, 25, 0, 0, 0);
  let today = new Date();

  let diffInTotalTime = xDay.getTime() - today.getTime(); // 이거는 ms단위. 총 시간
  let DIVIDE_CONSTANT = 1000 * 60 * 60 * 24;
  let diffDays = Math.floor(diffInTotalTime / DIVIDE_CONSTANT);
  let diffHours = String(
    Math.floor((diffInTotalTime / DIVIDE_CONSTANT - diffDays) * 24)
  ).padStart(2, "0");
  let diffMinutes = String(
    Math.floor((diffInTotalTime / DIVIDE_CONSTANT - diffDays) * 24 * 60) -
      diffHours * 60
  ).padStart(2, "0");
  let diffSeconds = String(
    Math.floor(
      (diffInTotalTime / DIVIDE_CONSTANT - diffDays) * 24 * 60 * 60 -
        diffHours * 60 * 60 -
        diffMinutes * 60
    )
  ).padStart(2, "0");
  clockTitle.innerText =
    `${diffDays}d ${diffHours}h ${diffMinutes}m ${diffSeconds}s`.padStart(
      2,
      "0"
    );
}
// 토큰 뭐임?
countClock();
setInterval(countClock, 1000);
