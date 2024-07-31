window.addEventListener('scroll', function() {
  scrollFunction();
});

function scrollFunction() {
  var button = document.getElementById("back-to-top-curso");
  if (window.pageYOffset > 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 300, // Scroll al inicio de la página
    behavior: 'smooth' // Desplazamiento suave
  });
}