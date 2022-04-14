"use strict";

//Navbar elements:
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
