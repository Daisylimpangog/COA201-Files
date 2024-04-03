document.addEventListener("DOMContentLoaded", function () {
  var arrows = document.querySelectorAll(".arrow");
  var dropdownContents = document.querySelectorAll(".dropdown-content");

  arrows.forEach(function (arrow, index) {
    arrow.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up
      toggleDropdown(dropdownContents[index]);
    });
  });

  document.addEventListener("click", function (event) {
    dropdownContents.forEach(function (content) {
      if (!content.contains(event.target)) {
        content.classList.remove("active");
      }
    });
  });

  function toggleDropdown(content) {
    // Toggle the "active" class for the dropdown content
    dropdownContents.forEach(function (item) {
      if (item !== content) {
        item.classList.remove("active");
      }
    });
    content.classList.toggle("active");
  }
});
