const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

//создаем дисплей#################################################################################
const displayBox = document.createElement("div");
displayBox.classList.add("display-box");
displayBox.style.display = "flex";
displayBox.style.width = "100%";
displayBox.style.justifyContent = "space-around";
displayBox.style.marginBottom = "auto";
const display1 = document.createElement("div");
display1.classList.add("display1");
const display2 = document.createElement("div");
display2.classList.add("display2");
displayBox.append(display1, display2);
body.prepend(displayBox);

//создаем кнопки#################################################################################
const startBtn = document.createElement("button");
startBtn.textContent = "Start";
startBtn.style.marginTop = "100px";
startBtn.style.marginBottom = "30px";
body.append(startBtn);

const endBtn = document.createElement("button");
endBtn.classList.add("end-btn");
endBtn.textContent = "End";
body.append(endBtn);
clearBody();
//прослушка на endBtn#####################################
endBtn.addEventListener("click", () => {
  clearBody();
});
//прослушка на startBtn#####################################
startBtn.addEventListener("click", () => {
  startBtn.textContent = "Next";
  const endBtn = document.querySelector(".end-btn");
  const displayBox = document.querySelector(".display-box");
  endBtn.style.display = "inline";
  displayBox.style.display = "flex";

  changeBackground();
});

//меняем бекграунд#################################################################################
function changeBackground() {
  const display1 = document.querySelector(".display1");
  let color1 = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
  display1.textContent = color1;

  const display2 = document.querySelector(".display2");
  let color2 = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
  display2.textContent = color2;

  body.style.background = `linear-gradient(
    to right,
    ${color1} 0%,
    ${color2} 100%
  )`;
}

//создаем рандомный цвет#################################################################################
function getRandomColor() {
  return Math.floor(Math.random() * (255 - 0) + 0);
}

//очищаем боди#################################################################################
function clearBody() {
  body.style.background = "white";
  endBtn.style.display = "none";
  displayBox.style.display = "none";
}