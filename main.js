console.log("Hello World");
const date = new Date();
const time = date.toLocaleTimeString();
console.log(time);
document.getElementById("time").innerHTML = time;