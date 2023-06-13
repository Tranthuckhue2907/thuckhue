var cacular = {
  value: 0,
};
function display() {
  console.log("Giá trị hiện tại:", cacular.value);
}
function add(a) {
  cacular.value += a;
  display();
}
function subtract(a) {
  cacular.value -= a;
  display();
}
function multiply(a) {
  cacular.value *= a;
  display();
}
function divide(a) {
  cacular.value /= a;
  display();
}
