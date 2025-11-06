// Buttons select karo
const showProjectsBtn = document.getElementById("showProjectsBtn");
const contactBtn = document.getElementById("contactBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

// Projects section select karo
const projectsSection = document.querySelector(".projects");

// Button 1: Projects show/hide
showProjectsBtn.addEventListener("click", () => {
  if (projectsSection.style.display === "none") {
    projectsSection.style.display = "block";
  } else {
    projectsSection.style.display = "none";
  }
});

// Button 2: Contact alert
contactBtn.addEventListener("click", () => {
  alert("You can contact me at laibarana908@gmail.com 💌");
});

// Button 3: Dark Mode toggle
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
