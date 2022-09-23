const navLinks = document.querySelectorAll('.nav-link');

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
