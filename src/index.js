import "./style.css";
import './fonts/fonts.css'

import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

const content = document.getElementById("content");

function clearContent() {
  content.innerHTML = "";
}

homeBtn.addEventListener("click", () => {
  clearContent();
  content.appendChild(homePage());
});

menuBtn.addEventListener("click", () => {
  clearContent();
  content.appendChild(menuPage());
});

contactBtn.addEventListener("click", () => {
  clearContent();
  content.appendChild(contactPage());
});

content.appendChild(homePage());
