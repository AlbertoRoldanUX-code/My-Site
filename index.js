"use strict";

//Elements:
const menu = $("#nav-toggle");
const dropdown = $("nav ul");
const links = $(".nav-list");

//Opens dropdown when clicking the menu
menu.click(function () {
  dropdown.slideToggle();
  this.classList.toggle("active");
});

//Closes dropdown when clicking an option
links.click(function () {
  menu[0].classList.toggle("active");
  dropdown.slideUp();
});

//Makes year dynamic
$("#year").html(new Date().getFullYear());

//Revealing elements on scroll
//1º Create class .section-hidden

//2º Remove .section-hidden class as you approach the sections

//2.3º Create callback function
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  //Remove class when target is intersecting
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");

  //Unobserve sections
  observer.unobserve(entry.target);
};

//2.2º Create options for observer
const obsOptions = {
  root: null,
  threshold: 0.15,
};

//2.1º Create a new intersection observer
const sectionObserver = new IntersectionObserver(revealSection, obsOptions);
const allSections = document.querySelectorAll(".section");
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
