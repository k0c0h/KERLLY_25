// Acordeón
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Modal
function abrirModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function cerrarModal(id) {
  document.getElementById(id).style.display = 'none';
}
