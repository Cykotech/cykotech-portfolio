function darkModeToggle() {
  return document.body.classList.toggle("dark");
}

document.getElementById("toggle").addEventListener("click", () => {
  return document.body.classList.toggle("dark");
});
