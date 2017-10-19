function upperHalf(color) {
  context.fillStyle = color;
  context.fillRect(0, 0, 360, 120);
}

function lowerHalf(color) {
  context.fillStyle = color;
  context.fillRect(0, 120, 360, 120);
}

function upperThird(color) {
  context.fillStyle = color;
  context.fillRect(0, 0, 360, 80);
}

function middleThird(color) {
  context.fillStyle = color;
  context.fillRect(0, 80, 360, 80);
}

function lowerThird(color) {
  context.fillStyle = color;
  context.fillRect(0, 160, 360, 80);
}

function right(color) {
  context.fillStyle = color;
  context.fillRect(0, 0, 120, 240);
}

function center(color) {
  context.fillStyle = color;
  context.fillRect(120, 0, 120, 240);
}

function left(color) {
  context.fillStyle = color;
  context.fillRect(240, 0, 120, 240);
}
