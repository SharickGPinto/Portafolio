// Formato más corto: DD/MM/YYYY HH:MM:SS
function actualizarHora() {
  const horaElemento = document.getElementById('current-time');
  
  if (horaElemento) {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-CO');
    const hora = ahora.toLocaleTimeString('es-CO');
    
    horaElemento.textContent = `${fecha} - ${hora}`;
  }
}

actualizarHora();
setInterval(actualizarHora, 1000);

window.addEventListener('load', function() {
  const sidebar = document.querySelector('.user-sidebar');
  
  if (sidebar) {
    sidebar.style.maxHeight = '100vh';
    sidebar.style.overflowY = 'auto';
    sidebar.style.position = 'sticky';
    sidebar.style.top = '0';
  }
});