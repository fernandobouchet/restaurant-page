const colorMode = window.localStorage.getItem('darkMode');
if (colorMode) {
  document.documentElement.setAttribute('darkMode', colorMode);
}
