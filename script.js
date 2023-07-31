const closeButton = document.getElementById("closeButton");
const announcement = document.getElementById("announcement");

closeButton.addEventListener("click", () => {
  announcement.style.display = "none";
});