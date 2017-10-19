function o(i) {
  return typeof i == "object" ? i : document.getElementById(i);
}

osc = {
  o(i) {
    return typeof i == "object" ? i : document.getElementById(i);
  },
  s(i) {
    return o(i).style;
  },
  c(i) {
    return document.getElementsByClassName(i);
  }
};
