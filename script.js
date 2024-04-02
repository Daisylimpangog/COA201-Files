document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with class "arrow"
  var arrows = document.querySelectorAll(".arrow");

  // Add click event listener to each arrow
  arrows.forEach(function (arrow) {
    arrow.addEventListener("click", function () {
      // Toggle the "active" class for the closest dropdown content
      var dropdownContent = this.parentElement.nextElementSibling;
      dropdownContent.classList.toggle("active");
    });
  });
});
