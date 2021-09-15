const button = document.querySelector("#button");
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const background = document.querySelector(".container");
const palette = document.querySelector("#palette");

let color_value = [
  ["#ffffff", "#000000"],
  ["#ffffff", "#000000"],
  ["#ffffff", "#000000"],
  ["#ffffff", "#000000"],
];

// color change
function create_color() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// when chlick button
button.addEventListener("click", () => {
  let color;
  if (checkbox1.checked === false) {
    color = create_color();
    color1.innerHTML = color;
  }

  if (checkbox2.checked === false) {
    color = create_color();
    color2.innerHTML = color;
  }
  const palette_number = palette.value[7];
  const c1 = color1.innerHTML;
  const c2 = color2.innerHTML;
  color_value[palette_number - 1][0] = c1;
  color_value[palette_number - 1][1] = c2;
  const text = "linear-gradient(90deg," + c1 + "," + c2 + ")";
  background.style.background = text;
});

// copy function
function copy(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert("copied!");
}

// change select
const palette_control = () => {
  const palette_number = palette.value[7];
  color2.innerHTML = color_value[palette_number - 1][0];
  color1.innerHTML = color_value[palette_number - 1][1];
  const c1 = color1.innerHTML;
  const c2 = color2.innerHTML;
  const text = "linear-gradient(90deg," + c1 + "," + c2 + ")";
  background.style.background = text;
};
