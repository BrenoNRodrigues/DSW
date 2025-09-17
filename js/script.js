// Inicialização do AOS
document.addEventListener("DOMContentLoaded", function () {
  if (window.AOS) {
    AOS.init({
      duration: 2000,
      once: true // anima só na primeira vez
    });
  }
});

// Vídeo
window.addEventListener("load", function () {
  const video = document.querySelector("#video");
  if (video) {
    video.muted = true; // garante autoplay
    video.loop = true;
    video.play().catch(err => {
      console.warn("Autoplay bloqueado:", err);
    });
  }
});

// Galeria com Isotope
$(document).ready(function () {
  const $grid = $(".gallery-container"); // ajustado para bater com o HTML
  if ($grid.length && typeof Isotope !== "undefined") {
    $grid.isotope({
      itemSelector: ".gallery-inner",
      layoutMode: "fitRows"
    });

    // Botões de filtro
    $("[data-filter]").on("click", function () {
      const filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
      $("[data-filter]").removeClass("active");
      $(this).addClass("active");
    });
  }
});

// Validação de formulário
function validarFormulario() {
  const nome = document.getElementById("Nome");
  const email = document.getElementById("Email");

  if (!nome || nome.value.trim() === "") {
    alert("Campo Nome é obrigatório");
    return false;
  }

  if (!email || email.value.trim() === "") {
    alert("Campo E-mail é obrigatório");
    return false;
  }

  if (!validEmail(email.value.trim())) {
    alert("E-mail inválido");
    return false;
  }

  document.getElementById("frmContato").submit();
  return true;

  function validEmail(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
  }
}





























































































