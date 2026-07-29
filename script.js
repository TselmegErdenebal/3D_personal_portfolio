const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");

document.querySelectorAll(".grid button").forEach((button) => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.querySelector("img").src;
    lightboxImage.alt = button.querySelector("img").alt;
    lightbox.hidden = false;
    document.body.classList.add("viewer-open");
  });
});

function closeViewer() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.classList.remove("viewer-open");
}

lightbox.addEventListener("click", closeViewer);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeViewer();
});
