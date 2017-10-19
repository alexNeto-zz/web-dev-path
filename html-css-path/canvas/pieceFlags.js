pieceFlags = {
  upperHalf: function(color) {
    context.fillStyle = color;
    context.fillRect(0, 0, 360, 120);
  },
  lowerHalf: function(color) {
    context.fillStyle = color;
    context.fillRect(0, 120, 360, 120);
  },
  upperThird: function(color) {
    context.fillStyle = color;
    context.fillRect(0, 0, 360, 80);
  },
  middleThird: function(color) {
    context.fillStyle = color;
    context.fillRect(0, 80, 360, 80);
  },
  lowerThird: function(color) {
    context.fillStyle = color;
    context.fillRect(0, 160, 360, 80);
  },
  right: function(color) {
    context.fillStyle = color;
    context.fillRect(0, 0, 120, 240);
  },
  center: function(color) {
    context.fillStyle = color;
    context.fillRect(120, 0, 120, 240);
  },
  left: function(color) {
    context.fillStyle = color;
    context.fillRect(240, 0, 120, 240);
  }
};
