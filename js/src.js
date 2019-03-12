const text = "Hello it is JS";

const p = document.getElementById("par");

p.innerHTML = text;

const span = document.createElement("span");
span.innerHTML = "      This is span created by JS";
p.append(span);