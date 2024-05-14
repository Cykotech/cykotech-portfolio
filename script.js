const body = document.body;
const darkModeSwitch = document.querySelector('#toggle');

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