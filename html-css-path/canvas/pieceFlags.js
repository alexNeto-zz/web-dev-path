pieceFlags = {
  upperHalf(color) {
    context.fillStyle = color;
    context.fillRect(0, 0, 360, 120);
  },
  lowerHalf(color) {
    context.fillStyle = color;
    context.fillRect(0, 120, 360, 120);
  },
  upperThird(color) {
    context.fillStyle = color;
    context.fillRect(0, 0, 360, 80);
  },
  middleThird(color) {
    context.fillStyle = color;
    context.fillRect(0, 80, 360, 80);
  },
  lowerThird(color) {
    context.fillStyle = color;
    context.fillRect(0, 160, 360, 80);
  },
  right(color) {
    context.fillStyle = color;
    context.fillRect(0, 0, 120, 240);
  },
  center(color) {
    context.fillStyle = color;
    context.fillRect(120, 0, 120, 240);
  },
  left(color) {
    context.fillStyle = color;
    context.fillRect(240, 0, 120, 240);
  }
};
