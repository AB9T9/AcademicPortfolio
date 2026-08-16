const html = document.documentElement;
const toggle = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";

html.setAttribute("data-bs-theme", savedTheme);
toggle.checked = savedTheme === "dark";

// Toggle theme
toggle.addEventListener("change", () => {
  const theme = toggle.checked ? "dark" : "light";

  html.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
});

//! for the form button
const form = document.getElementById("msgForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  alert("Message submitted successfully!");

  form.reset();
});

//! for the copy button
const copyBtn = document.getElementById("copyBtn");
const email = document.getElementById("email");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(email.textContent);

  copyBtn.textContent = "Copied!";
  copyBtn.style.backgroundColor = "green";
  copyBtn.style.color = "white";
  alert("Email is Copied !");
  setTimeout(() => {
    copyBtn.textContent = "Copy";
    copyBtn.style.backgroundColor = "";
    copyBtn.style.color = "-";
  }, 2000);
});
document.getElementById("year").textContent = new Date().getFullYear();
