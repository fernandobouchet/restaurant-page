const navLinks = document.querySelectorAll('.nav-link');
const darkModeToggle = document.querySelector('#toggle');
const formCheck = document.getElementById('form-check');
const radios = document.querySelectorAll('.radio');
const menuCards = document.querySelectorAll('.platos-link');
const botonVolver = document.getElementById('boton-volver');

window.onload = () => {
  !localStorage.getItem('darkMode') && localStorage.setItem('darkMode', false);
};

const switchMode = () => {
  localStorage.getItem('darkMode') === 'false'
    ? localStorage.setItem('darkMode', true)
    : localStorage.setItem('darkMode', false);
  document.documentElement.setAttribute(
    'darkMode',
    window.localStorage.getItem('darkMode')
  );
};

darkModeToggle.addEventListener('click', switchMode);

function redireccionarASeccion(link) {
  if (link.id === 'card-ejecutivo') {
    return 'tabla-ejecutivo';
  } else if (link.id === 'card-gourmet') {
    return 'tabla-gourmet';
  } else if (link.id === 'card-minutas') {
    return 'tabla-minutas';
  } else {
    return 'tabla-bebidas';
  }
}

function redireccionarAPagina(link) {
  if (link.id === 'menu-link') {
    window.location.href = '/menu.html';
  } else if (link.id === 'contacto-link') {
    window.location.href = '/contacto.html';
  } else if (link.classList.contains('platos-link')) {
    const section = redireccionarASeccion(link);
    window.location.href = `/detalle.html#${section}`;
  } else {
    window.location.href = '/index.html';
  }
}

navLinks.forEach((link) =>
  link.addEventListener('click', () => {
    redireccionarAPagina(link);
  })
);

menuCards.forEach((link) =>
  link.addEventListener('click', () => {
    redireccionarAPagina(link);
  })
);

formCheck &&
  formCheck.addEventListener('click', () => {
    radios.forEach((radio) =>
      radio.hasAttribute('disabled')
        ? radio.removeAttribute('disabled')
        : radio.setAttribute('disabled', '')
    );
  });

function showAlert() {
  alert('Mensaje enviado');
}

botonVolver &&
  botonVolver.addEventListener('click', () => {
    history.back();
  });
