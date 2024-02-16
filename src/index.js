import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "./style.css";
const content = document.querySelector("#content");
const homeNavBtn = document.getElementById("home");
const menuNavBtn = document.getElementById("menu");
const contactNavBtn = document.getElementById("contact");

content.appendChild(home());

homeNavBtn.addEventListener("click", () => {
  udpateContent(home(), homeNavBtn);
});

menuNavBtn.addEventListener("click", () => {
  udpateContent(menu(), menuNavBtn);
});
contactNavBtn.addEventListener("click", () => {
  udpateContent(contact(), contactNavBtn);
});

function udpateContent(page, nav) {
  content.replaceChildren(page);
  setActiveNav(nav);
}

function setActiveNav(selectedNav) {
  const navButtons = document.querySelectorAll(".nav");
  navButtons.forEach((nav) => {
    if (nav.id !== selectedNav.id) {
      nav.classList.remove("bold");
    }
  });
  selectedNav.classList.add("bold");
}
