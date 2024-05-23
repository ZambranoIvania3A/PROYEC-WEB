document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
      console.log("Formulario enviado");
  
      if (validarFormulario()) {
        console.log("Validación exitosa");
        window.location.href = "perfil.html"; // Redirigir a perfil.html
      } else {
        console.log("Validación fallida");
        alert("Usuario o contraseña incorrectos.");
      }
    });
  });
  
  function validarFormulario() {
    const useradmin = document.getElementById("useradmin").value;
    const password = document.getElementById("password").value;
  
    // Validación simple: Usuario debe ser "admin" y contraseña "123"
    if (useradmin === "admin" && password === "123") {
      return true; // Validación exitosa
    } else {
      return false; // Validación fallida
    }
  }
  