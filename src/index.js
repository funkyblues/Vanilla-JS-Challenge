const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
// console.log(colors.length);

const btn = document.querySelector("button");

function changeBackgroundColor() {
  const colorOrder1 = Math.floor(Math.random() * colors.length);
  const colorOrder2 = Math.floor(Math.random() * colors.length);
  document.documentElement.style.setProperty(
    "--left-color",
    `${colors[colorOrder1]}`
  );
  document.documentElement.style.setProperty(
    "--right-color",
    `${colors[colorOrder2]}`
  );
}

btn.addEventListener("click", changeBackgroundColor);

// console.log(colors[colorOrder1]);
// console.log(colors[colorOrder2]);
// console.log(color1);
