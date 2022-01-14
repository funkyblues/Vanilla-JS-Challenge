const html = document.querySelector("html");
let windowInnerWidth = window.innerWidth;

window.onresize = function() {
  // console.log(window.innerWidth);
  windowInnerWidth = window.innerWidth;
  if (windowInnerWidth < 600) {
    html.style.backgroundColor = "#2E8CD5";
  }
  else if (windowInnerWidth < 1000) {
    html.style.backgroundColor = "#924EAC";
  }
  else if (windowInnerWidth < 1500) {
    html.style.backgroundColor = "#f5d20a";
  }
}

