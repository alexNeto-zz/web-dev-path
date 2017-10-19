function canvasInit(id) {
  canvas = osc.o(id);
  context = canvas.getContext("2d");
  osc.s(canvas).border = "1px solid black";
}

function japan(id) {
  canvasInit(id);
  context.fillStyle = "#FF355E";
  context.beginPath();
  context.moveTo(180, 120);
  context.arc(180, 120, 70, 0, Math.PI * 2, false);
  context.closePath();
  context.fill();
}

function poland(id) {
  canvasInit(id);
  pieceFlags.upperHalf('white');
  pieceFlags.lowerHalf("#ff355e");
}

function germany(id) {
  canvasInit(id);
  pieceFlags.upperThird("#000000");
  pieceFlags.middleThird("#ff0000");
  pieceFlags.lowerThird("#ffcc00");
}

function rusland(id) {
  canvasInit(id);
  pieceFlags.upperThird("white");
  pieceFlags.middleThird("blue");
  pieceFlags.lowerThird("red");
}

function ukraine(id) {
  canvasInit(id);
  pieceFlags.upperHalf("blue");
  pieceFlags.lowerHalf("#ffcc00");
}

function italy(id) {
  canvasInit(id);
  pieceFlags.right("green");
  pieceFlags.center("white");
  pieceFlags.left("red");
}

function toImg(id) {
  osc.s(id).border = "1px solid black";
  osc.o(id).src = canvas.toDataURL();
}
