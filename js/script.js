// accordion
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector(".accordion-arrow");

      if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove("up");
      } else {
        document.querySelectorAll(".accordion-content").forEach((item) => {
          item.style.display = "none";
        });
        document.querySelectorAll("accordion-arrow").forEach((arrow) => {
          arrow.classList.remove("up");
        });

        content.style.display = "block";
        arrow.classList.add("up");
      }
    });
  });
});
