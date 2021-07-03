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

////////////////////////////////////////////////////////
//Implement lazy loading images strategy
//1º Get placeholders images (of around 15 kilobytes) at reduceimages.com. (10% dimension and 1% quality)
//2º Reference placeholder image in the src of img.
//3º Create class of lazy-img {filter: blur(20px)}
//4º Give the images the class of lazy-img
//5º Reference real image in a data-src attribute.
//6º Select all images which have the property of data-src
const imgTargets = document.querySelectorAll("img[data-src]");

//7º Create callback function
const loadImg = function (entries, observer) {
  entries.forEach((entry) => {
    //If they are not intersecting, we want an early return
    if (!entry.isIntersecting) return;
    //8º Replace src attribute for data-src
    entry.target.src = entry.target.dataset.src;
    //9ºRemove lazy-img class.
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
    });
    observer.unobserve(entry.target);
  });
};

//10º Create image observer
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

//11º Attach imgObserver to all targets
imgTargets.forEach((img) => imgObserver.observe(img));
