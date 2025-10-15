function changeColor() {
  const colorBox = document.getElementById("colorBox");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colorBox.style.backgroundColor = randomColor;
}
