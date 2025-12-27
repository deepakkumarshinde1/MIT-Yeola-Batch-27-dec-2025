let h1Tag = document.querySelector("h1");
let stopButton = document.querySelector("#stop-btn");
let startButton = document.querySelector("#start-btn");
let count = 0;
let id = null;
function timer() {
  id = setInterval(() => {
    let text = `Hello ${count}`;
    h1Tag.innerHTML = text;
    count++;
  }, 100);
}
timer();

stopButton.addEventListener("click", () => {
  clearInterval(id);
});

startButton.addEventListener("click", () => {
  count = 0;
  timer();
});
