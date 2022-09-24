const navLinks = document.querySelectorAll('.nav-link');
const darkModeToggle = document.querySelector('#toggle');

const switchMode = () => {
  darkModeToggle.classList.toggle('toggle-light');
  document.body.classList.toggle('light-mode');
};

darkModeToggle.addEventListener('click', switchMode);

function redireccionarAPagina(link) {
  console.log(link);
  if (link.id === 'menu-link') {
    window.location.href = '/menu.html';
  } else if (link.id === 'platos-link') {
    window.location.href = '/detalle.html';
  } else if (link.id === 'contacto-link') {
    window.location.href = '/contacto.html';
  } else {
    window.location.href = '/index.html';
  }
}

navLinks.forEach((link) =>
  link.addEventListener('click', () => {
    redireccionarAPagina(link);
  })
);
