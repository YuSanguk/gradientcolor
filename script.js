const button = document.querySelector("#button");
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const background = document.querySelector(".container");

function create_color() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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

  const c1 = color1.innerHTML;
  const c2 = color2.innerHTML;
  const text = "linear-gradient(90deg," + c1 + "," + c2 + ")";
  background.style.background = text;
});

function copy(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert('Copied!');
}
