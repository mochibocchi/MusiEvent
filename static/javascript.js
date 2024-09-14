document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".genre-link");
  const eventCards = document.querySelectorAll("#event-list .col-md-4");

  filterButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); 
      const genre = this.getAttribute("data-genre");

      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      eventCards.forEach(card => {
        if (genre === "all" || card.getAttribute("data-genre") === genre) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});