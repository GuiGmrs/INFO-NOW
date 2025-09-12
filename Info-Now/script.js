const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Troca o ícone do botão
  if (document.body.classList.contains("dark-mode")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeSidebar");

// ABRIR O SIDEBAR BOCOIÓ
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Fechar sidebar BocoiÓ
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Fechar clicando fora BocoiÓ
document.addEventListener("click", (e) => {
  if (sidebar.classList.contains("active") && !sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.classList.remove("active");
  }
});
