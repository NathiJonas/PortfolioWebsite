// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark mode toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Collapsible section
function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === "none" ? "block" : "none";
}

// Simple form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const message = document.getElementById("form-message");

  if (!email.includes("@")) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
  } else {
    message.textContent = "Thank you! We will contact you soon.";
    message.style.color = "green";
  }
});
