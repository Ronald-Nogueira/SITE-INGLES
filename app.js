const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));





function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.classList.add('active');
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.classList.remove('active');
}

window.onclick = function (event) {
  var modals = document.getElementsByClassName("modal");
  for (var i = 0; i < modals.length; i++) {
    var modal = modals[i];
    if (event.target == modal) {
      modal.classList.remove('active');
    }
  }
};
