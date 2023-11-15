const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));



function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
  setTimeout(function() {
      modal.style.opacity = "1";
  }, 50); // Adiciona um pequeno atraso para a transição ser notada
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.opacity = "0";
  setTimeout(function() {
      modal.style.display = "none";
  }, 300); // Tempo da transição
}

// Fecha a janela modal se clicar fora dela
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
      event.target.style.opacity = "0";
      setTimeout(function() {
          event.target.style.display = "none";
      }, 300);
  }
}


