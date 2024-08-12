const menuButtons = document.querySelectorAll("header div.text-content ul li");
const scroller = document.querySelector(".scroller");
const nav = document.querySelector("nav");
const aboutButtons = document.querySelectorAll(".about-button");
const projectsButtons = document.querySelectorAll(".projects-button");
const contactButtons = document.querySelectorAll(".contact-button");
const aboutSection = document.querySelector("#about");
const projectsSection = document.querySelector("#projects");
const contactSection = document.querySelector("#contact");
const returnButton = document.querySelector(".top-button");

function preLoadTransition() {
  menuButtons.forEach((button) => {
    button.offsetHeight;

    button.classList.remove("pre-load");
  });
}

setTimeout(() => {
  preLoadTransition();
}, 250);

function addAnimation() {
  scroller.setAttribute("data-animated", true);

  const scrollerInner = scroller.querySelector(".scroller-inner");
  const scrollerContent = Array.from(scrollerInner.children);

  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);

    scrollerInner.appendChild(duplicatedItem);
  });

  const skills = document.querySelectorAll(".skills li");

  skills.forEach((skill) => {
    const span = skill.querySelector("span");
    const p = skill.querySelector("p");
    const img = skill.querySelector("img");

    skill.addEventListener("mouseenter", () => {
      span.style.border = "1px solid transparent";
      p.style.opacity = 1;
      img.style.transform = "rotate(-45deg) scale(120%)";
    });

    skill.addEventListener("mouseleave", () => {
      span.style.border = "1px solid hsla(0, 0%, 56%, 0.5)";
      p.style.opacity = 0;
      img.style.transform = "rotate(-45deg) scale(100%)";
    });
  });
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

window.addEventListener("scroll", () => {
  const height = window.innerHeight;

  if (window.scrollY >= height) {
    nav.classList.add("show");
    returnButton.classList.add("show");
  }

  if (window.scrollY < height) {
    nav.classList.remove("show");
    returnButton.classList.remove("show");
  }
});

aboutButtons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    window.scroll(0, aboutSection.offsetTop);
  });
});

projectsButtons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    window.scroll(0, projectsSection.offsetTop);
  });
});

contactButtons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    window.scroll(0, contactSection.offsetTop);
  });
});

returnButton.addEventListener("mousedown", () => {
  window.scroll(0, 0);
});
