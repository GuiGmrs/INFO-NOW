const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Só pra trocar o ícone
  if (document.body.classList.contains("dark-mode")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeSidebar");

// ABRIR O SIDEBAR BOCOIÓ clicando na figura
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Fechar sidebar BocoiÓ clicando na figura
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Fechar clicando fora BocoiÓ
document.addEventListener("click", (e) => {
  if (sidebar.classList.contains("active") && !sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.classList.remove("active");
  }
});

// Elementos que serão filtrados BocoiÓ
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const newsCards = document.querySelectorAll('.news-card');

// Filtrar / Ele puxa oque estiver no <h3> 
function filtrarNoticias() {
  const termo = searchInput.value.toLowerCase();

  newsCards.forEach(card => {
    const titulo = card.querySelector('h3').textContent.toLowerCase();
    
    // Mostrar ou esconder
    if (titulo.includes(termo)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// CLICANDO
searchBtn.addEventListener('click', filtrarNoticias);

// ENTER
searchInput.addEventListener('keyup', function(event) {
  if (event.key === "Enter") {
    filtrarNoticias();
  }
});

