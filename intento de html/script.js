// Obtiene parámetros de la URL
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

// Actualiza el mensaje en la carta si hay un parámetro 'message'
if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

// Selecciona los botones de abrir y cerrar
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
btnCloseElement.disabled = true; // Desactiva el botón de cerrar al inicio

// Evento de clic en el botón de abrir
btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover'); // Inicia animación de apertura

  setTimeout(() => {
    coverElement.style.zIndex = -1; // Mueve el cover detrás del papel

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper'); // Inicia animación de apertura del papel
    paperElement.classList.add('open-paper');

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block'; // Muestra el corazón
  }, 500); // Tiempo para la transición de apertura
});

// Evento de clic en el botón de cerrar
btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper'); // Inicia animación de cierre del papel
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0; // Restaura el cover delante del papel
    coverElement.classList.remove('open-cover');

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none'; // Oculta el corazón
  }, 500); // Tiempo para la transición de cierre
});