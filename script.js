const body = document.body;
const darkModeSwitch = document.querySelector("#toggle");
const lms = document.querySelector("#lms");

document.getElementById("toggle").addEventListener("click", () => {
  if (darkModeSwitch.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});

function checkInitialTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)")) {
    darkModeSwitch.checked = true;
    body.classList.add("dark");
  }
}

checkInitialTheme();

const lmsImages = ["./resources/totk_main.png", "./resources/totk_inventory.png", "./resources/totk_armor.png"];

function changeLmsImage(delay, iteration) {
  lms.style.backgroundImage = `url(${lmsImages[iteration]})`;

  console.log(iteration);

  if (iteration < lmsImages.length) {
    setTimeout(() => changeLmsImage(delay, iteration + 1), delay);
  }

  if (iteration === lmsImages.length) {
    lms.style.backgroundImage = `url(${lmsImages[0]})`;
  }
}

lms.addEventListener("mouseenter", () => {
  changeLmsImage(2000, 0);
});