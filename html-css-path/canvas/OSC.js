function o(i) {
  return typeof i == "object" ? i : document.getElementById(i);
}

osc = {
  o: function(i) {
    return typeof i == "object" ? i : document.getElementById(i);
  },
  s: function(i) {
    return o(i).style;
  },
  c: function(i) {
    return document.getElementsByClassName(i);
  }
};
