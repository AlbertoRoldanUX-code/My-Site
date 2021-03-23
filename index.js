"use strict";

(function ($) {
  $(function () {
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    $("#nav-toggle").click(function () {
      this.classList.toggle("active");
    });
  });
})(jQuery);

document.getElementById("year").innerHTML = new Date().getFullYear();
